import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./app.scss";
import Keys from "../keys/Keys";
import Keybar from "../keybar/Keybar";
import Levels from "../levels/Levels";
import Bg from "../bg/Bg";

function App() {
  return (
    <div className="App">
      <Header />
      <Levels />
      <Keys />
      <Keybar />
      <Footer />
    </div>
  );
}

export default App;
