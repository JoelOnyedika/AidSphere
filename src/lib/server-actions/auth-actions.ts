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
  //BUGGED
  const {data}  = await supabase.from("profiles").select("*")

    // .eq("email", email);

  console.log(data)

  if (data?.length) {
    console.log("user exists", data);
    return { error: { message: "User already exists"} }.toString();
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

export async function userSessionExist() {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session ? true : false;
}

userSessionExist();