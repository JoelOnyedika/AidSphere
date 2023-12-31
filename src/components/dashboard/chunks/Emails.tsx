import React, { useState } from "react";
import Header from "./components/Header";
import { Inbox, Mail} from "lucide-react";

const Emails = () => {
  const [headerData, setHeaderData] = useState({
    icon: Mail,
    title: "Emails",
    talks: "Access and manage all your Emails",
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div>
        <Header headerData={headerData} />
      </div>
      <div className="mt-10 mr-40">
        <div
          className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${isClicked ? 'bg-gray-600' : ''}`}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex">
              <div className="mr-2">
                <Inbox />
              </div>
              <div>
                <span className="font-semibold">Untitled</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">30-12-2023 07:51 PM</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Emails;
