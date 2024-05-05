import React, { useState } from "react";
import { ChevronUp, ChevronDown, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

const TConnection = () => {
  // Initialize state for active/inactive state of each item
  const [activeItem, setActiveItem] = useState(true);

  // Function to toggle the active/inactive state of an item
  const toggleItem = () => {
    setActiveItem(!activeItem);
  };

  return (
    <div>
      <div className="mb-10">
        <div className="flex">
          <div className="" onClick={() => toggleItem()}>
            {activeItem ? (
              <ChevronDown className="mr-2 scale-90" />
            ) : (
              <ChevronUp className="mr-2 scale-90" />
            )}
          </div>
          <span>Email Inboxes</span>
        </div>
        <div>
          <hr style={{ opacity: 0.5 }} />
        </div>
        <div className="mt-5 text-slate-400">
          {activeItem && (
            <div className={`${activeItem ? 'show' : 'hide'}`}>
              <Button variant="blue">
                <Atom className="mr-2 h-4 w-4" />
                Connect email inbox
              </Button>
              <div className="mt-2 ml-2">
                <small className="font-bold">
                  No email inbox connection added yet.
                </small>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TConnection;
