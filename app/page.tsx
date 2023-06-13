import NavBar from "./components/NavBar"
import Banner from "./components/Banner"

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
        <Banner />
        <div className="bg-red-600 row-span-2">oi</div>
        <div className="bg-green-600 col-span-3">oi</div>
      </section>
    </main>
  )
}
