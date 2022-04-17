import { useState, useEffect } from "react";
import axios from "axios";
import { Flatcard } from "../Flats/FlatCard";

export const Home = () => {
  const [flat, setFlat] = useState([]);

  useEffect(() => getFlat(), []);
  async function getFlat() {
    await axios.get("http://localhost:8080/flats").then((res) => {
      console.log(res);
      setFlat([...res.data]);
    });
  }

  const sortByAsc = (a, b) => {
    if (+a.No > +b.No) return -1;
    else if (+a.No < +b.No) return 1;
    return 0;
  };

  const sortByDsc = (a, b) => {
    if (+a.No > +b.No) return 1;
    else if (+a.No < +b.No) return -1;
    return 0;
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => sortByAsc()}>SortFlatByAsc</button>
      <button onClick={() => sortByDsc()}>SortFlatByDsc</button>
      <div>
        {flat.map((e) => (
          <Flatcard
            key={e.id}
            id={e.id}
            flat_name={e.flat_name}
            flatType={e.flatType}
            block={e.block}
            imageUrl={e.imageUrl}
          ></Flatcard>
        ))}
      </div>
    </>
  );
};
