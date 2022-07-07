import { useHistory } from "react-router-dom";
function SongCard(props) {
  const history = useHistory();
  const djId = props.author_id;
  const songId = props.id;
  function toSong() {
    history.push(`/djs/${djId}/song/${songId}`, {
      key: props.id,
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
            <button className="btn btn-dark" type="button" onClick={toSong}>
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SongCard;
