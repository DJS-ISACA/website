
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <section className="flex justify-between items-center">
      <p class="flex-1 text-6xl font-black tracking-widest leading-10 text-center text-white">DJS</p>
    <img class="flex-1 h-1/5 rounded-lg" src="https://via.placeholder.com/248.24896240234375x107"/>
    <p class="flex-1 text-6xl font-black tracking-widest leading-10 text-center text-white">ISACA</p>
      </section>
    </>
  )
}
