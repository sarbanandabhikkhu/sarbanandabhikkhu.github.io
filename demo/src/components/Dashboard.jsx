import Header from "./Header";
import Footer from "./Footer";
import Clock from "./Clock";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="dashboard">
        <h1>Dashboard</h1>
        <p>This is the dashboard page</p>
        <Clock />
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
