import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <Header />
      <main className="login">
        <h1>Login</h1>
        <p>You need to login to access this page</p>
        <p>
          Go to the <Link to="/">Homepage</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Login;
