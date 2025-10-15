import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

function Layout() {

    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const { user } = useUser();

    return user ? (
        <div className="flex flex-col items-start justify-start h-screen">
            <nav className="w-full px-4 min-h-14 border-b border-gray-400 flex items-center justify-between pr-4">
                <img src="/navbarLogo.svg" alt="" onClick={() => { navigate("/") }} className="cursor-pointer w-14 sm:w-16 py-2" />
                {
                    sidebar ? <X onClick={() => { setSidebar(false) }} className="w-6 h-6 text-gray-800 sm:hidden cursor-pointer" />
                        :
                        <Menu onClick={() => { setSidebar(true) }} className="w-6 h-6 text-gray-800 sm:hidden cursor-pointer" />
                }
            </nav>

            <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <div className="flex-1 bg-[#F4F7FB]">
                    <Outlet />
                </div>
            </div>
        </div>
    ) : (
        <div>
            <SignIn />
        </div>
    )
}

export default Layout;