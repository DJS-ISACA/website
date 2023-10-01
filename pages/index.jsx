import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Team from "./../components/Team";
import Sponsors from "./../components/Sponsors"

export default function Home() {
  return (
    <>
      <section className="header h-screen flex flex-col overflow-hidden">
        <Navbar />
        <Header />
      </section>
      <Sponsors/>
      {/* <About />
      <Team /> */}
    </>
  );
}
