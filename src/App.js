import { Route, Switch, useHistory } from "react-router-dom";
import AllDjs from "./Pages/AllDjs";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import SingleDj from "./Pages/SingleDj";
import AddSong from "./Pages/AddSong";
import Song from "./Pages/Song";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/djs/:djId/song/:songId">
          <Song />
        </Route>
        <Route path="/djs/:djId/add-song">
          <AddSong />
        </Route>
        <Route path="/djs/:djId">
          <SingleDj />
        </Route>
        <Route path="/djs">
          <AllDjs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
