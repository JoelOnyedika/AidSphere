"use client";
import { Atom } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { getUserCookies } from "@/lib/supabase/queries";
import Sidebar from "@/components/dashboard/Sidebar";

const Home = () => {
  const [username, setUsername] = useState("User");
  useEffect(() => {
    async function fetchCookie() {
      const cookie = await getUserCookies();
      const parsedValue = JSON.parse(cookie.value);
      setUsername(parsedValue.username);
    }
    fetchCookie();
  }, []);

  return (
    <div className="flex text-white">
      <div>
        <Sidebar />
      </div>
      <div className="ml-10 flex flex-col flex-grow h-screen">
        <div>
          <div className="justify-center items-center flex h-screen text-white">
            <div className="items-center justify-center inline-block">
              <h1 className="font-bold text-4xl">Hello, {username}🤗</h1>
              <span>Welcome to AidSphere</span>
              <div className="mt-4 mb-4">Now lets get started</div>
              <ul className="space-y-3 font-semibold">
                <li className="flex">
                  <Atom className="mr-2 scale-75" /> Add Knowledge
                </li>
                <li className="flex">
                  <Atom className="mr-2 scale-75" /> Train you AI model
                </li>
                <li className="flex">
                  <Atom className="mr-2 scale-75" /> Create your Chatbot
                </li>
                <li className="flex">
                  <Atom className="mr-2 scale-75" /> Create a Ticket form
                </li>
                <li className="flex">
                  <Atom className="mr-2 scale-75" /> Setup an Email Inbox
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
