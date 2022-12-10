import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home.screen";
import RankScreen from "./screens/rank.screen";

const App = () => {
  return (
    <>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />} />
              <Route path="/rank" element={<RankScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
