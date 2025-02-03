import { tasksCollection } from "../lib/db";
import { addTask } from "./actions";
import TaskList from "./components/TaskList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const tasks = await tasksCollection.find().toArray();
  const taskList = tasks.map(task => ({
      _id: task._id.toString(), // Convert ObjectId to string
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      completed: task.completed
  }));

  return (
      <main className="max-w-2xl mx-auto p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center">Task Manager</h1>
          <form action={addTask} className="flex justify-center gap-4 items-center">
              <div className="relative flex-1 w-full max-w-xl">
                  <Input
                      name="title"
                      placeholder="Enter task title..."
                      required
                      className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
              </div>
              <Button type="submit" className="px-8 py-4 text-lg">Add Task</Button>
          </form>
          {/* Pass tasks to the Client Component */}
          <TaskList tasks={taskList} />
      </main>
  );
}