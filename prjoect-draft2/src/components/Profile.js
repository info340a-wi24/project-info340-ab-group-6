import React from "react";


function Profile() {
  return (
    <>
      <header>
        <nav className="headbar">
          <div className="logo">DubMatch</div> 
        </nav>
        <button className="edit">
          {/* <span className="material-symbols-outlined">
            edit
          </span> */}
          Edit profile
        </button>
      </header>
      <main className="main-container">
        <div className="profile-container">
          <section className="profile-header">
            <img src={`${process.env.PUBLIC_URL}/images/test-profile.jpg`} alt="Profile Picture" className="profile-picture" />

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
        </div>
      </main>
    </>
  );
}




export default Profile;
