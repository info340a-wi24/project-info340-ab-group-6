import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, push } from 'firebase/database';

function CreateProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [price, setPrice] = useState('');
//   const [year, setYear] = useState('');
//   const [building, setBuilding] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState('');

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profile = { name };
    
    const db = getDatabase();
    const newProfileRef = ref(db); // Ensure you have a specific path if needed
    //console.log(newProfileRef.key);
    push(newProfileRef, profile).then((ref) => {
        const keyThing = ref.key;
        console.log(keyThing)

      navigate('/'); // Navigate to the homepage or show a success message
    }).catch((error) => {
      console.error("Error adding document: ", error);
      setSubmitError('Failed to create profile. Please try again.');
    });
  };

const handleNameChange = (e) => {
    console.log(`Changing name to ${e.target.value}`);
    setName(e.target.value);
  };

// function getKey() {
//     return(keyThing);
// }

  return (
    <main className='main'>

      <section className="createProfile-wrap">
        <h1>Create Profile</h1>
        <form onSubmit={handleSubmit} className="create-form">
          {/* Input fields now each have their own state and setter function */}
          <div>
            <h5>Name</h5>
            <input type="text" className="form-input2" placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </div>
          {/* <div>  
            <h5>Email</h5>          
            <input type="email" className="form-input2" placeholder="Enter your email" value={profile.email} onChange={handleChange}/>
          </div>
          <h5>Roomate Preferences</h5>
          <div>
            <label>
              <select className="form-control" id="Location" value={profile.location} onChange={handleChange}>
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
              <select className="form-control" id="Year" value={profile.year} onChange={handleChange}>
                <option value="Year">Year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Building" value={profile.building} onChange={handleChange}>
                <option value="Building-Type">Building Type</option>
                <option value="Dorm">Dorm</option>
                <option value="Apartment">Apartment</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Gender" value={profile.gender} onChange={handleChange}>
                <option value="Building-Type">Preffered Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="They/Them">They/Them</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div>
            <h5>Age</h5>
            <label>
              <input className="form-input2" type="text" placeholder="Enter your age" value={profile.age} onChange={handleChange}/>
            </label>
          </div>
          <div>
            <h5>Upload Profile Picture</h5>
            <label className="upload-profile">
              <input type="file" />
              <span>Choose file</span>
            </label> */}
          {/* {submitError && <div className="error-message">{submitError}</div>} */}
          {/* </form></div> */}
          <input className="submit" type="submit" value="Create Account"/>
        </form>
      </section>
    </main>
  );
}
export {keyThing};
export default CreateProfile;
