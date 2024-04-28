import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TBehivour = () => {
  return (
    <div className='text-slate-400'>
        <div>
            <div>
                <Label className='font-bold'>Instructions</Label>
            </div>
            <div className='mt-2'>
                <Textarea rows={3} placeholder='Your name is "AidShere assistance, You will provide answers to questions about programming in Python. You will only reply in Russian "'/>
            </div>
        </div>
        
        <div></div>
    </div>
  )
}

export default TBehivour