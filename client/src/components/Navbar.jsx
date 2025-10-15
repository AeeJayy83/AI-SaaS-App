import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();

    return (
        <div className="fixed z-5 w-full backdrop-blur-2xl border-b border-gray-600 flex items-center justify-between py-2 sm:pb-2 px-4 sm:px-12 xl:px-16">
            <img src="/navbarLogo.svg" alt="logo" className="w-15 sm:w-20 mt-2" onClick={() => navigate("/")} />

            <div className="flex items-center gap-4">

                <button onClick={() => { navigate("/ai") }} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-purple-800 text-white px-4 py-2.5 mt-2">
                    Dashboard
                    <ArrowRight className="w-5 h-5" />
                </button>


                {
                    user ? <div className="pt-2">
                        <UserButton appearance={{
                            elements: {
                                formButtonPrimary: 'text-lg'
                            },
                        }} />
                    </div>
                        :
                        <button onClick={openSignIn} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-purple-800 text-white px-4 py-2.5 mt-2">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </button>
                }
            </div>


        </div >
    )
}

export default Navbar;