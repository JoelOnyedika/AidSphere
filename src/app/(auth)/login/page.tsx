"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import Loader from "@/components/global/loader";
import { actionLoginUser, createSessionCookie, signUpWithOAuth } from "@/lib/server-actions/auth-actions";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


const Login = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (
    formData
  ) => {
    try {
      const error = await actionLoginUser(formData);
      console.log(error);
      if (error) {
        form.reset();
        setSubmitError(error);
        console.log("error", error);
      } else {
        const {email} = formData
        const sessionCookie = await createSessionCookie(email)
        router.replace("/dashboard/home");
      }
    } catch (error) {
      console.log(error);
      setSubmitError("An unexpected error occurred");
    }
  };

  const handleSignupWithOAuth = async (provider) => {
  try {
    const result = await signUpWithOAuth(provider);
    if (result.error) {
      setSubmitError(result.error.message);
    } else {
      console.log('OAuth process successful:', result);
      router.push(result.data.url);

    }
  } catch (error) {
    console.log(error);
    setSubmitError("An unexpected error occurred");
  }
};

  return (
    <div className="ml-auto mr-auto  bg-[#0e1425] text-white">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold">Login in account</h2>
          <span>
            Haven't signed up yet?{" "}
            <Link href="/signup" className="text-blue-800">
              Sign up
            </Link>
          </span>
        </div>
        <div className="bg-inherit p-6 rounded-lg shadow-md">
          <div className="mb-5">
            <div>
              <div className="mb-5">
        <div className="space-y-3">
          <Button className="w-full space-x-2 py-2 px-4 flex items-center hover:bg-blue-500" variant={"blue"}  onClick={() => handleSignupWithOAuth('google')}>
            <FcGoogle size={30} className="mr-2" /> {/* Increase size to 30 */}
            Continue with Google
          </Button>
          <Button className="w-full space-x-2 py-2 px-4 flex items-center hover:bg-blue-500" variant={"blue"} onClick={() => handleSignupWithOAuth('github')}>
            <BsGithub size={30} className="mr-2" /> {/* Increase size to 30 */}
            Continue with GitHub
          </Button>
        </div>
      </div>
            </div>
          </div>
          <Form {...form}>
            <form
              className="space-y-8"
              onChange={() => {
                if (submitError) setSubmitError("");
              }}
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  disabled={isLoading}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          type="email"
                          className="w-[350px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  disabled={isLoading}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full bg-blue-700 hover:bg-blue-500"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <Loader /> : "Login"}
                </Button>
              </div>
            </form>
          </Form>
          <span className="self-container">
            Don't have an account yet{" "}
            <Link href="/signup" className="text-blue-800">
              Create account
            </Link>
          </span>
          {submitError && (
            <Alert className="bg-red-400">
              <AlertDescription className="text-white">
                {submitError}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
