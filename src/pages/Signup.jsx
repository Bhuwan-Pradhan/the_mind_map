import "../css/Signup.css"
export default function Signup(){
    return(
        <div class="mainpage">
        <form action="" class="login__form">
            <h1 class="login__title">Signup</h1>

            <div class="login__inputs">
                <div class="signup__box">
                  <input type="text" placeholder="Name" required class="login__input"/>
                  <i class="ri-mail-fill"></i>
               </div>
               <div class="signup__box">
                  <input type="email" placeholder="Email ID" required class="login__input"/>
                  <i class="ri-mail-fill"></i>
               </div>

               <div class="signup__box">
                  <input type="password" placeholder="Password" required class="login__input"/>
                  <i class="ri-lock-2-fill"></i>
               </div>
               <div class="signup__box">
                  <input type="password" placeholder="Confirm password" required class="login__input"/>
                  <i class="ri-lock-2-fill"></i>
               </div>
            </div>

            <button type="submit" class="signup__button">Signup</button>

            <div class="login__register">
               Already have an account? <a href="#">Login</a>
            </div>
         </form>
        </div>
    )
}