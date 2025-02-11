import "./index.css";
import * as React from "react";
import { IntlProvider } from "react-intl";
import Navbar from "./components/Navbar/Navbar";
import MovingNavbar from "./components/Navbar/MovingNavbar";
import Hero from "./components/Hero/Hero";
import Drawer from "./components/Drawer/Drawer";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

import messages_en from "./translations/en.json";
import messages_fr from "./translations/fr.json";
import Gallery from "./components/Gallery/Gallery";
import Accordion from "./components/Accordion/Accordion";
import Avatar from "./components/Avatar/Avatar";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import SocialButtons from "./components/Button/SocialButtons";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Timeline from "./components/Timeline/Timeline";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

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
      <h1 className="unifrakturmaguntia-regular">Mahaut Latinis</h1>
      <Navbar />
      <Avatar />
      <Badge />
      <VideoPlayer />
      <Timeline />
      <Jumbotron />
      <Button />
      <SocialButtons />
      <MovingNavbar />
      <Drawer />
      <Hero />
      <Form />
      <Gallery />
      <Accordion />
      <Carousel />
      <Footer />
    </IntlProvider>
  );
}

export default App;
