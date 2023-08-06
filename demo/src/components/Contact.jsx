import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  const handleSubmit = () => {
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const messege = document.querySelector("#messege").value;
    const subject = document.querySelector("#subject").value || "NO SUBJECT";
    const body = `Hello, my name is ${name}. My contact number is ${phone} and my email is ${email}. ${messege}`;

    window.location.href =
      "mailto:sarbanandabhikkhu@gmail.com?cc=sarbanandachakma@gmail.com,sarbanandadev@gmail.com&subject=" +
      subject +
      "&body=" +
      body;
  };

  return (
    <>
      <Header />
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondery">Me</span>
        </h1>
        <h2 className="sm-heading">This is how to can reach me...</h2>

        <div className="contact-form">
          <div className="boxes">
            <div>
              <span className="text-secondery">
                <i className="fas fa-phone-alt"></i>
              </span>
              +880 1865-061799
            </div>
            <div>
              <span className="text-secondery">
                <i className="fas fa-envelope"></i>
              </span>
              sarbanandabhikkhu@gmail.com
            </div>
            <div>
              <span className="text-secondery">
                <i className="fas fa-address-book"></i>
              </span>
              Rngamati Hill Tract, Chittagong
            </div>
          </div>
          <form>
            <div className="row">
              <div className="input-group">
                <input type="text" id="name" required />
                <label for="name">
                  <i className="fas fa-user"></i> Enter your name...
                </label>
              </div>
              <div className="input-group">
                <input type="text" id="phone" required />
                <label for="phone">
                  <i className="fas fa-phone-alt"></i> Enter your phone...
                </label>
              </div>
            </div>
            <div className="input-group">
              <input type="text" id="email" required />
              <label for="email">
                <i className="fas fa-envelope"></i> Enter your email...
              </label>
            </div>
            <div className="input-group">
              <input type="text" id="subject" required />
              <label for="subject">
                <i className="fas fa-info-circle"></i> Enter your subject...
              </label>
            </div>
            <div className="input-group">
              <textarea id="messege" rows="8" required></textarea>
              <label for="messege">
                <i className="fas fa-comment"></i> Enter your messege...
              </label>
            </div>
            <button type="button" onClick={handleSubmit}>
              <i className="fas fa-paper-plane"></i> SUBMIT
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
