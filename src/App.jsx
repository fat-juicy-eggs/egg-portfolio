import './index.css';
import Profile from './components/Profile';
import Research from './components/Research';

function App() {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='flex flex-col md:flex-row max-w-[1600px] w-full h-full'>
        <Profile />
        <div className='flex flex-col justify-start items-start text-left p-16 w-full md:ml-[50%]'>
          <Research />
        </div>
      </div>
    </div>
  );
}

export default App;