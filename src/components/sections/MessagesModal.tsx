import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import ChatListScreen from '@/components/screens/ChatListScreen';
import MessagingScreen from '@/components/screens/MessagingScreen';

interface MessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessagesModal: React.FC<MessagesModalProps> = ({ isOpen, onClose }) => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const handleOpenChat = (userId: string) => {
    setSelectedChatId(userId);
  };

  const handleBackFromChat = () => {
    setSelectedChatId(null);
  };

  const handleClose = () => {
    setSelectedChatId(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl h-[80vh] bg-background rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="glass-effect px-6 py-4 flex items-center gap-4 border-b border-border flex-shrink-0">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground">
              {selectedChatId ? 'Chat' : 'Messages'}
            </h2>
            <p className="text-sm text-muted-foreground">
              {selectedChatId ? 'Chat with your travel buddy' : 'Your conversations'}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
            aria-label="Close messages"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content: list or conversation */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          {selectedChatId ? (
            <MessagingScreen
              onBack={handleBackFromChat}
              chatWithId={selectedChatId}
            />
          ) : (
            <div className="overflow-y-auto flex-1">
              <ChatListScreen onOpenChat={handleOpenChat} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesModal;
