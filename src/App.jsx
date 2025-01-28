import "./index.css";
import * as React from "react";
import { IntlProvider } from "react-intl";
import Navbar from "./components/Navbar";
("");
import messages_en from "./translations/en.json";
import messages_fr from "./translations/fr.json";

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
    </IntlProvider>
  );
}

export default App;
