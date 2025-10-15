import { assets } from "../assets/assets"

function Hero() {
    return (
        <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col min-w-screen justify-center bg-gradient-to-b from-black to-black min-h-screen">
            <div className="text-center mb-3 -mt-10">
                <h1 className="text-gray-300 text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] ">
                    Drive Innovation <br /> with <span className="animate-fade-in-delay-1 bg-gradient-to-t from-purple-500 via-purple-600 to-purple-800 bg-clip-text text-transparent">MultiTask AI</span>
                </h1>
                <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-slate-400">
                    Transform your workflow with cutting-edge AI technology designed to boost creativity, accuracy and performance
                </p>
            </div>

            <div className="flex items-center gap-4 mt-8 mx-auto text-gray-300">
                <img src={assets.user_group} alt="" className="h-8" /> Trusted by 5k+ people
            </div>
            
        </div>
    )
}

export default Hero; 



