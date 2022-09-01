import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <div className="banner">
                <div className="banner-text">
                    <h1>Welcome to NOS</h1>
                    <h4>Here you can find a wide selection of board games, card games, and toys!</h4>
                </div>
                <img src="/images/banner2_home.jpg" alt="banner" />
            </div>
            <h3>Start browsing our catalog and get your game night going.</h3>
            <div className="link-container">
                <Link className="btn-link" to="/catalog">Get started</Link>
            </div>
        </div>
    );
}

export default Home;