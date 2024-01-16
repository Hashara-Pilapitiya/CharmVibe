import './App.css';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Features from './Components/Features';
import NewItems from './Components/NewItems';

function App() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>

      <Hero />
      <Stats />
      <Features />
      <NewItems />

    </div>
  );
}

export default App;
