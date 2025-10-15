import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import BlogTitle from "./pages/BlogTitle";
import Community from "./pages/Community";
import GenerateImages from "./pages/GenerateImages";
import RemoveBackground from "./pages/RemoveBackground";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import WriteArticle from "./pages/WriteArticle";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog-titles" element={<BlogTitle />} />
        <Route path="/generate-images" element={<GenerateImages />} />
        <Route path="/remove-background" element={<RemoveBackground />} />
        <Route path="/remove-object" element={<RemoveObject />} />
        <Route path="/review-resume" element={<ReviewResume />} />
        <Route path="/write-article" element={<WriteArticle />} />
        <Route path="/ai" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
