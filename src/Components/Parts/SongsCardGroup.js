import SongCard from "./SongCard";
function SongsCardGroup(props) {
  return (
    <div className="card-group mb-5 d-flex justify-content-center">
      {props.songs.map((song) => (
        <SongCard
          key={song.id}
          id={song.id}
          name={song.name}
          description={song.description}
          cover_url={song.cover_url}
          author_id={props.author_id}
        ></SongCard>
      ))}
    </div>
  );
}
export default SongsCardGroup;
