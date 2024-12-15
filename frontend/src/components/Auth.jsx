import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

function Auth({ openModal, setOpenModal, type, setType }) {
  const { register } = useForm()

  const modalRef = useRef()

  useEffect(() => {
    function handleClickOutside(e) {
      if (!modalRef.current.contains(e.target)) {
        setOpenModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalRef, setOpenModal])

  return (
    <div>
      <div className={`flex fixed top-0 right-0 left-0 bottom-0 justify-center items-center duration-300 transition-all bg-black/50 z-50 ${openModal ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className={`${openModal ? 'scale-100' : 'scale-0'} transition-transform duration-300 ease-out relative p-4 w-full max-w-2xl max-h-full`}>
          <div ref={modalRef} className="relative bg-white rounded-xl shadow dark:bg-gray-700 p-4">
            <button onClick={() => setOpenModal(false)} type="button" className="flex justify-center items-center text-gray-800 bg-stone-200 transition-all hover:text-white rounded-xl text-sm w-8 h-8 ms-auto hover:bg-orange-500 dark:hover:text-white">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 space-y-4">
              <div className="flex items-center justify-center flex-col gap-3">
                <div>
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                </div>
                {type === 'login' && <h3 className="dark:text-white text-center text-2xl font-medium">Sign in to <span className="logo">Educa.</span></h3>}
                {type === 'register' && <h3 className="dark:text-white text-center text-2xl font-medium">Sign up to <span className="logo">Educa.</span></h3>}
              </div>
              <form className="max-w-sm mx-auto">
                {type === 'register' && <div className="mb-5">
                  <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <span>Name</span>
                    <span className="text-red-500 text-xl">*</span></label>
                  <input type="text" id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                </div>}

                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required />
                </div>
                {type === 'register' && <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required />
                </div>}
                {type === 'login' && <a href="#" className="text-end block text-gray-700 dark:text-white mb-3 text-sm">Forgot password?</a>}
                <div>
                  <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all">Submit</button>
                </div>
                {type === 'login' && <div onClick={() => setType('register')} className="text-end text-gray-700 dark:text-white text-sm mt-3">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></div>}

                {type === 'register' && <div onClick={() => setType('login')} className="text-end text-gray-700 dark:text-white text-sm mt-3">Already a member? <a href="#" className="text-blue-500">Sign in</a></div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth