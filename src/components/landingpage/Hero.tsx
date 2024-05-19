import "@/app/globals.css";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { botCards } from "@/lib/constants";
import { Meteors } from "../ui/effects/meteors";
import { Button as MovingBorderBtn } from "../ui/effects/moving-border";

interface IHero {
  doesSessionExist: boolean;
}

const Hero = ({ doesSessionExist }: IHero) => {
  return (
    <div className="ml-auto mr-auto pl-[24px] pr-[24px]">
      {/* header text start */}
      <section className=" text-center">
        <div className="r">
          <h1 className="text-[50px] font-extrabold neon-blue">AI Support</h1>
          <span className="text-[50px] font-extrabold">for your Startups</span>
        </div>
        <div className="mt-5">
          <p>
            An AI-powered support ecosystem built to give your users an
            outstanding customer experience
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center space-x-2">
          <Link
            //{/* href={doesSessionExist ? "/dashboard" : '/signup'} */}
            href={"/dashboard"}
          >
            <MovingBorderBtn
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              {/*doesSessionExist ? "Dashboard" : "Get started"*/}
              <span>Dashboard</span>
            </MovingBorderBtn>
          </Link>
          <Link
            //{/* href={doesSessionExist ? "/dashboard" : '/signup'} */}
            href={"/dashboard"}
          >
            <MovingBorderBtn
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <span>Documentation</span>
            </MovingBorderBtn>
          </Link>
        </div>
        <hr
          style={{
            border: "none",
            height: "1px",
            marginTop: "50px",
            marginBottom: "50px",
            background:
              "linear-gradient(to right, transparent 10%, #ffffff 50%, transparent 90%)",
          }}
        />
      </section>
      {/* header text end */}

      {/* cards start */}
      <section className="mt-10 space-y-10 text-white">
          <div className="text-center space-y-5">
            <div className="flex flex-col items-center">
              <h2 className="text-[30px] font-extrabold">
                Live <span className="neon-blue text-[30px]"> Ai </span>chat
                support. Trained using your{" "}
                <span className="neon-blue text-[30px]">own data</span>
              </h2>
            </div>
            <div className="mt-5 mb-5">
              <p>
                A very well-trained AI chat bot that can deliver better results
                than humans in 9/10 cases
              </p>
            </div>
          </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1224px] mx-auto pl-[24px] pr-[24px] mt-5 gap-4">
          {botCards.map((data: any, index: number) => (
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <data.icon />
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  {data.title}
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  {data.description}
                </p>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          ))}
        </div>
        {/* cards end */}
        <hr
          style={{
            border: "none",
            height: "1px",
            marginTop: "50px",
            marginBottom: "50px",
            background:
              "linear-gradient(to right, transparent 10%, #ffffff 50%, transparent 90%)",
          }}
        />
      </section>

      <section>
      <div className="text-center space-y-5">
            <div className="flex flex-col items-center">
              <h2 className="text-[30px] font-extrabold">
                Spend less time on support
              </h2>
            </div>
            <div className="mt-5 mb-5">
              <p>
              A complete support ecosystem to help you spend less time supporting your users - and more time growing your business.
              </p>
            </div>
          </div>
      </section>

      {/* connect tools start */}
      <section>
        <div className="flex">
          <div></div>
          <div>
            <h2 className="font-bold text-[30px]">
              Connect AidSphere with all the tools you know and love
            </h2>
            <p>Have the ability to connect your ai with third-party tools</p>
            <br />
            <span className="bg-purple-400 mt-3 rounded-full p-3">
              Comming Soon!
            </span>
          </div>
        </div>
      </section>
      {/* connect tools end */}
      <div className="blur-rotated"></div>
    </div>
  );
};

export default Hero;
