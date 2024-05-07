import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Atom } from 'lucide-react';
import { SidebarData } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const TKnowledge = () => {
  // Initialize state for active/inactive state of each item
  const [activeItems, setActiveItems] = useState(SidebarData.sidebar.sidebarKnowledge.map(() => false));

  // Function to toggle the active/inactive state of an item
  const toggleItem = (index: any) => {
    setActiveItems(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      {SidebarData.sidebar.sidebarKnowledge.map((data, index) => (
        <div className='mb-10 animate-fade-down' key={index}>
          <div className='flex'>
            <div className='' onClick={() => toggleItem(index)}>
              {/* Display caret based on active/inactive state */}
              {activeItems[index] ? <ChevronDown className='mr-2 scale-90' /> : <ChevronUp className='mr-2 scale-90' />}
            </div>
            <span>{data.title}</span>
          </div>
          <div>
            <hr style={{opacity: 0.5}} />
          </div>  
          <div className='mt-5 text-slate-400'>
            {activeItems[index] && (
              <div className='animate-fade-down'>
                <Button variant='blue'><Atom className='mr-2 h-4 w-4'/> {data.title}</Button>
                <div className='mt-2 ml-2'>
                <small className='font-bold'>No {data.title} added yet.</small>
                </div>  
              </div>
          )}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default TKnowledge;
