import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Route, Router } from "preact-router";
import {
  RootEnvironment,
  RootEnvironmentProvider,
} from "@oracle/oraclejet-preact/UNSAFE_Environment";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    // Todo: determine the user's preferred locale.
    // For now, we are hard coding this
    const locale = "en";

    const loadTranslations = async () => {
      const bundle = await import(
        `@oracle/oraclejet-preact/resources/nls/${locale}/bundle`
      );
      setTranslations(bundle.default);
    };

    loadTranslations();
  }, []);

  if (translations) {
    const env: Partial<RootEnvironment> = {
      translations: { "@oracle/oraclejet-preact": translations },
    };

    return (
      <RootEnvironmentProvider environment={env}>
        <div id="app">
          <Header />
          <main>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/profile/" component={Profile} user="me" />
              <Route path="/profile/:user" component={Profile} />
            </Router>
          </main>
        </div>
      </RootEnvironmentProvider>
    );
  }
  return null;
};

export default App;
