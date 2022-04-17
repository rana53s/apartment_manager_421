import { Link } from "react-router-dom";
import styled from "styled-components";

export const Flatcard = ({ id, flat_name, flatType, block, imageUrl }) => {

  const StyleLink = styled(Link)`
    color: teal;
    border: 1px solid black;
    text-align: center;
    margin-top: 10px;
    width: 300px;
  `;

  return (
    <StyleLink to={`/flatdetailspage/${id}`}>
      <div className="flatCard">
        <img src={imageUrl} style={{ width: "250px" }} alt="#" />
        <h2 className="flat_name">{flat_name}</h2>
        <h3 className="flatType">{flatType}</h3>
        <h3 className="block">{block}</h3>
      </div>
    </StyleLink>
  );
};
