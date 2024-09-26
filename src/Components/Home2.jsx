import React, { useContext } from 'react';
import './Styless/Home2.css';
// import AuthContext from './Contexts/AuthContext';

function Home() {
//   let { name, user } = useContext(AuthContext);
    let user = "hello"
    let name = "name"
  return (
    <div className="HomeContainer">
      <header className="header-section">
        <h1>Welcome to MySite</h1>
        <p>
          A platform that blends social interaction, up-to-date news, and an upcoming library of knowledge-sharing resources.
        </p>
      </header>

      <section id="mainContainer">
        <div className="content">
          <h4>Welcome, {user ? user.username : 'Guest'}</h4>
          <p>
            Dive into the world of social sharing. Post, like, comment, and engage with a community of curious minds. Whether you want to share an idea, explore content, or interact with others, we've got it all in one place.
          </p>
        </div>

        <div className="content">
          <h4>Social Feed</h4>
          <p>
            Your personalized feed is waiting. Share your latest experiences through images, connect with friends, and explore trending topics. Whether it’s a moment from your day or an idea, share it with the world.
          </p>
        </div>

        <div className="content">
          <h4>News Updates</h4>
          <p>
            Stay informed with real-time news from around the globe. Whether it’s technology, politics, or entertainment, our news API keeps you updated with the latest happenings.
          </p>
        </div>

        <div className="content">
          <h4>Library (Coming Soon)</h4>
          <p>
            We're excited to launch a library feature that will give you access to educational materials, guides, and books on various subjects. Stay tuned for our upcoming resource hub.
          </p>
        </div>

        <div className="content">
          <h4>Explore More</h4>
          <p>
            From interactive quizzes to internships and career opportunities, PracEd is more than just a platform. It's your gateway to learning, growing, and connecting in exciting ways.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
