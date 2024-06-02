"use server";

// import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { FormSchema, websiteTable } from "../types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { extractVideoId, isValidYouTubeUrl } from "../shit-functions/functions";
const { v4: uuidv4 } = require("uuid");
import { createClient } from "@/lib/supabase"

import { IChatbotData } from "@/lib/interface";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

const supabase = createClient();

// const myUniqueUUID = uuidv4();

export async function updateUsername({
  username,
  email,
}: z.infer<typeof FormSchema>) {
  try {
    // Query the profile table for the given email
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .eq('email', email);

    // Handle any errors from the query
    if (error) {
      console.error('Error fetching profile:', error);
      throw new Error('Could not fetch profile');
    }

    // Check if the profile was found
    if (data.length === 0) {
      console.warn('No profile found for the given email:', email);
      throw new Error('No profile found for the given email');
    }

    // Update the username in the profile table
    const { id } = data[0]; // Assuming the profile table has an 'id' column
    console.log(id)
    const { updateError } = await supabase
      .from('profile')
      .update({ username })
      .eq('id', id);

    // Handle any errors from the update
    if (updateError) {
      console.log('Error updating username:', updateError);
      throw new Error('Could not update username');
    }

    console.log('Username successfully updated');
  } catch (error) {
    // General error handling
    console.log('An error occurred:', error);
    throw new Error('An error occurred while updating the username');
  }
}
export async function insertUser({
  username,
  email,
}: z.infer<typeof FormSchema>) {
  try {
    const { data: newUserRow, error: fetchError } = await supabase
      .from("profile")
      .select("*")
      .eq("email", email);

    if (!fetchError && newUserRow && newUserRow.length > 0) {
      const userId = newUserRow[0].id; // Assuming 'id' is the primary key column
      const { data: updateData, error: updateError } = await supabase
        .from("users")
        .upsert([{ id: userId, username }], { onConflict: ["id"] });

      if (updateData === null) {
        console.log("Warning: updateData is null");
        if (updateError === null) {
          console.log("Warning: updateError is undefined");
        }
      }

      if (updateError !== null && updateError !== undefined) {
        console.error("Error updating username:", updateError);
        return updateError;
      }

      // Check if 'updateData' is truthy before logging
      if (updateData) {
        console.log("Username updated successfully:", updateData);
      } else {
        console.error("Error: updateData is null or undefined");
        // Handle this case as needed
      }
    } else {
      console.error("Error fetching user data:", fetchError);
      return fetchError;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function viewUserTable() {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error(error);
      throw new Error("Error fetching user data from the database");
    }

    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
}

export async function getUserCookies() {
  try {
    const userCookies = cookies().get("userCookie");
    return userCookies;
  } catch (error) {
    console.log(error);
  }
}

export async function addWebsiteToKnowledgebase(link: string) {
  try {
    const currentDate = new Date().toISOString();

    const userCookie = await getUserCookies();
    console.log(JSON.parse(userCookie.value));

    const myUniqueUUID = uuidv4();

    const { data, error } = await supabase
      .from("websites")
      .insert({
        id: myUniqueUUID,
        title: link,
        url: link,
        user_id: JSON.parse(userCookie.value).id,
        is_trained: false,
        created_at: currentDate,
      });
    console.log(data);
    if (error) {
      console.log(error);
      return { error: error };
    }
    return { data: data };
  } catch (error) {
    console.log(`Error while adding website to the database ${error}`);
    return { error: `Error while adding website to the database` };
  }
}

export async function addVideoToKnowledgebase(link: string) {
  try {
    const currentDate = new Date().toISOString();

    const isValidUrl = isValidYouTubeUrl(link);

    if (isValidUrl) {
      const videoId = extractVideoId(link);
      console.log(videoId);
      const userCookie = await getUserCookies();
      console.log(JSON.parse(userCookie.value));

      const myUniqueUUID = uuidv4();

      const { data, error } = await supabase
        .from("videos")
        .insert({
          id: myUniqueUUID,
          title: link,
          url: link,
          user_id: JSON.parse(userCookie.value).id,
          is_trained: false,
          yt_video_id: videoId,
          created_at: currentDate,
        });
      console.log(data);
      if (error) {
        console.log(error);
        return { error: error };
      }
      return { data: data };
    } else {
      return { data: null, error: "Youtube link is invalid" };
    }
  } catch (error) {
    console.log(`Error while adding video to the database ${error}`);
    return { error: `Error while adding video to the database` };
  }
}

export async function getKnowledgeBaseData(table: websiteTable) {
  try {
    const userCookie = await getUserCookies();
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("user_id", JSON.parse(userCookie.value).id);
    if (data) {
      console.log(data);
      return { data, error: null };
    }
    console.log(error);
    return { data: null, error };
  } catch (error) {
    console.error("Error in getKnowledgeBaseData:", error);
    return { data: null, error };
  }
}

export async function deleteInKnowledgebase(id: number, table: websiteTable) {
  try {
    const userCookie = await getUserCookies();
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) {
      console.log(error);
      return { error };
    }
    return { data: "Deleted website URL successfully", error: null };
  } catch (error) {
    console.error("Error in deleteWebsiteInKnowledgebase", error);
    return { data: null, error };
  }
}

// STORAGE BUCKETS

async function doesStorageBucketExist(name: string) {
  try {
    const { data, error } = await supabase.storage.getBucket(name);
    console.log("doesStorageBucketExist", data, error);
    return data; // Return data directly
  } catch (error) {
    console.error(error); // Log the error
    return null; // Return null in case of error
  }
}

export async function createStorageBucket(name: string) {
  try {
    const { data, error } = await supabase.storage.createBucket(name, {
      public: false,
      allowedMimeTypes: [],
      fileSizeLimit: 1024,
    });
    console.log("createStorageBucket", data, error);
    return { data, error }; // Return data and error
  } catch (error) {
    console.error(error); // Log the error
    return { data: null, error }; // Return null data and error
  }
}

export async function insertStorageBucket(extension: string, file: any) {
  try {
    let data, error;

    const doesBucketExist = await doesStorageBucketExist(extension);
    console.log("doesBucketExist", doesBucketExist);

    if (doesBucketExist !== null) {
      ({ data, error } = await supabase.storage
        .from(extension)
        .upload(`${uuidv4()}.${extension}`, file));
      console.log(data);
    } else {
      // Create new storage bucket and upload file
      const createBucket = await createStorageBucket(extension);
      if (createBucket.error) {
        return { data: null, error: createBucket.error };
      }
      ({ data, error } = await supabase.storage
        .from(extension)
        .upload(`${uuidv4()}.${extension}`, file));
    }

    if (error) {
      console.error(error);
    }
    return { data, error };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
}

// CHATBOTS QUERIES
export async function createChatbot(data: IChatbotData) {
  const myUniqueUUID = uuidv4();
  try {
    const { data, error } = await supabase
      .from("chatbot")
      .insert({
        id: myUniqueUUID,
        video: data.videoId,
        document: data.documentId,
      });
    console.log(data);
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
}

export async function getAllChatbot() {
  try {
    const { data, error } = await supabase.from("chatbot").select("*");
    if (error) {
      console.error(error);
      throw new Error("Error fetching user data from the database");
    }
    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
}

export async function getOneChatbotInstance(id: any) {
  const userCookie = await getUserCookies();
  try {
    const { data, error } = await supabase.from("chatbot_instance").select("*").eq('id', id);
    if (error) {
      console.log(error);
      return { error: error };
    }
    console.log(data)
    return { data, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
}

export async function createChatbotInstance() {
  const myUniqueUUID = uuidv4();
  try {
    const userCookie = await getUserCookies();
    const { data, error } = await supabase
      .from("chatbot_instance")
      .insert({ id: myUniqueUUID, user_id: JSON.parse(userCookie.value).id,  name: "Untitled" });
    if (error) {
      console.error("Error creating chatbot instance:", error.message);
      return { data: null, error };
    }
    if (data) {
      console.log("Chatbot instance created successfully:", data);
      return { data, error: null };
    }
    return {data: null, error: null}

    // since supabase refused to return any data or error, we will check for the data ourselves
    const { data2, err } = getOneChatbotInstance(myUniqueUUID)
    if (data2) {
      return { data2, error: null }; 
    }
    if (error) {
      console.error("Error creating chatbot instance:", err.message);
      return { data: null, err };
    }
  } catch (error) {
    console.error("Error creating chatbot instance:", error);
    return { data: null, error };
  }
}


export async function getAllChatbotInstance() {
  const userCookie = await getUserCookies();
  try {
    const { data, error } = await supabase.from("chatbot_instance").select("*").eq('user_id', JSON.parse(userCookie.value).id);
    if (error) {
      console.log(error);
      return { error: error };
    }
    console.log(data)
    return { data, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
}


