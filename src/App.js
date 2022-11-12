import Header from './components/Header';
import Hero from './components/Hero';
import Text from './components/Text';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex m-[4rem] items-center justify-center gap-[10rem]">
        <div className='flex flex-col'>
          <Text />
          <Sponsors />
        </div>
        <Hero />
      </div>

    </div>
  );
}

export default App;
