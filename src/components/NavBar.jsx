import "../css/componentsCss/NavBar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/TheMindMapLogoLight.png"
import { logout } from "../services/authApi";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    return (
        <div className="navbar">
            <div className="imgContainerNav">
            <img src={logo} alt="TheMindMap" />
            <span class="leftWelcome">Welcome, <strong>{user.name}</strong></span>
            </div>
            {/* <form>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="srch" aria-hidden="true"><path d="m19 19-3.5-3.5">
                </path><circle cx="11" cy="11" r="6"></circle></svg>
                <input type="text" class="searchBar" placeholder="Search Clue ..."/>
            </form> */}
            <div className="navbar-right">
                <span className="rightWelcome">Welcome, <strong>{user.name}</strong></span>
                <div className="Logout">
                    <button
                        onClick={() => {
                            dispatch(logout(navigate));
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
