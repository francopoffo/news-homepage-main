import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Aside from "./components/Aside"
import BottomNews from "./components/BottomNews"

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
        <Banner />
        <Aside />
        <BottomNews />
      </section>
    </main>
  )
}
