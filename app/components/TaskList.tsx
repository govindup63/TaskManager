"use client";

import { updateTask, deleteTask } from "../actions";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Trash } from "lucide-react";

type Task = {
    _id: string;
    title: string;
    description?: string;
    dueDate?: string;
    completed: boolean;
};

export default function TaskList({ tasks }: { tasks: Task[] }) {
    return (
        <ul className="space-y-4">
            <AnimatePresence>
                {tasks.map((task) => (
                    <motion.li
                        key={task._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="flex justify-between items-center p-4 shadow-md border border-gray-300">
                            <span className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>
                                {task.title}
                            </span>
                            <div className="flex gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => updateTask(task._id, { completed: !task.completed })}
                                >
                                    <Check className="text-green-500" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => deleteTask(task._id)}
                                >
                                    <Trash className="text-red-500" />
                                </Button>
                            </div>
                        </Card>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
}
