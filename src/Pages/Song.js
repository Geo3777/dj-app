import { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
function Song() {
  const params = useParams();
  const history = useHistory();
  const djId = params.djId;
  const songId = params.songId;
  const nameInputRef = useRef();
  const coverInputRef = useRef();
  const descriptionInputRef = useRef();
  const [loadedSong, setloadedSong] = useState({});
  console.log(djId);
  console.log(songId);
  const req = `https://warm-dawn-39200.herokuapp.com/api/djs/${djId}/tracks/${songId}`;
  console.log(req);
  useEffect(() => {
    fetch(
      `https://warm-dawn-39200.herokuapp.com/api/djs/${djId}/tracks/${songId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const songDetails = data;
        console.log(songDetails);
        setloadedSong(songDetails);
      });
  }, [songId]);

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredCover = coverInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const songData = {
      name: enteredName,
      cover_url: enteredCover,
      description: enteredDescription,
      author_id: djId,
    };

    fetch(
      `https://warm-dawn-39200.herokuapp.com/api/djs/${djId}/tracks/${songId}`,
      {
        method: "PUT",
        body: JSON.stringify(songData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace(`/djs/${djId}`);
    });
  }
  function deleteHandler() {
    fetch(
      `https://warm-dawn-39200.herokuapp.com/api/djs/${djId}/tracks/${songId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace(`/djs/${djId}`);
    });
  }
  return (
    <div>
      <p className="display-6 text-success text-center mt-3">
        Work on this Song
      </p>
      <div className="card-group mb-5 d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 ">
          <div className="card  bg-success">
            <img
              src={loadedSong.cover_url}
              className="card-img-top"
              alt={loadedSong.id}
            />
            <div className="card-body">
              <h5 className="card-title">
                {loadedSong.name} ID:{loadedSong.id}
              </h5>
              <p className="card-text">{loadedSong.description}</p>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark mt-2"
                  type="button"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 ">
          <div className="card bg-success">
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Edit Song</h5>
              <div className="card-text">
                <form className="text-dark lead ">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="2"
                      ref={nameInputRef}
                      defaultValue={loadedSong.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Cover URL</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="3"
                      required
                      ref={coverInputRef}
                      defaultValue={loadedSong.cover_url}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      type="text"
                      className="form-control bg-dark text-light"
                      id="4"
                      rows="3"
                      required
                      ref={descriptionInputRef}
                      defaultValue={loadedSong.description}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-dark mt-2"
                      type="button"
                      onClick={submitHandler}
                    >
                      Don't Press! Grave Consequences ahead! Aplication unusable
                      for at least 30 mins!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Song;
