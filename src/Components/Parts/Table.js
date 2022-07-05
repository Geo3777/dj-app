import TableRow from "./TableRow";
function Table(props) {
  return (
    <div className="d-flex justify-content-center my-4 mb-5">
      <table className="table table-hover bg-success w-75">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.djs.map((dj) => (
            <TableRow
              key={dj.id}
              id={dj.id}
              name={dj.name}
              description={dj.description}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
