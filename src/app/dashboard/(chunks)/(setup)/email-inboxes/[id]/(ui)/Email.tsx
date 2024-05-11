import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { emailInboxAliasState, emailInboxFromNameState, emailInboxSignatureState } from '@/lib/recoil/atoms';
import React from 'react'
import { selector, useRecoilValue } from 'recoil';

const Email = () => {
  const emailInboxAliasStateSelector = selector({
    key: "emailInboxAlias",
    get: ({ get }) => {
      const text: string = get(emailInboxAliasState);
      return text;
    },
  });
  const emailInboxFromNameStateSelector = selector({
    key: "emailInboxFromName",
    get: ({ get }) => {
      const text: string = get(emailInboxFromNameState);
      return text;
    },
  });
  const emailInboxSignatureStateSelector = selector({
    key: "emailInboxSignature",
    get: ({ get }) => {
      const text: string = get(emailInboxSignatureState);
      return text;
    },
  });

  const emailInboxAlias = useRecoilValue(emailInboxAliasStateSelector)
  const emailInboxFromName = useRecoilValue(emailInboxFromNameStateSelector)
  const emailInboxSignature = useRecoilValue(emailInboxSignatureStateSelector)
  return (
    <div className='bg-white space-y-3 text-black rounded-2xl overflow-hidden w-[470px] flex flex-col p-8'>
      <div className='flex space-x-2'>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col space-y-2'>
          <Label className="font-semibold text-gray-700">{emailInboxFromName} <small className='text-gray-500'>({emailInboxAlias}@on.aidsphere.ai)</small></Label>
          <Label>RE: Issue with My Account Login</Label>
        </div>
      </div>
      <hr style={{opacity: 1}} />
      <div className='flex flex-col space-y-6'>
        <p>Hi user,</p>
        <p>Thanks for reaching out about your login issue.
To fix it, please try resetting your password via the 'Forgot Password' link on our login page.</p>
        <p>If this doesn’t resolve the problem, reply to this email, and we'll take a closer look.</p>
        <p>{emailInboxSignature}</p>
      </div>
      <div>
        <small className='text-slate-600'>Sent from AidSphere</small>
      </div>
    </div>
  )
}

export default Email