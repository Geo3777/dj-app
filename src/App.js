import { Route, Switch } from "react-router-dom";
import AllDjs from "./Pages/AllDjs";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import SingleDj from "./Pages/SingleDj";
import AddSong from "./Pages/AddSong";
import Song from "./Pages/Song";
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact={true}>
          <AllDjs></AllDjs>
        </Route>
        <Route path="/single-dj">
          <SingleDj></SingleDj>
        </Route>
        <Route path="/add-song">
          <AddSong></AddSong>
        </Route>
        <Route path="/song">
          <Song></Song>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
