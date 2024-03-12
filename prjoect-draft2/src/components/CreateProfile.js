import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <main className='main'>
      <section className="createProfile-wrap">
        <h1>Create Profile</h1>
        <form onSubmit={handleSubmit} className="create-form">
          <h5>Name Information</h5>
          <label>
            <input className="form-input2" type="text" id="First-Name" placeholder="Enter first name"/>
          </label>
          <label>
            <input className="form-input2" type="text" id="Last-Name" placeholder="Enter Last Name"/>
          </label>
          <div>  
            <h5>Email</h5>          
            <input type="email" className="form-input2" id="Email" placeholder="Enter your email" />
          </div>
          <h5>Roommate Preferences</h5>
          <div>
            <label>
              <select className="form-control" id="Location">
                <option value="Location">Select Location</option>
                <option value="North Campus">North Campus</option>
                <option value="West Campus">West Campus</option>
                <option value="UVillage">UVillage</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Price">
                <option value="Price-Range">Select Price Range</option>
                <option value="800-1000">$800 - $1000</option>
                <option value="1000-1200">$1000 - $1200</option>
                <option value="1200-1400">$1200 - $1400</option>
                <option value="1400-1600">$1400 - $1600</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <select className="form-control" id="Year">
                <option value="Year">Year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Building">
                <option value="Building-Type">Building Type</option>
                <option value="Dorm">Dorm</option>
                <option value="Apartment">Apartment</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Gender">
                <option value="Building-Type">Preferred Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="They/Them">They/Them</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <input className="submit" type="submit" value="Create Account"/>
        </form>
      </section>
    </main>
  );
}

export default CreateProfile;


