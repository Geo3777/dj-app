import { useRef } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
function AddSong() {
  const history = useHistory();
  const params = useParams();
  const authorId = params.djId;
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
      author_id: authorId,
    };
    fetch(`https://warm-dawn-39200.herokuapp.com/api/djs/${authorId}/tracks`, {
      method: "POST",
      body: JSON.stringify(songData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace(`/djs/${authorId}`);
    });
  }
  return (
    <div className="">
      <p className="display-5 text-success text-center">ADD A SONG</p>
      <div className="d-flex align-items-center justify-content-center">
        <form className="text-success lead w-25">
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
