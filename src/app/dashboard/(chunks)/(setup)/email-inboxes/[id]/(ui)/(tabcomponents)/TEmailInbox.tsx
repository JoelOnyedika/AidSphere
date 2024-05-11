import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { emailInboxAliasState, emailInboxFromNameState, emailInboxSignatureState } from '@/lib/recoil/atoms'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

const TEmailInbox = () => {
  const [emailAlias, setEmailAlias ] = useRecoilState(emailInboxAliasState)
  const [fromEmail, setFromEmail ] = useRecoilState(emailInboxFromNameState)
  const [emailSignature, setEmailSignature ] = useRecoilState(emailInboxSignatureState)

  return (
    <div className="space-y-11">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="headline"
        className="text-gray-400 font-bold focus:outline-none"
      >
        Alias
      </Label>
      <div>
      <Input
        id="headline"
        className="w-full"
        type="text"
        placeholder="joelonyepic-fff"
        value={emailAlias}
        onChange={(e) => setEmailAlias(e.target.value)}
      />
        <small className='text-gray-400 font-semibold'>Emails will be sent from: {emailAlias}@on.aidbase.ai</small>
      </div>
    </div>
    <div>
    <Label
        htmlFor="description"
        className="text-gray-400 font-bold focus:outline-none"
      >
        Custom email
      </Label>  
      <div>
      <Button variant='blue' className='text-gray-400'><Plus className='mr-2 h-4 w-4'/>Setup custom email</Button>
      </div>
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="description"
        className="text-gray-400 font-bold focus:outline-none"
      >
        FROM name
      </Label>
      <Input
        id="description"
        type="text"
        placeholder="Ask any question and our AI will answer!"
        onChange={(e) => setFromEmail(e.target.value)}
        value={fromEmail || 'JoelOnyfff'}
      />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="description"
        className="text-gray-400 font-bold focus:outline-none"
      >
        Signature
      </Label>
      <Input
        id="description"
        type="text"
        onChange={(e) => setEmailSignature(e.target.value)}
        value={emailSignature}
      />
    </div>
  </div>
  )
}

export default TEmailInbox