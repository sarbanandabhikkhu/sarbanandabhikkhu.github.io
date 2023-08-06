import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Header />
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondery">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img
            src="https://avatars.githubusercontent.com/u/105801170?s=400&u=768e67c843441822df7e79d887a15e14b368b07d&v=4"
            alt=""
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondery">BIO</h3>
            <p>
              I'm SarbaNanda, a Budddhist Monk from CHT in bangladesh
              Bangladesh. I am more interested in Buddhism and Buddhist
              literature and would like to work on it in the future. Desire to
              do something related to Buddhism on digital platform. I practice
              coding in my spare time, I believe that I have acquired enough
              coding knowledge to run a job. I always have a passion to learn
              and know something new. I also want to work as a content creator
              on Youtube.
            </p>
          </div>
          <div className="job job-1">
            <h3>Buddhist Monk</h3>
            <h4>That is my Great Job!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              necessitatibus officiis corrupti voluptates sit adipisci. Facilis
              quod pariatur iusto fuga!
            </p>
          </div>
          <div className="job job-2">
            <h3>Frontend Web Developer</h3>
            <h4>Fullstack JavaScript Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              necessitatibus officiis corrupti voluptates sit adipisci. Facilis
              quod pariatur iusto fuga!
            </p>
          </div>
          <div className="job job-3">
            <h3>Designer</h3>
            <h4>Graphics & UI/UX Designer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              necessitatibus officiis corrupti voluptates sit adipisci. Facilis
              quod pariatur iusto fuga!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
