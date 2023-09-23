import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import First from "./components/blogs/First";
import Bridegroom from "./components/Bridegroom";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Organization from "./components/Organization";
import RSVP from "./components/RSVP";
import Seeyou from "./components/Seeyou";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";
import StorySection from "./components/StorySection";
import Where from "./components/Where";

function App() {
  return (
    <ChakraProvider>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Organization />
        <StorySection />
        <Gallery />
        <Where />
        <RSVP />
        <Footer />
      </div>
      <BrowserRouter>

      <Routes>
        <Route path="/first" component={<First />} />
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
