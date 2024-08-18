import './index.css';
import Profile from './components/Profile';
import Research from './components/Research';
import Art from './components/Art';
import BusinessProjects from './components/BusinessProjects';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function App() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex justify-center min-h-screen'>
      <div className='flex flex-col md:flex-row max-w-[1600px] w-full h-full'>
        <Profile />
        <div className='flex flex-col justify-start items-start text-left p-16 w-full md:ml-[45%]'>
          <Research />
          <BusinessProjects />
          <Art />
        </div>
        {isTop && (
          <div className='absolute bottom-10 left-[70%] transform -translate-x-1/2'>
            <FaChevronDown className='text-green-500 text-3xl animate-bounce' />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;