import { useHistory } from "react-router-dom";
function TableRow(props) {
  const history = useHistory();
  function navigateToSongs() {
    const djId = props.id;
    history.push(`/djs/${djId}`);
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
