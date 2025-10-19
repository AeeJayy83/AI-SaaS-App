import { Hash, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import toast from 'react-hot-toast';
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function BlogTitle() {

    const blogCategories = ["General", "Technology", "Business", "Health", "Lifestyle", "Education", "Travel", "Food"];

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");

    const { getToken } = useAuth();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const prompt = `Write a blog title for the keyword ${input} in category ${selectedCategory}`;

            const { data } = await axios.post("/api/ai/generate-blog-title", {prompt}, {
                headers: {Authorization: `Bearer ${await getToken()}`}
            });

            if(data.success) {
                setContent(data.content);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="flex flex-col items-start justify-start h-screen">
            <nav className="w-full px-4 min-h-20 border-b border-gray-400 flex items-center justify-between pr-4">
                <img src="/navbarLogo.svg" alt="" onClick={() => { navigate("/") }} className="cursor-pointer w-14 sm:w-16 py-2" />
            </nav>

            <div className="h-full p-6 flex items-start justify-center mx-auto flex-col sm:flex-row gap-6 text-slate-800">
                <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-400 mt-8">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-6 text-[#8E37EB]" />
                        <h1 className="text-xl font-semibold">AI Title Generator</h1>
                    </div>
                    <p className="mt-6 text-sm font-medium">Keyword</p>
                    <input
                        value={input}
                        onChange={(e) => {setInput(e.target.value)}}
                        type="text"
                        className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
                        placeholder="The future of Artificial Intelligence...."
                        required />

                    <p className="mt-6 text-sm font-medium">Category</p>

                    <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
                        {blogCategories.map((item, index) => (
                            <span
                                onClick={() => { setSelectedCategory(item) }}
                                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedCategory === item ? "bg-purple-50 text-purple-700" : "text-gray-500 border-gray-300"}`} key={index}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <br />

                    <button disabled={loading} className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37FB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
                        {
                            loading ?
                                <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
                                :
                                <Hash className="w-5" />
                        }
                        Generate Title
                    </button>
                </form>
                <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-400 max-h-89 mt-8">
                    <div className="flex items-center gap-3">
                        <Hash className="w-5 h-5 text-[#8E37FB]" />
                        <h1 className="text-xl font-semibold">Generated Blog Titles</h1>
                    </div>
                    {
                        !content ? (
                            <div className="flex-1 flex justify-center items-center">
                                <div className="text-sm flex flex-col items-center gap-2 mt-10 text-gray-400">
                                    <Hash className="w-9 h-9" />
                                    <p>Enter a topic and click "Generate Titles" to get started</p>
                                </div>
                            </div>
                        )
                            :
                            (
                                <div className="mt-3 h-full overflow-y-auto text-sm text-slate-700">
                                    <div className="reset-tw">
                                        <Markdown>{content}</Markdown>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogTitle;
