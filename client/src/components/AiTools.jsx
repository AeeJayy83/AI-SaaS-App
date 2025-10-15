import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AiToolsData } from "../assets/assets.js";

const AiTools = () => {
    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <div id="tools" className="px-4 sm:px-20 xl:px-32 my-8 pt-24 min-w-screen">
            <div className="text-center">
                <h2 className="text-slate-900 text-[42px] font-semibold">Powerful AI Tools</h2>
                <p className="text-gray-800 max-w-lg mx-auto">Everything you need to create, enhance and optimize your content with cutting-edge AI tools</p>
            </div>

            <div className="flex flex-wrap gap-8 justify-center mt-6">
                {AiToolsData.map((tool, index) => (
                    <div
                        key={index}
                        className={`p-3 m-3 max-w-xs rounded-lg bg-[#FDFDFE] border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${tool.boxShadow}`}
                        onClick={() => user && navigate(tool.path)}>
                            <tool.Icon className="w-12 h-12 p-3 text-white rounded-xl" style={{background: `linear-gradient(to bottom, ${tool.bg.to})`}} />
                            <h3 className="text-lg font-semibold mb-3 mt-6">{tool.title}</h3>
                            <p className="text-sm text-gray-900 max-w-[95%]">{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AiTools;