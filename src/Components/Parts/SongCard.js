import { useHistory } from "react-router-dom";
function SongCard(props) {
  const history = useHistory();
  function toSong() {
    history.push("/song", {
      name: props.name,
      id: props.id,
      description: props.description,
      cover_url: props.cover_url,
      author_id: props.author_id,
    });
  }
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-3 ">
      <div className="card w-100 h-100 bg-success">
        <img src={props.cover_url} className="card-img-top" alt={props.id} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="d-grid gap-2">
            <button class="btn btn-dark" type="button" onClick={toSong}>
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SongCard;
