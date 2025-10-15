import AiTools from "../components/AiTools";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Plan from "../components/Plan";

function Home() {
    return (

        <div>
            <Navbar />
            <Hero />
            <AiTools />
            <Plan/>
            <Footer />
        </div>
    )
}

export default Home;