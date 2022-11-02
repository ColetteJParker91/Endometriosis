import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import Symptoms from "./components/symptoms/Symptoms";

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Symptoms />
      {/*<Treatment />
      <Surgery />
      <Pain />
      <Specialist />
      <Info />
      <Research />
      <Support />
      <Footer />  */}
    </>
  );
};

export default App;
