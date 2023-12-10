import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/details";
import Edit from "./pages/edit";
import Header from "./component/Header";
function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Create />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </section>
  );
}

export default App;
