import { lazy, Suspense } from "react";
import Container from "@material-ui/core/Container";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ExpertsList = lazy(() => import("./features/experts/List"));
const ExpertProfile = lazy(() => import("./features/experts/profile"));

function App() {
  return (
    <Router>
      <Container maxWidth="xl" disableGutters>
        <Suspense fallback={<h6>Oops</h6>}>
          <Switch>
            <Route exact path="/profile/:id">
              <ExpertProfile />
            </Route>
            <Route path="/">
              <ExpertsList />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
