import { Bell, FileQuestion, House, NotebookPen } from "lucide-react";

function Sidebar() {
  return (
    <div className="fixed bottom-0 w-full z-30 md:top-0 bg-white dark:bg-gray-900 md:left-0 md:w-sidebar mt-header">
      <nav className="h-full border-t border-gray-200 dark:border-gray-600 md:border-none">
        <ul className="flex gap-24 justify-center h-[60px] md:flex-col md:gap-4 md:justify-normal md:h-full md:mt-5 md:px-2">
          <li>
            <a href="#" className="text-gray-700 dark:text-white h-full flex flex-col justify-center items-center rounded-2xl md:dark:bg-slate-800 md:bg-stone-200 md:py-3">
              <House className="text-xl text-orange-500 md:text-2xl" />
              <span className="text-[13px] font-medium md:text-sm">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 dark:text-white h-full flex flex-col justify-center items-center rounded-2xl      md:py-3">
              <FileQuestion className="text-xl md:text-2xl" />
              <span className="text-[13px] font-medium md:text-sm">Exams</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 dark:text-white h-full flex flex-col justify-center items-center rounded-2xl     md:py-3">
              <NotebookPen className="text-xl md:text-2xl" />
              <span className="text-[13px] font-medium md:text-sm">Articles</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden absolute bottom-0 left-0 right-0 z-50 md:flex justify-center mb-20 cursor-pointer">
        <div className="rounded-full dark:bg-slate-800 bg-stone-200 p-2.5">
          <Bell className="text-xl text-gray-700 dark:text-white md:text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar