import React from "react";


const Register =()=> {
    const register=(e)=>{
         e.preventdefault()
    }

    return(
        <div className="register_center">
      <div className="form_register">
          <form className="form-body" onSubmit={register}>
              <div className="username">
                  <label className="form__label" for="firstName">Enter Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="Enter Name"/>
              </div>
              
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
              <button type="submit" class="btn">Register</button>
          </form>
      </div>      
      </div>
    )       
}
      export default Register;