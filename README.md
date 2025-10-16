# 👨🏻‍💻 AI-SaaS App 👨🏻‍💻

### Project Summary
#### MultiTask AI is a versatile AI-powered SaaS application built to help users generate blog titles, articles, and review resumes.It also integrates advanced image processing features such as background removal,object removal, and more using cutting-edge APIs. The platform offers seamless authentication and billing with Clerk and a beautiful UI designed with Tailwind CSS.
---

## 📸 Live Preview

Check out the live version of my app:
[🔗 View Project](https://multitask-ai.vercel.app/)

---

Features:

- 📝 Blog Title and Article Generation: Leverage Gemini's advanced AI capabilities to generate creative blog titles and full-length articles.
- 📋 Resume Review: AI-driven resume analysis to enhance resume quality with actionable feedback and suggestions.
- ✂️ Image Editing: Utilize the ClipDrop API to: Remove backgrounds from images, Erase objects from images, Generate new images based on text prompts.
- 🔐 Authentication and Billing: Secure user login and flexible billing plans powered by Clerk.
- 📱 Responsive UI: Styled using Tailwind CSS for a modern, responsive user experience.


Tech Stack:

- 🌟 Frontend: React.js, Tailwind CSS
- ✨ Backend: Node.js, Express.js
- ⏳ Database: PostgreSQL
- 🚀 Authentication & Billing: Clerk
- ⭐ AI Integration: Gemini (for blog/article generation) and ClipDrop (for image processing)
- 🌐 Deployment: Vercel

---

### Setup & Installation

1. Clone the Repository

``` shell
git clone https://github.com/AeeJayy83/AI-SaaS-App.git
cd AI-SaaS App
```
2. Backend Setup (Node.js & Express)

```shell
cd server
npm install
```
3. Setup .env for backend

```shell
DATABASE_URL=...

CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

GEMINI_API_KEY=...

CLIPDROP_API_KEY=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```
4. Start the backend server

```shell
npm start
```
5. Frontend Setup (React)

```shell
cd client
npm install
```
6. Setup .env for frontend

```shell
VITE_CLERK_PUBLISHABLE_KEY=...
VITE_BASE_URL=http://localhost:3000
```
7. Start the frontend server
   
```shell
npm dev
```

---

## 🔥 Contributing

## Feel free to fork this repository, open issues, or submit pull requests.

💙 Made with passion by **Abhishek Jain**

