import './App.css';
import './index.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrowseSection from "./components/BrowseByBranch";
import NewArrivals from "./components/NewArrivals";
import UploadNotesBanner from "./components/UploadNotesBanner";
import FloatingContactUsButton from "./components/FloatingContactUsButton";
import SubscribeFooter from './components/SubscribeFooter';


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BrowseSection/>
      <NewArrivals/>
      <UploadNotesBanner/>
      <FloatingContactUsButton/>
      <SubscribeFooter/>
    </div>
  );
};

export default App;

