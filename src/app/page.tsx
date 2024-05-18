"use client";

import Navbar from "@/components/landingpage/Navbar";
import Hero from "@/components/landingpage/Hero";
import "./globals.css";
import { useEffect, useState } from "react";
import { userSessionExist } from "@/lib/server-actions/auth-actions";
import db from "@/lib/supabase/db";
import { createClient } from "@supabase/supabase-js";
import { viewUserTable } from "@/lib/supabase/queries";
import { RecoilRoot } from "recoil";

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
    <RecoilRoot>
      <main className="homepage-color text-white h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Navbar doesSessionExist={doesSessionExist} />
          <div className="flex justfiy-center items-center mt-10">
            <Hero doesSessionExist={doesSessionExist} />
          </div>
      </main>
    </RecoilRoot>
  );
}
