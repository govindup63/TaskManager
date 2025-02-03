# Task Manager - README

## Overview

The Task Manager is a simple application built with **Next.js**, **MongoDB**, and modern web technologies. It allows users to manage tasks by creating, updating, and deleting them. The application is built with a clean and interactive UI that utilizes smooth animations for a better user experience. All data is stored in a MongoDB database, and the application follows the latest Next.js features like **Server Actions** and **Client Components** to handle data operations.

### Features:
- Add tasks with a title (optional description and due date).
- Mark tasks as completed.
- Delete tasks.
- Smooth animations for UI updates.
- Tasks are stored and managed in MongoDB.

## Tech Stack

- **Frontend**: React (Next.js), Tailwind CSS, Motion (for animations)
- **Backend**: Next.js API routes, MongoDB (for data storage)
- **Database**: MongoDB
- **UI Components**: Shadcn and Framer-motion along with tailwind

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **MongoDB** (you can use a cloud service like MongoDB Atlas or set up a local instance)
- **npm** or **yarn** (for managing dependencies)

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Install Dependencies

Install the required dependencies using `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskmanager?retryWrites=true&w=majority
```

If you're using a local MongoDB instance, the URI will look like this:

```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

### 4. Run the Development Server

To start the application in development mode, run:

```bash
npm run dev
# or
yarn dev
```

Your application will be available at `http://localhost:3000`.

### 5. Database Setup

If you don't have MongoDB set up yet, you can create a new MongoDB cluster on **MongoDB Atlas** or use a local instance. The app will automatically create the necessary database and collection (`taskmanager` and `tasks`) on the first run.

### 6. Using the Application

- Once the app is running, navigate to the homepage.
- You will see an input field to add new tasks.
- Tasks will be listed with options to mark them as completed or delete them.
- Tasks will persist in the database even after the page is refreshed.

## Directory Structure

- **app**: Contains the application’s core logic and UI components.
- **components**: UI components like buttons, inputs, and cards.
- **lib**: Contains database connections and utility functions.
- **actions**: Server-side functions to handle adding, updating, and deleting tasks.
- **pages**: Next.js pages that define the app’s routing.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and create a pull request.

## License

This project is licensed under the MIT License.
