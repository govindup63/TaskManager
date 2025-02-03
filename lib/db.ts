import { MongoClient } from 'mongodb';

export type Task = {
    title: string;
    description?: string;
    dueDate?: string;
    completed: boolean;
};

export const client = new MongoClient(process.env.MONGODB_URI!);
export const db = client.db('taskmanager');
export const tasksCollection = db.collection<Task>('tasks');
