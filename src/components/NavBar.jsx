import "../css/componentsCss/NavBar.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authApi";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    return (
        <div class="navbar">
            <img src="" alt="TheMindMap" />
            {/* <form>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="srch" aria-hidden="true"><path d="m19 19-3.5-3.5">
                </path><circle cx="11" cy="11" r="6"></circle></svg>
                <input type="text" class="searchBar" placeholder="Search Clue ..."/>
            </form> */}
            <div class="navbar-right">
                <span>Welcome, <strong>{user.name}</strong></span>
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
