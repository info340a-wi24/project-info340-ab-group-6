import React from 'react';

function CreateProfile() {
  return (
    <form>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card text-center header-background">
          <div className="card-header">
            <h1 className="header-text">CREATE PROFILE</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="FirstName">First Name</label>
              <input type="text" className="form-control" id="FirstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" className="form-control" id="LastName" placeholder="Enter your last name" />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" className="form-control" id="Email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" id="Password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Location</label>
              <select className="form-control" id="Location">
                <option value="North Campus">North Campus</option>
                <option value="West Campus">West Campus</option>
                <option value="UVillage">UVillage</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Price">Price</label>
              <select className="form-control" id="Price">
                <option value="800-1000">$800 - $1000</option>
                <option value="1000-1200">$1000 - $1200</option>
                <option value="1200-1400">$1200 - $1400</option>
                <option value="1400-1600">$1400 - $1600</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Year">Year</label>
              <select className="form-control" id="Year">
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Building">Building</label>
              <select className="form-control" id="Building">
                <option value="Dorm">Dorm</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <select className="form-control" id="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="They/Them">They/Them</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateProfile;
