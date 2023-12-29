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
      },
      {
        id: 2,
        title: "Settings",
        icon: Settings,
      },
    ],
    sidebarActivity: [
      {
        id: 3,
        title: "Chats",
        icon: MessagesSquare,
      },
      {
        id: 4,
        title: "Tickets",
        icon: Ticket,
      },
      {
        id: 5,
        title: "Emails",
        icon: Mail,
      },
    ],
    sidebarKnowledge: [
      {
        id: 6,
        title: "Websites",
        icon: Globe,
      },
      {
        id: 7,
        title: "Videos",
        icon: Youtube,
      },
      {
        id: 8,
        title: "Documents",
        icon: FileTextIcon,
      },
      {
        id: 9,
        title: "FAQs",
        icon: LucideMessageCircleQuestion,
      },
    ],
    sidebarSetup: [
      {
        id: 10,
        title: "Chatbots",
        icon: MessageCircleMore,
      },
      {
        id: 11,
        title: "Ticket Forms",
        icon: PercentDiamond,
      },
      {
        id: 12,
        title: "Email Inboxes",
        icon: Inbox,
      },
    ],
    sidebarConn: [
      {
        id: 13,
        title: "Webhooks",
        icon: Webhook,
      },
      {
        id: 14,
        title: "Integrations",
        icon: Blocks,
      },
    ],
    sidebarHelp: [
      {
        id: 15,
        title: "Documentation",
        icon: BookText,
      },
      {
        id: 16,
        title: "Discord",
        icon: Cctv,
      },
      {
        id: 17,
        title: "Support",
        icon: Leaf,
      },
    ],
  },
};
