import React from "react";
import Chats from "./chunks/activity/Chats";
import Tickets from "./chunks/activity/Tickets";
import Emails from "./chunks/activity/Emails";
import Websites from "./chunks/knowledge/Websites";
import Documents from "./chunks/knowledge/Documents";
import Videos from "./chunks/knowledge/Videos";
import Faq from "./chunks/knowledge/Faq";

interface IChunkSetter {
  activeChunk: number;
}

const ChunkSetter: React.FC<IChunkSetter> = ({ activeChunk }) => {
  switch (activeChunk) {
    case 3:
        return <Chats/>
    case 4:
      return <Tickets/>
    case 5:
      return <Emails/>
    case 6:
      return <Websites/>
    case 7:
      return <Videos/>
    case 8:
      return <Documents/>
    case 9:
      return <Faq/>

    default:
      return <></>;
  }
};

export default ChunkSetter;
