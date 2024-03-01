import React from "react";


function Profile() {
  console.log("Does this work");
  return (
    <>
      <header>
        <nav className="headbar">
          <div className="logo">DubMatch</div> 
        </nav>
        <button className="edit">
          <span className="material-symbols-outlined">
            edit
          </span>
          Edit profile
        </button>
      </header>
      <main className="main-container">
        <div className="profile-container">
          <section className="profile-header">
            <img src="img/profile.jpg" alt="Profile Picture" className="profile-picture" />
            <h2>Quandale Sherman, 18</h2>
            <p>He/Him</p>
            <p>Incoming Freshman majoring in Computer Science</p>
          </section>
          
          <section className="profile-about-container">
            <div className="profile-about">
              <h3>About Me</h3>
              <p>My name is Quandale Sherman and I am an incoming Freshman Studying CS at UW. I love hiking, playing video games... lored eida abdeubd</p>
            </div>
          </section>
          
          <section className="profile-looking-for">
            <h3>Looking For</h3>
            <p>Someone who likes going out, likes sports, but would stay focused on school during finals week. Looking to room in West Campus but open for any suggestions. Don't be afraid to reach out.</p>
          </section>
        </div>
        <div className="additional-section">
          <h3>Social Media and Music</h3>
          <a href="https://instagram.com/yourProfile" target="_blank" title="Check out my Instagram">
            <img src="img/insta.svg" alt="Instagram Logo" style={{width: "75px", height: "auto", paddingLeft: "10px"}} />
          </a>
          <a href="https://open.spotify.com/?" target="_blank" title="Check out my Spotify">
            <img src="img/Spotify.png" alt="Spotify Logo" style={{width: "95px", height: "auto"}} />
          </a>
          <a href="https://open.spotify.com/?" target="_blank" title="Check out my Spotify">
            <img src="img/LinkedIn.png" alt="Spotify Logo" style={{width: "65px", height: "auto"}} />
          </a>
          <h3 style={{paddingTop: "5%"}}>Some pictures I took from my hikes!</h3>
          <img src="img/lake22.jpg" alt="lake22" style={{width: "40%"}} />
          <img src="img/SnowLak.jpg" alt="Snow Lake" style={{width: "48.8%"}} />

          <h3 style={{paddingTop: "5%"}}>Favorite CS Projects</h3>
          <img src="img/Chess.webp" alt="Chess" style={{width: "40%"}} />
          <img src="img/chatbot.webp" alt="chatbot" style={{width: "30%"}} />
        </div>
      </main>
    </>
  );
}

export default Profile;
