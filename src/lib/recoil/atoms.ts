import { atom } from "recoil";

export const chatHeadlineTextState = atom({
    key: 'chatHeadlineTextState', 
    default: 'Chat with our AI', 
  });

export const chatDescriptionTextState = atom({
  key: 'chatDescriptionTextState',
  default: 'Ask any question and the AI will answer'
})

export const chatWelcomeMessageTextState = atom({
  key: 'chatWelcomeMessageTextState',
  default: 'Hello what can i help you with.'
})

export const chatBrandColorState = atom({
  key: 'chatBrandColorState',
  default: '59, 130, 246'
})

export const chatBackgroundThemeState = atom({
  key: 'chatBackgroundThemeState',
  default: 'light'
})

export const chatLogoState = atom({
  key: 'chatLogoState',
  default: 'https://github.com/shadcn.png'
})

export const chatOrientationState = atom({
  key: 'chatOrientationState',
  default: 'left'
})

// TICKET ATOMS
export const ticketHeadlineTextState = atom({
  key: 'ticketHeadlineTextState', 
  default: 'Create your tickets' 
});

export const ticketDescriptionTextState = atom({
key: 'ticketDescriptionTextState',
default: 'Please let us know if something isn\'t working as expected'
})

export const ticketButtonTextState = atom({
  key: 'ticketButtonTextState',
  default: 'Create ticket'
  })

export const ticketWelcomeMessageTextState = atom({
key: 'ticketWelcomeMessageTextState',
default: ''
})

export const ticketBrandColorState = atom({
key: 'ticketBrandColorState',
default: '59, 130, 246'
})
export const ticketBackgroundThemeState = atom({
  key: 'ticketBackgroundThemeState',
  default: 'light'
})