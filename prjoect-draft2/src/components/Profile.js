import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue, child } from 'firebase/database';


function Profile() {
  const { profileId } = useParams();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const index = parseInt(profileId, 10) - 1;
    const profileRef = ref(db, '/' + index);
  console.log(index);
    onValue(profileRef, (snapshot) => {
      if (snapshot.exists()) {
        
        const profileData = snapshot.val();
        if (profileData && profileData.id === parseInt(profileId, 10)) {
          setProfile(profileData);
        } else {
          setError('Profile ID does not match the data');
        }
      } else {
        setError('Profile not found');
      }
      setIsLoading(false);
    }, (errorObject) => {
      setError('Firebase read failed: ' + errorObject.message);
      setIsLoading(false);
    });
  }, [profileId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>Profile not found</div>;

  return (
    <>
      <header>
        <nav className="headbar">
          <div className="logo">DubMatch</div> 
        </nav>
      </header>
      <main className="main-container">
        <div className="profile-container">
          <section className="profile-header">
            {/* Use dynamic data from JSON */}
            <img src={profile.imageUrl} alt="Profile" className="profile-picture" />

            {/* change*/}
            <h2>{profile.name}</h2>
            <p>{profile.gender}, {profile.age}</p>
            <p>{profile.email}</p>
            <p>{profile.description}</p>
          </section>
          
          <section className="profile-about-container">
            <div className="profile-about">
              <h3>About Me</h3>
              <p>{profile.about}</p>
            </div>
          </section>
          
          <section className="profile-looking-for">
            <h3>Looking For</h3>
            <p>{profile.looking}</p>
          </section>
        </div>
        {/* <div className="additional-section">
          <h3>Social Media and Music</h3>
          <a href="https://instagram.com/yourProfile" target="_blank" title="Check out my Instagram">
          <img className="SizingChange" src={`${process.env.PUBLIC_URL}/images/insta.svg`} alt="Insta" style={{width: "75px", height: "auto", paddingLeft: "10px"}}/>

          </a>
          <a href="https://open.spotify.com/?" target="_blank" title="Check out my Spotify">
          <img className="SizingChange" src={`${process.env.PUBLIC_URL}/images/Spotify.png`} alt="Spotify" style={{width: "75px", height: "auto", paddingLeft: "10px"}}/>
          </a>
          <a href="https://open.spotify.com/?" target="_blank" title="Check out my Spotify">
          <img className="SizingChange" src={`${process.env.PUBLIC_URL}/images/LinkedIn.png`} alt="Linkedin" style={{width: "75px", height: "auto", paddingLeft: "10px"}}/>
          </a>
          
          
          <h3 style={{paddingTop: "5%"}}>Some pictures I took from my hikes!</h3>
          <img src={`${process.env.PUBLIC_URL}/images/lake22.jpg`} alt="Example" style={{width: "40%"}}/>
          <img src={`${process.env.PUBLIC_URL}/images/SnowLak.jpg`} alt="Snow Lake" style={{width: "48.8%"}}/>

          <h3 style={{paddingTop: "5%"}}>Favorite CS Projects</h3>
          <img src={`${process.env.PUBLIC_URL}/images/Chess.webp`} alt="Chses" style={{width: "40%"}}/>
          <img src={`${process.env.PUBLIC_URL}/images/chatbot.webp`} alt="chatbot" style={{width: "30%"}}/>
        </div> */}
      </main>
    </>
  );
}


export default Profile;
