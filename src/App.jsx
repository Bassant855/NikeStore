
import './App.css'
import {Cart, FlexContent, Footer, Hero , Navbar, Sales, Stories} from './components'
import {heroapi, popularsales, toprateslaes,sneaker,highlight, story, footerAPI} from './data/data.js'
function App() {


  return (
    <>
    <Navbar/>
    <Cart/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists/>
        <Sales  endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
        <Footer footerAPI={footerAPI} className='-mb-10'/>
      </main>
    </>
  )
}

export default App
