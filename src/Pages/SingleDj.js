import SongsCardGroup from "../Components/Parts/SongsCardGroup";
import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
function SingleDJ() {
  const location = useLocation();
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [loadedSongs, setloadedSongs] = useState([]);
  const name = location.state.name;
  const id = location.state.id;
  const description = location.state.description;
  function toAddSong() {
    history.push("/add-song", { id: id });
  }
  useEffect(() => {
    fetch(`https://warm-dawn-39200.herokuapp.com/api/djs/${id}/tracks`)
      .then((response) => response.json())
      .then((data) => {
        const songs = [];
        for (const key in data) {
          const song = {
            ...data[key],
          };
          songs.push(song);
        }
        setloadedSongs(songs);
        console.log(songs);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  if (isError)
    return (
      <section>
        <p className="display-3 text-success text-center">
          Server doesn't like you! You better call someone else to refresh this
          page for you.
        </p>
      </section>
    );
  return (
    <div>
      <div className="mx-3 px-3 border border-success mt-3">
        <p className="display-6 text-success">
          {name} ID:{id}
        </p>
        <p className="lead text-success">Description: {description}</p>
        <div className="d-grid gap-2">
          <button
            className="btn btn-success mb-2 text-dark"
            type="button"
            onClick={toAddSong}
          >
            Add Song
          </button>
        </div>
      </div>
      <div className="row align-items-center justify-content-center mb-4">
        <SongsCardGroup songs={loadedSongs} author_id={id}></SongsCardGroup>
      </div>
    </div>
  );
}
export default SingleDJ;
