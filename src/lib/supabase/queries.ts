import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { FormSchema } from "../types";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export async function insertUser({ username, email }: z.infer<typeof FormSchema>) {
  try {
    const { data: newUserRow, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email);

    if (!fetchError && newUserRow && newUserRow.length > 0) {
      const userId = newUserRow[0].id; // Assuming 'id' is the primary key column
      const { data: updateData, error: updateError } = await supabase
        .from('users')
        .upsert([{ id: userId, username }], { onConflict: ['id'] });

      if (updateData === null) {
        console.log('Warning: updateData is null');
        if (updateError === null) {
          console.log('Warning: updateError is undefined');
        }
      }

      if (updateError !== null && updateError !== undefined) {
        console.error('Error updating username:', updateError);
        return updateError;
      }

      // Check if 'updateData' is truthy before logging
      if (updateData) {
        console.log('Username updated successfully:', updateData);
      } else {
        console.error('Error: updateData is null or undefined');
        // Handle this case as needed
      }
    } else {
      console.error('Error fetching user data:', fetchError);
      return fetchError;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

  

  export async function viewUserTable() {
    try {
      const { data, error } = await supabase.from('users').select("*");
      
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