import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref as dbRef, push } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function CreateProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [building, setBuilding] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  
  const handleDisctriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleBuildingChange = (e) => {
    setBuilding(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();

    if (image) {
      const storage = getStorage();
      const imageRef = storageRef(storage, `profileImages/${image.name}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          const newProfileRef = dbRef(db);
          push(newProfileRef, { name, imageUrl: downloadURL, age, description, location, price, year, building, gender }).then((ref) => {
            console.log(ref.key); // Key of the new record
            navigate('/'); // Navigate to the homepage or show a success message
          }).catch((error) => {
            console.error("Error adding document: ", error);
            setSubmitError('Failed to create profile. Please try again.');
          });
        });
      }).catch((error) => {
        console.error("Error uploading image: ", error);
        setSubmitError('Failed to upload image. Please try again.');
      });
    } else {
      // Handle the case when there is no image
      const newProfileRef = dbRef(db);
      push(newProfileRef, { name, age, description, location, price, year, building, gender }).then((ref) => {
        console.log(ref.key); // Key of the new record
        navigate('/');
      }).catch((error) => {
        console.error("Error adding document: ", error);
        setSubmitError('Failed to create profile. Please try again.');
      });
    }
  };

  return (
    <main className='main'>
      <section className="createProfile-wrap">
        <h1>Create Profile</h1>
        <form onSubmit={handleSubmit} className="create-form">
          <div>
            <h5>Name</h5>
            <input type="text" className="form-input2" placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <h5>Age</h5>
            <input type="text" className="form-input2" placeholder="Enter your age" value={age} onChange={handleAgeChange} />
          </div>
          <div>
            <h5>Description</h5>
            <input type="text" className="form-input2" placeholder="Enter description" value={description} onChange={handleDisctriptionChange} />
          </div>
          <div>
            <label>
              <select className="form-control" id="Location" value={location} onChange={handleLocationChange}>
                <option value="Location">Select Location</option>
                <option value="North Campus">North Campus</option>
                <option value="West Campus">West Campus</option>
                <option value="UVillage">UVillage</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Price" value={price} onChange={handlePriceChange}>
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
              <select className="form-control" id="Year" value={year} onChange={handleYearChange}>
                <option value="Year">Year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Building" value={building} onChange={handleBuildingChange}>
                <option value="Building-Type">Building Type</option>
                <option value="Dorm">Dorm</option>
                <option value="Apartment">Apartment</option>
              </select>
            </label>
            <label>
              <select className="form-control" id="Gender" value={gender} onChange={handleGenderChange}>
                <option value="Building-Type">Preffered Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="They/Them">They/Them</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div>
            <h5>Upload Profile Picture</h5>
            <input type="file" onChange={handleImageChange} />
          </div>
          {submitError && <div className="error-message">{submitError}</div>}
          <input className="submit" type="submit" value="Create Account"/>
        </form>
      </section>
    </main>
  );
}

export default CreateProfile;