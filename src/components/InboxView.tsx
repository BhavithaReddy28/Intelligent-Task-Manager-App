import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { Conversation } from './mockData';

interface InboxViewProps {
  conversations: Conversation[];
}

const sourceIcons = {
  email: Mail,
  chat: MessageSquare,
  meeting: Calendar,
};

const sourceColors = {
  email: 'bg-blue-100 text-blue-600',
  chat: 'bg-green-100 text-green-600',
  meeting: 'bg-purple-100 text-purple-600',
};

export function InboxView({ conversations }: InboxViewProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(
    conversations[0]
  );

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Conversations List */}
      <div className="lg:col-span-1 space-y-3">
        <h3 className="text-lg text-gray-900 mb-4">Recent Conversations</h3>
        {conversations.map((conversation) => {
          const SourceIcon = sourceIcons[conversation.source];
          const isSelected = selectedConversation?.id === conversation.id;

          return (
            <motion.button
              key={conversation.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedConversation(conversation)}
              className={`w-full text-left p-4 rounded-xl border-2 transition ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${sourceColors[conversation.source]}`}>
                  <SourceIcon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-sm text-gray-900 truncate">{conversation.from}</p>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conversation.subject}</p>
                  {conversation.extractedTasks > 0 && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-indigo-600">
                      <Sparkles className="w-3 h-3" />
                      <span>{conversation.extractedTasks} tasks extracted</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Conversation Detail */}
      <div className="lg:col-span-2">
        {selectedConversation ? (
          <motion.div
            key={selectedConversation.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl border border-gray-200 p-6"
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl ${sourceColors[selectedConversation.source]}`}>
                  {(() => {
                    const Icon = sourceIcons[selectedConversation.source];
                    return <Icon className="w-5 h-5" />;
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900">{selectedConversation.subject}</h3>
                  <p className="text-sm text-gray-600">
                    From: {selectedConversation.from} • {selectedConversation.time}
                  </p>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedConversation.content}</p>
              </div>
            </div>

            {/* Extracted Tasks */}
            {selectedConversation.extractedTasks > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <h4 className="text-gray-900">
                    AI Extracted Tasks ({selectedConversation.extractedTasks})
                  </h4>
                </div>
                <div className="space-y-3">
                  {selectedConversation.tasks?.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100"
                    >
                      <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-gray-900 mb-1">{task.title}</p>
                        {task.dueDate && (
                          <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <p className="text-gray-500">Select a conversation to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
