import { Label } from '@/components/ui/label'
import { Dot } from 'lucide-react'
import React from 'react'

const History = () => {
  return (
    <div className='whitespace-nowrap text-slate-400 mt-5'>
        <div>
            <Label className="font-semibold text-md">History</Label>
        </div>
        <div className='space-y-3'>
            <div>
                <div className='flex space-x-2'>
                    <Dot className="scale-150" />
                    <small className="mt-[4px]">21-04-2024 09:52 PM</small>
                </div>
                <div className='ml-8'>
                    <Label className='font-semibold'>Anonymous commented on this ticket</Label>
                </div>
            </div>
            <div>
                <div className='flex space-x-2'>
                    <Dot className="scale-150" />
                    <small className="mt-[4px]">21-04-2024 09:52 PM</small>
                </div>
                <div className='ml-8'>
                    <Label className='font-semibold'>Anonymous commented on this ticket</Label>
                </div>
            </div>
            <div>
                <div className='flex space-x-2'>
                    <Dot className="scale-150" />
                    <small className="mt-[4px]">21-04-2024 09:52 PM</small>
                </div>
                <div className='ml-8'>
                    <Label className='font-semibold'>Anonymous commented on this ticket</Label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History