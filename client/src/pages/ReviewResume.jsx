import { FileText, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function ReviewResume() {

    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");

    const { getToken } = useAuth();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("resume", input);

            const { data } = await axios.post("/api/ai/resume-review", formData, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`,
                }
            })

            if (data.success) {
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

    return (
        <div className="flex flex-col items-start justify-start h-screen">
            <nav className="w-full px-4 min-h-20 border-b border-gray-400 flex items-center justify-between pr-4">
                <img src="/navbarLogo.svg" alt="" onClick={() => { navigate("/") }} className="cursor-pointer w-14 sm:w-16 py-2" />
            </nav>

            <div className="h-full p-6 flex flex-col items-start justify-center mx-auto sm:flex-row gap-6 text-slate-800">
                <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-400 mt-8">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-6 text-[#4A7AFF]" />
                        <h1 className="text-xl font-semibold">Resume Review</h1>
                    </div>
                    <p className="mt-6 text-sm font-medium">Upload Resume</p>

                    <input onChange={(e) => setInput(e.target.files[0])} type="file" accept="application/pdf" className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600" required />

                    <p className="mt-1 text-xs text-gray-500 font-light">Supports PDF resume only</p>

                    <button disabled={loading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
                        {
                            loading ? <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
                                : <FileText className="w-5" />
                        }
                        Review Resume
                    </button>
                </form>

                <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-400 min-h-58 max-h-120 mt-8">
                    <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#00DA83]" />
                        <h1 className="text-xl font-semibold">Analyzed Results</h1>
                    </div>
                    {
                        !content ? (
                            <div className="flex-1 flex justify-center items-center">
                                <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                                    <FileText className="w-9 h-9" />
                                    <p>Upload an image and click "Review Resume" to get started</p>
                                </div>
                            </div>
                        )
                            :
                            (
                                <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
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

export default ReviewResume;