import Banner from "@components/client/Banner"
import Header from "@components/client/Header"
import RecentExams from "@components/client/RecentExams"
import Sidebar from "@components/client/Sidebar"

function Client() {
  return (
    <div className="h-[1500px]">
      <Header />
      <Sidebar />
      <div className="mt-header pt-5 pr-8 pl-6 md:ml-sidebar">
        <Banner />
        <div className="mt-8 lg:px-10 md:mt-10">
          <RecentExams />
        </div>
      </div>
    </div>
  )
}

export default Client