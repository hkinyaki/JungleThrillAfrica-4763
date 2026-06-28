import { Route, Switch } from "wouter";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import JourneysPage from "./pages/journeys/index";
import JourneyDetailPage from "./pages/journeys/[slug]";
import DestinationsPage from "./pages/destinations/index";
import DestinationDetailPage from "./pages/destinations/[slug]";
import GuidesPage from "./pages/guides/index";
import GuideDetailPage from "./pages/guides/[slug]";
import ExpeditionsPage from "./pages/expeditions/index";
import PartnersPage from "./pages/partners";
import { Provider } from "./components/provider";
import ScrollToTop from "./components/scroll-to-top";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/journeys" component={JourneysPage} />
        <Route path="/journeys/:slug" component={JourneyDetailPage} />
        <Route path="/expeditions" component={ExpeditionsPage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/destinations" component={DestinationsPage} />
        <Route path="/destinations/:slug" component={DestinationDetailPage} />
        <Route path="/guides" component={GuidesPage} />
        <Route path="/guides/:slug" component={GuideDetailPage} />
      </Switch>
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
