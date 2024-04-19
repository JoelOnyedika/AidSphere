"use client";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/lib/types";
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
import { actionSignupUser } from "@/lib/server-actions/auth-actions";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { MailCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { insertUser } from "@/lib/supabase/queries";

const Signup = () => {
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx("bg-primary", {
        "bg-red-500/10": codeExchangeError,
        "border-red-500/50": codeExchangeError,
        "text-red-700": codeExchangeError,
      }),
    [codeExchangeError]
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async ({
    email,
    password,
    username,
  }: z.infer<typeof FormSchema>) => {
    try {
      console.log("submit btn triggered")
      const signupResult = await actionSignupUser({ email, password });

      if (signupResult.error.message) {
        console.log("Error:", signupResult.error.message);
        setSubmitError(signupResult.error.message)
        form.reset()
        return;
      } else {
          
         const insertResult = await insertUser({
          username, email,
        });

        if (insertResult instanceof Error) {
          console.log("Error updating username:", insertResult);
          setSubmitError("Unable to save username to database");
          form.reset();
          return;
        }

        setConfirmation(true);
      }
      
    } catch (error) {
      console.log("An unexpected error occurred", error);
      setSubmitError("An unexpected error occurred");
      form.reset();
    }
  };

  return (
    <div className="ml-auto mr-auto  bg-[#0e1425] text-white">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold">Create an account</h2>
          <span>
            Already a user?{" "}
            <Link href="/login" className="text-blue-800">
              Sign in
            </Link>
          </span>
        </div>
        <div className="bg-inherit p-6 rounded-lg shadow-md">
          <div className="mb-5">
            <div>
              <Button className="w-full bg-blue-700 py-2 px-4 flex items-center hover:bg-blue-500">
                <img src="../../../../public/icons/google.png" alt="" />
                Sign in with Google
              </Button>
            </div>
          </div>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              {!confirmation && !codeExchangeError && (
                <>
                  <FormField
                    control={form.control}
                    name="username"
                    disabled={isLoading}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="username"
                            {...field}
                            type="username"
                            className="w-[350px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    {isLoading ? <Loader /> : "Create account"}
                  </Button>
                </>
              )}
            </form>
            <span className="self-container">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-800">
                Login
              </Link>
            </span>
            {submitError && (
              <Alert>
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}
            {(confirmation || codeExchangeError) && (
              <>
                <Alert className={`${confirmationAndErrorStyles} text-white`}>
                  {!codeExchangeError && (
                    <MailCheck className="h-4 w-4 text-white" color="#fff" />
                  )}
                  <AlertTitle>
                    {codeExchangeError ? "Invalid Link" : "Check your email."}
                  </AlertTitle>
                  <AlertDescription>
                    {codeExchangeError ||
                      "An email confirmation has been sent."}
                  </AlertDescription>
                </Alert>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
