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
