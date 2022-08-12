import "./App.css";
import Comments from "./components/Comments";
import Comments2 from "./components/Comments2";
import Comments3 from "./components/Comments3";
import Content from "./components/Content";
import Header from "./components/Header";
import Main from "./components/Main";
import Point from "./components/Point";
import ButtonDetail from "./components/ButtonDetail";

function App() {
  return (
    <div className="App  mt-4  ">
      <Header />
      <Content />
      <Main />
      <Point />
      <Comments />
      <Comments2 />
      <Comments3 />
      <ButtonDetail />
    </div>
  );
}

export default App;
