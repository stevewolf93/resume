import "./App.css";
import Header from "./components/1-header";
import Main from "./components/2-main";
import Footer from "./components/3-footer";
function App() {
  return (
    <div className="App">
      {/* header with nav */}
      <Header />
      {/* main content */}
      <Main />
      {/* footer with linkedin / github  */}
      <Footer />
    </div>
  );
}

export default App;
