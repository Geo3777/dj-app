import { useHistory } from "react-router-dom";
function TableRow(props) {
  const history = useHistory();
  function navigateToSongs() {
    history.push("/single-dj", {
      name: props.name,
      id: props.id,
      description: props.description,
    });
  }
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>
        <button className="btn btn-dark" onClick={navigateToSongs}>
          See More
        </button>
      </td>
    </tr>
  );
}
export default TableRow;
