import Benefits from './lib/ui/benefits'
import Features from './lib/ui/features'
import Footer from './lib/ui/footer/footer'
import WhyOurService from './lib/ui/header/why-our-service'
import NavBar from './lib/ui/navbar/navbar'
function App() {

  return (
    <>
      <NavBar />

      <WhyOurService />

      <main className='max-w-content-width m-auto flex flex-col justify-center items-center p-2 md:gap-8 md:p-10'>
        <Benefits />

        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
