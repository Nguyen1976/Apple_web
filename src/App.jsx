import Hero from './componets/Hero'
import Highlights from './componets/Highlights'
import Navbar from './componets/Navbar'
import Model from './componets/Model'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
