import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Team from "./../components/Team";

export default function Home() {
  return (
    <>
      <section className="header h-screen flex flex-col">
        <Navbar />
        <Header />
      </section>
     {/* <About />
      <Team /> */}
    </>
  );
}
