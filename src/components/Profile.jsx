const Profile = () => {
    return (
      <div className='flex flex-col min-h-screen leading-relaxed md:box-border md:w-1/2 items-start md:pl-20 pl-14 md:mt-5 md:fixed justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold'>Eggoil</h1>
        <div className='flex flex-col flex-wrap justify-center pt-3 md:flex-row md:px-0 md:justify-start'>
          <p className='text-md'>
            here's an introduction i guess
          </p>
        </div>
        <div className='flex space-x-4 mt-4'>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
          <a href='mailto:email@example.com'>Email</a>
          <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>Discord</a>
        </div>
      </div>
    );
  }
  
  export default Profile;
  