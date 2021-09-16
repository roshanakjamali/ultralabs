import { lazy, Suspense } from "react";
import Container from "@material-ui/core/Container";

const ExpertsList = lazy(() => import("./features/experts/List"));
const ExpertProfile = lazy(() => import("./features/experts/profile"));

function App() {
  return (
    <Container maxWidth="xl">
      <Suspense fallback={<h6>Oops</h6>}>
        {/* <ExpertsList /> */}
        <ExpertProfile />
      </Suspense>
    </Container>
  );
}

export default App;
