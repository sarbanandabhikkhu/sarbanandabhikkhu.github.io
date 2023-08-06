import { Link } from "react-router-dom";

import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <h1 className="lg-heading">
          SarbaNanda <span className="text-secondery">Bhikkhu</span>
        </h1>
        <h2 className="sm-heading">
          Hey, I am a Buddhist Monk Who is Web Developer, Programmer & Designer
        </h2>
        <div className="icons">
          <Link to="https://sarbanandabhikkhu.blogspot.com">
            <i className="fab fa-blogger fa-2x"></i>
          </Link>
          <Link to="https://github.com/sarbanandabhikkhu/">
            <i className="fab fa-github-square fa-2x"></i>
          </Link>
          <Link to="mailto:sarbanandabhikkhu@gmail.com?cc=sarbanandachakma@gmail.com">
            <i className="fas fa-envelope fa-2x"></i>
          </Link>
          <Link to="https://youtube.com/@sarbanandabhikkhu">
            <i className="fab fa-youtube fa-2x"></i>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
