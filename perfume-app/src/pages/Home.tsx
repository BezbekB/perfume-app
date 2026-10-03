import Header from "../components/Header"
import DailyDashboardCard from "../components/DailyDashboardCard"
import TodayPerfume from "../components/TodayPerfume"
function Home() {

  return (
    <>
      <Header/>

      <main>
        <DailyDashboardCard/>
        <TodayPerfume/>
      </main>
    </>
  )
}

export default Home
