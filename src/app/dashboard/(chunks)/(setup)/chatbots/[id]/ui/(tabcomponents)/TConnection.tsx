import { Atom, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'
import { TConnectionData } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const TConnection = () => {
  // Initialize state for active/inactive state of each item
  const [activeItems, setActiveItems] = useState(TConnectionData.map(() => false));

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
      {TConnectionData.map((data, index) => (
        <div className='mb-10' key={index}>
          <div className='flex'>
            <div className='' onClick={() => toggleItem(index)}>
              {/* Display caret based on active/inactive state */}
              {activeItems[index] ? <ChevronDown className='mr-2 scale-90' /> : <ChevronUp className='mr-2 scale-90' />}
            </div>
            <span>{data} connections</span>
          </div>
          <div>
            <hr style={{opacity: 0.5}} />
          </div>  
          <div className='mt-5 text-slate-400'>
            {activeItems[index] && (
              <>
                <Button variant='blue'><Atom className='mr-2 h-4 w-4'/> {data}</Button>
                <div className='mt-2 ml-2'>
                <small className='font-bold'>No {data} connections added yet.</small>
                </div>  
              </>
          )}
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default TConnection