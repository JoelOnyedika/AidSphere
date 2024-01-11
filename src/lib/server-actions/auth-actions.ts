"use server";

import { z } from "zod";
import { FormSchema } from "../types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import * as dotenv from "dotenv";

dotenv.config({ path: "../../env" });

export async function actionSignupUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase.from("users").select("*").eq("email", email);
  console.log(data);

  if (data && data.length > 0) {
    console.log("User exists", data);
    return { error: { message: "User already exists on this email" } };
  } else {
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}api/auth/callback`,
      },
    });
    return response;
  }
}


export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return error?.message.toString()  
  } catch (error) {
    console.log(error)
  }
  
}

export async function createSessionCookie(email: string) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.from("users").select("*").eq("email", email);
    const {id, username, email: userEmail} = data[0]

    cookies().set("userCookie", JSON.stringify({ username, userEmail, id }), {
      httpOnly: true,
      secure: true,
    });

    console.log(cookies().get('userCookie'))
  } catch(error) {
    console.log(error)
  }
}