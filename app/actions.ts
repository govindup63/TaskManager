'use server';
import { ObjectId } from 'mongodb';
import { tasksCollection, Task } from '../lib/db';
import { revalidatePath } from 'next/cache';

export async function addTask(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string | undefined;
    const dueDate = formData.get("dueDate") as string | undefined;

    if (!title) {
        throw new Error("Title is required");
    }

    await tasksCollection.insertOne({ title, description, dueDate, completed: false });
    revalidatePath("/");
}

export async function deleteTask(id: string) {
    await tasksCollection.deleteOne({ _id: new ObjectId(id) });
    revalidatePath('/');
}

export async function updateTask(id: string, data: Partial<Task>) {
    await tasksCollection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    revalidatePath('/');
}