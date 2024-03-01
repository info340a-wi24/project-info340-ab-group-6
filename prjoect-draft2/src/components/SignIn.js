import React from 'react';

function SignIn() {
  return (
    <form>
      <div className="container m-auto">
        <div className="card text-center">
          <div className="card-header">
            <h1 className="card-title">DUB MATCH</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" className="form-control" id="Username" aria-describedby="usernameHelp" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" id="Password" placeholder="Enter your password" />
            </div>
            <div className="pt-2">
              <a href="/project-info340-ab-group-6/main/index.html" className="btn btn-primary">Login</a>
            </div>
            <div className="pt-1 pb-1">
              <a href="CreateProfile.html" className="card-link">Create a Profile</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignIn;