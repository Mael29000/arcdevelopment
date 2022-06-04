import Header from "./ui/Header";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/ui/Footer";
import { useState } from "react";
import LandingPage from "./ui/LandingPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/services" element={"<Services />"} />
          <Route exact path="/customsoftware" element={"<CustomSoftware />"} />
          <Route exact path="/mobileapps" element={"<MobileApps />"} />
          <Route exact path="/websites" element={"<Websites />"} />
          <Route exact path="/revolution" element={"<Revolution />"} />
          <Route exact path="/about" element={"<About />"} />
          <Route exact path="/contact" element={"<Contact />"} />
          <Route exact path="/estimate" element={"<Estimate />"} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
