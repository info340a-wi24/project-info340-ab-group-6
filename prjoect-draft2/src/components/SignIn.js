import React from 'react';

function SignIn() {
  return (
  <section className="login-form-wrap">
    <h1>Dub Match</h1>
    <form className="login-form" method="POST" action="#">
      <label>
        <input className="form-input" type="email" name="email" required placeholder="Email" />
      </label>
      <label>
        <input className="form-input" type="password" name="password" required placeholder="Password" />
      </label>
      <input type="submit" value="Login" />
    </form>
    <h5><a href="#">Create Account</a></h5>
  </section> 
  );
}

export default SignIn;