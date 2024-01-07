"use client";

import Navbar from "@/components/landingpage/Navbar";
import Hero from "@/components/landingpage/Hero";
import "./globals.css";
import { useEffect, useState } from "react";
import { userSessionExist } from "@/lib/server-actions/auth-actions";
import db from "@/lib/supabase/db";
import { createClient } from "@supabase/supabase-js";
import { viewUserTable } from "@/lib/supabase/queries";

export default function Home() {
  const [doesSessionExist, setDoesSessionExist] = useState(false);
    // try {
    //   userSessionExist().then((res) => (
    //     setDoesSessionExist(res)
    //   ))
    // } catch (error) {
    //   setDoesSessionExist(false)
    //   console.log(error)
    // }

  return (
    <main className="homepage-color text-white">
      <Navbar doesSessionExist={doesSessionExist} />
      <div className="flex justfiy-center items-center mt-10">
        <Hero doesSessionExist={doesSessionExist} />
      </div>
    </main>
  );
}
