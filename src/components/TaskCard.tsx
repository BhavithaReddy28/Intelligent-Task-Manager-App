import { motion } from 'motion/react';
import { 
  Clock, 
  Trash2, 
  Mail, 
  MessageSquare, 
  Calendar,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { Task } from './mockData';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const sourceIcons = {
  email: Mail,
  chat: MessageSquare,
  meeting: Calendar,
};

const priorityColors = {
  high: 'border-red-200 bg-red-50',
  medium: 'border-yellow-200 bg-yellow-50',
  low: 'border-green-200 bg-green-50',
};

const priorityTextColors = {
  high: 'text-red-700',
  medium: 'text-yellow-700',
  low: 'text-green-700',
};

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const SourceIcon = sourceIcons[task.source];

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.01 }}
      className={`bg-white rounded-2xl p-5 border-2 transition-all ${
        task.completed ? 'border-gray-200 opacity-60' : priorityColors[task.priority]
      } hover:shadow-lg`}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className="mt-1 flex-shrink-0"
        >
          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition ${
            task.completed
              ? 'bg-indigo-600 border-indigo-600'
              : 'border-gray-300 hover:border-indigo-600'
          }`}>
            {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
          </div>
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className={`text-gray-900 ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </h4>
            <button
              onClick={() => onDelete(task.id)}
              className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {task.description && (
            <p className="text-sm text-gray-600 mb-3">{task.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {/* Source */}
            <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
              <SourceIcon className="w-3.5 h-3.5" />
              <span className="capitalize">{task.source}</span>
            </div>

            {/* Priority */}
            {!task.completed && (
              <div className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg ${priorityTextColors[task.priority]}`}>
                <AlertCircle className="w-3.5 h-3.5" />
                <span className="capitalize">{task.priority} priority</span>
              </div>
            )}

            {/* Due Date */}
            {task.dueDate && (
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <Clock className="w-3.5 h-3.5" />
                <span>{task.dueDate}</span>
              </div>
            )}

            {/* Extracted from */}
            <div className="text-xs text-gray-500 italic">
              from: {task.extractedFrom}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
