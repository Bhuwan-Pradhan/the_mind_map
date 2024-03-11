import "../css/componentsCss/NavBar.css"
export default function NavBar() {
    return (
        <div class="navbar">
            <img src="" alt="TheMindMap"/>
            <div class="navbar-right">
                <span>Welcome, <strong>Username</strong></span>
                <div className="Logout">
                    <button
                    // onClick={() => {
                    //     dispatch(logout(navigate));
                    // }}
                    >
                    Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
