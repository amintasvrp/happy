import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<OrphanagesMap />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
