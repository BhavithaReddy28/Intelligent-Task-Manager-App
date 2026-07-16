import { motion, AnimatePresence } from 'motion/react';
import { TaskCard } from './TaskCard';
import { Task } from './mockData';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  isExtracting: boolean;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask, isExtracting }: TaskListProps) {
  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  if (isExtracting) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 h-24"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div>
          <h3 className="text-xl text-gray-900 mb-4">
            To Do ({pendingTasks.length})
          </h3>
          <div className="space-y-3">
            <AnimatePresence>
              {pendingTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TaskCard
                    task={task}
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-xl text-gray-900 mb-4">
            Completed ({completedTasks.length})
          </h3>
          <div className="space-y-3">
            <AnimatePresence>
              {completedTasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -100 }}
                >
                  <TaskCard
                    task={task}
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {tasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No tasks yet. Start a conversation and let AI extract tasks for you!</p>
        </motion.div>
      )}
    </div>
  );
}
