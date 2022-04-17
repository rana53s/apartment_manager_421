import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const FlatDetails = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState({
    flat_name: "",
    flatType: "",
    block: "",
    imageUrl: "",
    id: 0,
  });

  useEffect(() => fetchData(), [id]);

  async function fetchData() {
    await axios.get(`http://localhost:8080/flats/${id}`).then((res) => {
      setFlat(res.data);
    });
  }

  return (
    <>
      <div className="flatContainer">
        <h2 className="title">{flat.flat_name}</h2>
        <h3 className="flatType">{flat.flatType}</h3>
        <h3 className="block">{flat.block}</h3>
        <img className="image" src={flat.imageUrl} alt="#" />
      </div>
    </>
  );
};
