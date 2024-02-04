"use client"

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  mode: 'error' | 'success' | 'warning';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, mode, onClose }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClosed(true);
      onClose();
    }, 5000); // Close notification after 5 seconds
    return () => clearTimeout(timeout);
  }, [onClose]);

  const getModeClasses = () => {
    switch (mode) {
      case 'error':
        return 'bg-red-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-md flex items-center space-x-2 ${getModeClasses()} ${
        closed ? 'hidden' : 'block'
      }`}
    >
      <span>{message}</span>
      <button onClick={onClose}>
        <X/>
      </button>
    </div>
  );
};

export default Notification;
