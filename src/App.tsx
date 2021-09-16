import { lazy, Suspense } from "react";
import Container from "@material-ui/core/Container";

const ExpertsList = lazy(() => import("./features/experts/List"));

function App() {
  return (
    <Container maxWidth="xl">
      <Suspense fallback={<h6>Oops</h6>}>
        <ExpertsList />
      </Suspense>
    </Container>
  );
}

export default App;
