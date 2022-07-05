import { useState, useEffect } from "react";
import Table from "../Components/Parts/Table";
function AllDjs() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDjs, setLoadedDjs] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://warm-dawn-39200.herokuapp.com/api/djs")
      .then((response) => response.json())
      .then((data) => {
        const djs = [];
        for (const key in data) {
          const dj = {
            ...data[key],
          };
          djs.push(dj);
        }
        setIsLoading(false);
        setLoadedDjs(djs);
        console.log(djs);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p className="display-4 text-success text-center">Loading...</p>
      </section>
    );
  }
  return <Table djs={loadedDjs}></Table>;
}
export default AllDjs;
