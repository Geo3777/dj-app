import { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
function Song(props) {
  const location = useLocation();
  const history = useHistory();
  const id = location.state.id;
  const nameInputRef = useRef();
  const coverInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCover = coverInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const songData = {
      name: enteredName,
      cover_url: enteredCover,
      description: enteredDescription,
      author_id: props.author_id,
    };
    fetch(
      `https://warm-dawn-39200.herokuapp.com/api/djs/${props.author_id}/tracks/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(songData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  function deleteHandler() {
    fetch(
      `https://warm-dawn-39200.herokuapp.com/api/djs/${props.author_id}/tracks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
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
              src={location.state.cover_url}
              className="card-img-top"
              alt={location.state.id}
            />
            <div className="card-body">
              <h5 className="card-title">
                {location.state.name} ID:{location.state.id}
              </h5>
              <p className="card-text">{location.state.description}</p>
              <div className="d-grid gap-2">
                <button
                  class="btn btn-dark mt-2"
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
                      required
                      ref={nameInputRef}
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
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-dark mt-2"
                      type="button"
                      onClick={submitHandler}
                    >
                      Edit Song
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
