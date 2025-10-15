import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer id="footer" className="px-6 md:px-12 lg:px-16 xl:px-20 pt-8 text-gray-600 border-gray-500 mt-0.2 border-t-4 min-w-screen">
            <div className="flex flex-col md:flex-row justify-between w-full gap-28 border-b border-gray-600/30 pb-6">
                <div className="md:max-w-96">
                    <div className="flex items-center justify-center md:justify-start">
                        <button onClick={() => {navigate("/")}} className="cursor-pointer">
                            <img src="/navbarLogo.svg" alt="logo" className="h-10 w-12 mb-4"/>
                            </button>
                    </div>
                    
                    <p className="mt-6 text-sm">
                        Experience the power of AI with MultiTask AI. <br /> Transform your content creation with our suite of premium AI tools. 
                        Write articles, generate images and enhance your workflow,
                    </p>
                </div>

                <div className="flex-1 flex items-start justify-between md:justify-end gap-16">
                    <div>
                        <h1 className="font-semibold mb-5 text-gray-8000">Company</h1>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#footer">About us</a></li>
                            <li><a href="#tools">Services</a></li>
                            <li><a href="#plan">Plans</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">Subscribe to our newletter</h2>
                        <div className="text-sm space-y-2">
                            <p className="">The latest news, articles and resources sent to your inbox</p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-4">
                                <input type="email"
                                    className="border border-gray-700/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none max-w-62 w-full h-8 p-2"
                                    placeholder="enter your email" />
                                <button className="bg-purple-700 w-24 h-9 text-white rounded cursor-pointer">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 @MultiTaskAI. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;