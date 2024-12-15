import Auth from "@components/Auth"
import { useState } from "react"

function Header() {
  const [openModalAuth, setOpenModalAuth] = useState(false)
  const [typeModal, setTypeModal] = useState('')

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b h-header border-gray-200 dark:border-gray-600">
        <div className="flex items-center h-full justify-between px-7 gap-8">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap logo hidden md:block">Educa.</span>
          </a>

          <div className="relative flex-1 max-w-[420px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search exams, posts, ..." />
          </div>

          <div className="space-x-5">
            <button type="button" className="text-gray-800 text-sm dark:text-white hidden sm:inline-block"
              onClick={() => {
                setTypeModal('register')
                setOpenModalAuth(true)
              }}
            >Sign up</button>
            <button type="button" className="btn-primary" onClick={() => {
              setTypeModal('login')
              setOpenModalAuth(true)
            }}>Sign in</button>
          </div>
        </div>
      </nav>

      <Auth
        openModal={openModalAuth}
        setOpenModal={setOpenModalAuth}
        type={typeModal}
        setType={setTypeModal}
      />

    </>
  )
}

export default Header