import { Atom } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="justify-center items-center flex h-screen text-white">
      <div className="items-center justify-center inline-block">
        <h1 className="font-bold text-4xl">Hello, Joel Onyedika</h1>
        <span>Welcome to AidSphere</span>
        <div className="mt-4 mb-4">Now lets get started</div>
        <ul className="space-y-3 font-semibold">
          <li className="flex"><Atom className="mr-2 scale-75" /> Add Knowledge</li>
          <li className="flex"><Atom className="mr-2 scale-75" /> Train you AI model</li>
          <li className="flex"><Atom className="mr-2 scale-75" /> Create your Chatbot</li>
          <li className="flex"><Atom className="mr-2 scale-75" /> Create a Ticket form</li>
          <li className="flex"><Atom className="mr-2 scale-75" /> Setup an Email Inbox</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
