import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref as dbRef, push } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function CreateProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const db = getDatabase();
    const storage = getStorage();
    
    if (image) {
      const imageRef = storageRef(storage, `profileImages/${image.name}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          const newProfileRef = dbRef(db);
          push(newProfileRef, { name, imageUrl: downloadURL }).then((ref) => {
            console.log(ref.key);
            console.log(newProfileRef);
            navigate('/');
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
      const newProfileRef = dbRef(db);
      push(newProfileRef, { name }).then((ref) => {
        console.log(ref.key);
        console.log(newProfileRef);
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
        <h1>Crete Profile</h1>
        <form onSubmit={handleSubmit} className="create-form">
          <div>
            <h5>Name</h5>
            <input type="text" className="form-input2" placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <h5>Upload Profile Picture</h5>
            <input type="file" onChange={handleImageChange} />
          </div>
          {submitError && <div className="error-message">{submitError}</div>}
          <input className="submit" type="submit" value="Create Account" />
        </form>
      </section>
    </main>
  );
}

export default CreateProfile;
