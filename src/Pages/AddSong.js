import { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
function AddSong() {
  const location = useLocation();
  const history = useHistory();
  const authorId = location.state.id;
  console.log(authorId);
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const coverInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredId = idInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredCover = coverInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const songData = {
      id: parseInt(enteredId),
      name: enteredName,
      cover_url: enteredCover,
      description: enteredDescription,
      author_id: authorId,
    };
    fetch(`https://warm-dawn-39200.herokuapp.com/api/djs/${authorId}/tracks`, {
      method: "POST",
      body: JSON.stringify(songData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
      console.log(songData);
    });
  }
  return (
    <div className="">
      <p className="display-5 text-success text-center">ADD A SONG</p>
      <div className="d-flex align-items-center justify-content-center">
        <form className="text-success lead w-25">
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="1"
              required
              ref={idInputRef}
            />
          </div>
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
              className="btn btn-success mt-2 text-dark mb-5"
              type="button"
              onClick={submitHandler}
            >
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddSong;
