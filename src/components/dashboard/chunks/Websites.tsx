import { Globe } from "lucide-react";
import React, { useState } from "react";
import Header from "./components/Header";
import { Button } from "@/components/ui/button";

const Websites = () => {
  const [headerData, setHeaderData] = useState({
    icon: Globe,
    title: "Websites",
    talks:
      "Add websites to your knowledge sphere. Our AI will automatically extract relevant information",
  });
  return (
    <div className="space-y-3">
      <div>
        <Header headerData={headerData} />
      </div>
      <div>
        <Button>Add a new website</Button>
      </div>
    </div>
  );
};

export default Websites;
