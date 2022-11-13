import Header from './components/Header';
import Hero from './components/Hero';
import Text from './components/Text';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='lg:flex flex-row-reverse items-center justify-center gap-[10rem]'>
        <Hero />
        <div className='lg:flex flex-col'>
          <Text />
          <Sponsors />
        </div>
      </div>
    </div>
  );
}

export default App;
