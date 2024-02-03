"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { FormSchema } from "../types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
const { v4: uuidv4 } = require('uuid');


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

);

const myUniqueUUID = uuidv4();

export async function insertUser({
  username,
  email,
}: z.infer<typeof FormSchema>) {
  try {
    const { data: newUserRow, error: fetchError } = await supabase
      .from("users")
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
    const userCookies = cookies().get("userCookie")
    return userCookies
  } catch(error){
    console.log(error)
  }
}

export async function addWebsiteToKnowledgebase(link: string) {
  try {
    const currentDate = new Date().toISOString();

    const userCookie = await getUserCookies()
    console.log(JSON.parse(userCookie.value))

    const {data, error} = await supabase.from('websites').insert({id: myUniqueUUID, title: link, url: link, user_id: JSON.parse(userCookie.value).id, is_trained: false, created_at: currentDate})
    console.log(data)
    if (error) {
      console.log(error)
      return {error: error}
    }
    return { data: data }
  } catch (error) {
    console.log(`Error while adding website to the database ${error}`);
    return {error: `Error while adding website to the database`}
  }
}

export async function getWebsiteKnowledgeBaseData() {
  try {
    const userCookie = await getUserCookies()
    const { data, error } = await supabase.from('websites').select('*').eq('user_id', JSON.parse(userCookie.value).id)
    if (data) {
      console.log(data)
      return {data, error: null}
    }
    console.log(error)
    return {data: null, error}
  } catch(error) {
    console.error("Error in getWebsiteKnowledgeBaseData:", error);
    return { data: null, error };
  } 
}

getWebsiteKnowledgeBaseData()

export async function deleteWebsiteInKnowledgebase(id: number) {
  try {
    const userCookie = await getUserCookies()
    const {error} = await supabase.from("websites").select('*').eq('id', id)

    if (error) {
      console.log(error)
      return {error}
    } 
    return {data: "Deleted website URL successfully", error: null}
  } catch(error) {
    console.error("Error in deleteWebsiteInKnowledgebase", error)
    return {data: null, error}
  }
}

