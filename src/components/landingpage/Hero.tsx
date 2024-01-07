import "@/app/globals.css";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { botCards } from "@/lib/constants";

interface IHero {
  doesSessionExist: boolean
}

const Hero = ({ doesSessionExist }: IHero) => {
  return (
    <div className="ml-auto mr-auto pl-[24px] pr-[24px]">
      {/* header text start */}
      <section className=" text-center">
        <div className="r">
          <h1 className="text-[50px] font-extrabold">AI Support</h1>
          <span className="text-[50px] font-extrabold">for your Startups</span>
        </div>
        <div className="mt-5">
          <p>
            An AI-powered support ecosystem built to give your users an
            outstanding customer experience
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <Link
            href={doesSessionExist ? "/dashboard" : '/signup'}
            className="rounded-full mr-5 flex bg-purple-400 p-3"
          >
            {doesSessionExist ? "Dashboard" : "Get started"}
            <MoveRight />
          </Link>
          <Link href={"/dashboard"} className="flex">
            Documentation
            <MoveRight />
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
      <section className="mt-10 text-white">
        <div>
          <div className="text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-[30px] font-extrabold">
                Live <span className="neon-blue text-[30px]">{" "}Ai{" "}</span>chat
                support. Trained using your{" "}
                <span className="neon-blue text-[30px]">own data</span>
              </h2>
            </div>
            <div className="mt-5">
              <p>
                A very well-trained AI chat bot that can deliver better results
                than humans in 9/10 cases
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1224px] mx-auto pl-[24px] pr-[24px] mt-5 gap-4">
          {botCards.map((data: any, index: number) => (
            <Card key={index} className="p-5 bg-gray-800 text-white">
              <CardContent>
                <div className="flex items-center mb-3">
                  <span className="font-bold mr-2">{<data.icon />}</span>
                  <span className="font-bold">{data.title}</span>
                </div>
                <p className="mb-5">{data.description}</p>
              </CardContent>
            </Card>
          ))}
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

      {/* cards end */}
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
