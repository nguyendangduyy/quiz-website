import banner from '@assets/banner.svg'
function Banner() {
  return (
    <div className='h-[300px] flex bg-gradient-to-r from-violet-400 to-fuchsia-200 rounded-xl'>
      <div className='flex flex-col gap-3 justify-center px-10'>
        <h3 className='text-white font-semibold text-2xl'>Grow your skills to advance your career path</h3>
        <p className='text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium laudantium magni totam deserunt laborum qui nisi autem quia?</p>
        <div>
          <button className='btn-orange'>GET STARTED</button>
        </div>
      </div>
      <div className='h-full w-full'>
        <img src={banner} className='w-full h-full' />
      </div>
    </div>
  )
}

export default Banner