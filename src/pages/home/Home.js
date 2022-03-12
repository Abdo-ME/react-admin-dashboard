
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/sidebar"
import "./home.scss"

const Home = () => {
return (
    <div className="home">

        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            Home container
        </div>
    </div>
)}

export default Home