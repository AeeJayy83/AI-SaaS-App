import { useState } from "react";
import { Eraser, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function RemoveBackground() {

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
            formData.append("image", input)

            const { data } = await axios.post("/api/ai/remove-image-background", formData, {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });

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
                        <Sparkles className="w-6 text-[#FF4938]" />
                        <h1 className="text-xl font-semibold">Background Removal</h1>
                    </div>
                    <p className="mt-6 text-sm font-medium">Upload image</p>

                    <input onChange={(e) => setInput(e.target.files[0])} type="file" accept="image/*" className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600" required/>

                    <p className="text-xs text-gray-500 font-light mt-1">Supports JPG, PNG and other image formats</p>

                    <button disabled={loading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F6Ab41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
                        {
                            loading ? <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
                                : <Eraser className="w-5" />
                        }
                        Remove Background
                    </button>
                </form>

                <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-400 min-h-40 max-h-100 mt-8">
                    <div className="flex items-center gap-3">
                        <Eraser className="w-5 h-5 text-[#FF4938]" />
                        <h1 className="text-xl font-semibold">Processed Image</h1>
                    </div>
                    {
                        !content ? (
                            <div className="flex-1 flex justify-center items-center">
                                <div className="text-sm flex flex-col items-center gap-2 mt-22 text-gray-400">
                                    <Eraser className="w-9 h-9" />
                                    <p>Upload an image and click "Remove Background" to get started</p>
                                </div>
                            </div>
                        )
                            :
                            (
                                <img src={content} alt="image" className="mt-3 w-full h-full" />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default RemoveBackground;