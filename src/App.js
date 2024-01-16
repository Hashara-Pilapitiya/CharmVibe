import './App.css';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Features from './Components/Features';

function App() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>

      <Hero />
      <Stats />
      <Features />

    </div>
  );
}

export default App;
