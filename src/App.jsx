import { useState } from 'react'
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import './App.css'
import "./index.css"
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';

function App() {
 //For showing if we are still loading or not
 const [isLoaded, setIsLoaded] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Showing the loading Screen untill the screen is loaded */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {/* Fadding Transition effect after the loading is finished */}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen = {menuOpen} setMenuOpen ={setMenuOpen}/>
        <MobileMenu menuOpen = {menuOpen} setMenuOpen ={setMenuOpen}/>
        <Home/>
        <About/>

      </div>
    </div>
  )
}

export default App;
