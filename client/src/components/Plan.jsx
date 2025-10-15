import { PricingTable } from "@clerk/clerk-react";

function Plan() {
    return (
        <div id="plan" className="min-w-screen min-h-screen bg-black">
            <div className="max-w-2xl mx-auto z-20 my-3 pt-24">
                <div className="text-center">
                    <h2 className="bg-gradient-to-t from-purple-500 via-purple-600 to-purple-800 bg-clip-text text-transparent text-[42px] font-semibold">Choose your plan</h2>
                    <p className="text-gray-300 max-w-lg mx-auto">Start for free and scale up as you grow. Find the perfect plan for your content creation needs</p>
                </div>
                <div className="mt-14 max-sm:mx-8">
                    <PricingTable />
                </div>
            </div>
        </div>

    )
}

export default Plan;