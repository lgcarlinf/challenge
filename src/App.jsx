import "./App.css";
import { AppStyled } from "./styles";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { ListDogs } from "./Views/ListDogs/ListDogs";
import { DogInfo } from "./Views/DogInfo/DogInfo";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":letter" element={<ListDogs />} />
          <Route path="dog/:dog" element={<DogInfo />} />
        </Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
