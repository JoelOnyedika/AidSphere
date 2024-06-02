"use client"

import React, { useMemo, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { actionSignupUser, signUpWithOAuth, createSessionCookie } from "@/lib/server-actions/auth-actions";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { MailCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { updateUsername } from "@/lib/supabase/queries";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Signup = () => {
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const router = useRouter()

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
    defaultValues: { email: "", password: "", username: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async ({
    email,
    password,
    username,
  }: z.infer<typeof FormSchema>) => {
    try {
      console.log(email, username, password)
      const signupResult = await actionSignupUser({ email, password });
      console.log("signup result got triggered", signupResult)

      if (signupResult.error) {
        setSubmitError(signupResult.error.message);
        form.reset();
        return;
      }else {
        const insertResult = await updateUsername({ username, email });
        console.log("Insert result ", insertResult)

        if (insertResult instanceof Error) {
          setSubmitError("Unable to save username to database");
          form.reset();
          return;
        }

        setConfirmation(true);
      }
      
    } catch (error) {
      setSubmitError("An unexpected error occurred");
      form.reset();
    }
  };

  const handleSignupWithOAuth = async (provider) => {
  try {
    const result = await signUpWithOAuth(provider);
    if (result.error) {
      setSubmitError(result.error.message);
    } else {
      console.log('OAuth process successful:', result);
      router.push(result.data.url)
    }
  } catch (error) {
    console.log(error);
    setSubmitError("An unexpected error occurred");
  }
  };


  useEffect(() => {
    if (submitError) {
      console.log("Error occurred:", submitError);
    }
  }, [submitError]);

  return (
    <div className="ml-auto mr-auto bg-[#0e1425] text-white">
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
        <div className="space-y-3">
          <Button className="w-full space-x-2 py-2 px-4 flex items-center hover:bg-blue-500" variant={"blue"}  onClick={() => handleSignupWithOAuth('google')}>
            <FcGoogle size={30} className="mr-2" /> {/* Increase size to 30 */}
            Sign up with Google
          </Button>
          <Button className="w-full space-x-2 py-2 px-4 flex items-center hover:bg-blue-500" variant={"blue"} onClick={() => handleSignupWithOAuth('github')}>
            <BsGithub size={30} className="mr-2" /> {/* Increase size to 30 */}
            Sign up with GitHub
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
                            placeholder="Username"
                            {...field}
                            type="text"
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
                    className="w-full"
                    variant={"blue"}
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
              <Alert className={`${confirmationAndErrorStyles} text-white`}>
                {!codeExchangeError && (
                  <MailCheck className="h-4 w-4 text-white" />
                )}
                <AlertTitle>
                  {codeExchangeError ? "Invalid Link" : "Check your email."}
                </AlertTitle>
                <AlertDescription>
                  {codeExchangeError ||
                    "An email confirmation has been sent."}
                </AlertDescription>
              </Alert>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
