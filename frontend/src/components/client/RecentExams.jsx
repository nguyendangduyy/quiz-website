import newGif from '@assets/new.gif'
import RelativeTime from '@components/RelativeTime'

function RecentExams() {
  return (
    <div>
      <div className="mb-4">
        <div className='relative inline-block'>
          <h3 className="dark:text-white text-xl font-medium">Recent exams</h3>
          <div className='absolute -top-full translate-y-2/4 -right-1/2'>
            <img src={newGif} className='w-10'/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4 lg:gap-5">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <RelativeTime />
              </div>
            </div>
          </div>
          <div>
            <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className="rounded-md" />
          </div>
          <div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentExams