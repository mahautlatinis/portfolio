import "./index.css";
import * as React from "react";
import { IntlProvider } from "react-intl";
import Navbar from "./components/Navbar/Navbar";
import MovingNavbar from "./components/Navbar/MovingNavbar";
import Hero from "./components/Hero/Hero";
import Drawer from "./components/Drawer/Drawer";
import Carousel from "./components/Carousel/Carousel";

import messages_en from "./translations/en.json";
import messages_fr from "./translations/fr.json";
import DeviceMockup from "./components/DeviceMockup/DeviceMockup";

function App() {
  const messages = {
    en: messages_en,
    fr: messages_fr,
  };

  // get browser language without the region code
  const language = navigator.language.split(/[-_]/)[0];

  return (
    <IntlProvider
      defaultLocale="en"
      locale={navigator.language}
      messages={messages[language]}
    >
      <Navbar />
      <MovingNavbar />
      <Drawer />
      <DeviceMockup />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      {/* <Carousel /> */}
    </IntlProvider>
  );
}

export default App;
