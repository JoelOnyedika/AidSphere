import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const TKnowledge = () => {
  const [isCorrection, setIsCorrection] = useState(false);
  return (
    <div className="text-slate-400 space-y-5 mt-7">
      <div>
        <span className="font-bold">Knowledge used</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Correction</span>
        {!isCorrection && (
          <div>
            <Button
              variant="blue"
              className="mt-4"
              onClick={() => setIsCorrection(!isCorrection)}
            >
              <Plus className="mr-2" />
              <span>Add correction</span>
            </Button>
          </div>
        )}
      </div>
      {isCorrection && (
        <div className="text-slate-400 space-y-4">
          <div className="flex justify-between w-full">
            <Input value={"Hello world"} />
          </div>
          <div className="flex justify-between w-full">
            <Textarea rows={6} value={"Hello how can i assist you"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TKnowledge;
