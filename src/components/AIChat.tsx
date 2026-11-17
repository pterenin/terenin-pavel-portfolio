import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

import { portfolioAnswer, type Answer } from '@/data/portfolio-lookup';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  mode?: Answer['mode'];
  sources?: Answer['sources'];
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! Ask me about Pavel’s engineering work, his role as CTO at NeironHub, or a project like CodePipeline.",
      isUser: false,
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const pending = useRef(false);
  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ block: 'nearest' });
  }, [isOpen, messages, isLoading]);

  const sendMessage = async () => {
    const question = inputValue.trim();
    if (!question || pending.current) return;
    pending.current = true;
    const history = messages.slice(1).slice(-4).map(m => ({
      role: m.isUser ? 'user' : 'assistant', content: m.text.slice(0, 1500),
    }));
    setMessages(prev => [...prev, {id: crypto.randomUUID(), text: question, isUser: true}]);
    setInputValue('');
    setIsLoading(true);
    try {
      const reply = await fetch('/blog/?rest_route=/pavel-ask-ai/v1/chat', {
        method: 'POST',
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, history }),
        signal: AbortSignal.timeout(25000),
      });
      if (!reply.ok) throw new Error('Service unavailable');
      const data: Answer = await reply.json();
      if (data.mode !== 'model' || typeof data.response !== 'string' || !data.response.trim()) {
        throw new Error('Model unavailable');
      }
      setMessages(prev => [...prev, {id: crypto.randomUUID(), isUser: false, text: data.response, mode: data.mode, sources: data.sources}]);
    } catch {
      const excerpt = portfolioAnswer(question);
      setMessages(prev => [...prev, {id: crypto.randomUUID(), isUser: false, text: excerpt.response, mode: excerpt.mode, sources: excerpt.sources}]);
    } finally {
      pending.current = false;
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 shadow-lg flex flex-col items-center justify-center text-white"
        >
          <MessageCircle className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Ask AI</span>
        </Button>
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Have Questions? Ask my AI agent
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[min(24rem,calc(100vw-1.5rem))] h-[min(500px,80dvh)] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Pavel's AI Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Close chat"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-blue-700 h-8 w-8 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="min-h-0 flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.mode === 'portfolio' && <p className="text-xs font-medium text-gray-600 mb-1">{/[а-яё]/i.test(message.text) ? 'Из портфолио · AI недоступен' : 'Portfolio lookup · AI unavailable'}</p>}
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {message.sources?.map(item => (
                  <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-xs text-blue-700 underline">{item.title}</a>
                ))}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Question about Pavel" maxLength={1500}
            placeholder="Ask about Pavel's experience..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            aria-label="Send question"
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
            size="sm"
            className="px-3"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
