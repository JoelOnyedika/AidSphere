import React from "react";
import Chats from "./chunks/Chats";
import Tickets from "./chunks/Tickets";
import Emails from "./chunks/Emails";
import Websites from "./chunks/Websites";

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

    default:
      return <></>;
  }
};

export default ChunkSetter;
