import DownloadApp from "./pages/DownloadApp";
import FoodMenu from "./pages/FoodMenu";
import AdvanceBooking from "./pages/AdvanceBooking";
import GetInTouch from "./pages/GetInTouch";
import HeroComponent from "./pages/HeroComponent";


function App() {

  return (
  <>
    <HeroComponent />
    <AdvanceBooking />
    <br></br>
    <FoodMenu />
    <br></br>
    <br></br>
    <DownloadApp /> 
    <GetInTouch />
  </>
  )
}

export default App
