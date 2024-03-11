import "../css/Signup.css"
export default function Signup(){
    return(
        <div className="mainpage">
        <form action="" className="login__form">
            <h1 className="login__title">Signup</h1>

            <div className="login__inputs">
                <div className="signup__box">
                  <input type="text" placeholder="Name" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="signup__box">
                  <input type="email" placeholder="Email ID" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>

               <div className="signup__box">
                  <input type="password" placeholder="Password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
               <div className="signup__box">
                  <input type="password" placeholder="Confirm password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>

            <button type="submit" className="signup__button">Signup</button>

            <div className="login__register">
               Already have an account? <a href="#">Login</a>
            </div>
         </form>
        </div>
    )
}