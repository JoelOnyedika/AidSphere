import {
  Blocks,
  BookText,
  Bot,
  Cctv,
  FileText,
  FileTextIcon,
  Globe,
  Home,
  Inbox,
  Leaf,
  LucideMessageCircleQuestion,
  Mail,
  MessageCircleMore,
  MessagesSquare,
  PercentDiamond,
  RotateCcw,
  Settings,
  Ticket,
  Webhook,
  Youtube,
} from "lucide-react";

export const footer = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Pricing", link: "/" },
  { id: 3, name: "Tickets", link: "/" },
  { id: 4, name: "Sign in", link: "/" },
  { id: 5, name: "Sign up", link: "/" },
  { id: 6, name: "Forgot password", link: "/" },
];

export const companyStuff = [
  { id: 1, name: "Terms and conditions", link: "/" },
  { id: 2, name: "Privacy Policy", link: "/" },
  { id: 3, name: "Contact", link: "/" },
];

export const navbarComponents = [
  {
    title: "AI Chatbot",
    href: "/",
    description:
      "Make Ai your expert customer support agent with a trained AI Chatbot",
  },
  {
    title: "Email Support",
    description:
      "Handle all support emails and deliver fast replies with the help of your trained chatbot",
    href: "/",
  },
  {
    title: "Tickets",
    description:
      "Resolve issues better and faster and have 10X productivity system",
    href: "/",
  },
  {
    title: "Elements",
    description:
      "Train your AI on both audio, video, pdfs, documentation and more",
    href: "/",
  },
];

export const botCards = [
  {
    title: "Train a chatbot on your own data",
    description:
      "Connect your data sources and get a Chat-GPT like chatbot for your products. Customize your chatbots to look and feel, tone and behivour and add it to your website in a few seconds",
    icon: Bot,
  },
  {
    title: "Uncover knowledge gaps",
    description:
      "Monitor the conversation of your users and uncover knowledge gaps. Easily retrain your chatbot to delvier more accurate and confident reples to your users questions",
    icon: RotateCcw,
  },
  {
    title: "Train your bot on website",
    description:
      "Enhance your AI understanding of your brand and offerings by traning it directly on your website content",
    icon: Globe,
  },
  {
    title: "Train on Youtube videos",
    description:
      "Train your AI on any youtube videos. The AI will learn on both audio and visual information",
    icon: Youtube,
  },
  {
    title: "Train on your documents",
    description:
      "Whether its whitepapers, docs, pdfs, reports, or internal guides, our AI will consume it and learn from it.",
    icon: FileText,
  },
];

export const SidebarData = {
  sidebar: {
    sidebarBase: [
      {
        id: 1,
        title: "Home",
        icon: Home,
        link: "/home",
      },
      {
        id: 2,
        title: "Settings",
        icon: Settings,
        link: "/settings",
      },
    ],
    sidebarActivity: [
      {
        id: 3,
        title: "Chats",
        icon: MessagesSquare,
        link: "/chats",
      },
      {
        id: 4,
        title: "Tickets",
        icon: Ticket,
        link: "/ticket-forms",
      },
      {
        id: 5,
        title: "Emails",
        icon: Mail,
        link: "/emails",
      },
    ],
    sidebarKnowledge: [
      {
        id: 6,
        title: "Websites",
        icon: Globe,
        link: "/websites",
      },
      {
        id: 7,
        title: "Videos",
        icon: Youtube,
        link: "/videos",
      },
      {
        id: 8,
        title: "Documents",
        icon: FileTextIcon,
        link: "/documents",
      },
      {
        id: 9,
        title: "FAQs",
        icon: LucideMessageCircleQuestion,
        link: "/faqs",
      },
    ],
    sidebarSetup: [
      {
        id: 10,
        title: "Chatbots",
        icon: MessageCircleMore,
        link: "/chatbots",
      },
      {
        id: 11,
        title: "Ticket Forms",
        icon: PercentDiamond,
        link: "/ticket-forms",
      },
      {
        id: 12,
        title: "Email Inboxes",
        icon: Inbox,
        link: "/email-inboxes",
      },
    ],
    sidebarConn: [
      {
        title: "Webhooks",
        icon: Webhook,
        link: "/webhooks",
      },
      {
        id: 14,
        title: "Integrations",
        icon: Blocks,
        link: "/integrations",
      },
    ],
    sidebarHelp: [
      {
        id: 15,
        title: "Documentation",
        icon: BookText,
        link: "/documentation",
      },
      {
        id: 16,
        title: "Discord",
        icon: Cctv,
        link: "/discord",
      },
      {
        id: 17,
        title: "Support",
        icon: Leaf,
        link: "/support",
      },
    ],
  },
};

export const ChatbotUITabsData = [
  {
    id: 1,
    name: "chatbot"
  }, 
  {
    id: 2,
    name: "knowledge"
  }, {
    id: 3,
    name: "behivour"
  }, {
    id: 4,
    name: "connections"
  }, {
    id: 5,
    name: "settings"
  }, {
    id: 6,
    name: "install"
  }, 
  
]

export const TicketFormUITabsData = [
  {
    id: 1,
    name: "ticket form"
  }, 
  {
    id: 2,
    name: "knowledge"
  }, {
    id: 3,
    name: "fields"
  }, {
    id: 4,
    name: "connections"
  }, {
    id: 5,
    name: "settings"
  }, {
    id: 6,
    name: "install"
  }, 
  
]

export const ChatUIBrandColors = [
  {
    id: 1,
    rgbValue: "59, 130, 246"
  },
  {
    id: 2,
    rgbValue: "0, 119, 54"
  },
  {
    id: 3,
    rgbValue: "192, 132, 252"
  },
  {
    id: 4,
    rgbValue: "216, 130, 0"
  },
  {
    id: 5,
    rgbValue: "245, 158, 11"
  },
  {
    id: 6,
    rgbValue: "239, 68, 68"
  },
  {
    id: 7,
    rgbValue: "139, 92, 246"
  },
  {
    id: 8,
    rgbValue: "1107, 114, 128"
  },
  {
    id: 9,
    rgbValue: "29, 78, 216"
  },
  {
    id: 10,
    rgbValue: "4, 120, 87"
  },
  
  
]

export const TConnectionData = [
  'FAQs', 'Ticket Form'
]