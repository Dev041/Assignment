import DownloadApp from "./pages/DownloadApp";
import FoodMenu from "./pages/FoodMenu";
import AdvanceBooking from "./pages/AdvanceBooking";
import GetInTouch from "./pages/GetInTouch";
import HeroComponent from "./pages/HeroComponent";
import DineIn from './pages/DineIn';
import OurServices from './pages/OurServices';


function App() {

  return (
  <>
    <HeroComponent />
    <DineIn />
    <AdvanceBooking />
    <br></br>
    <OurServices />
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
