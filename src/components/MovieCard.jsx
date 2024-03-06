/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  padding: 30px 26px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  h5 {
    font-size: 36px;
    font-weight: 400;
  }
  img {
    width: 100%;
    box-shadow: none;
  }
`;

function MovieCard({ data, selected, setSelected }) {
  const isSelected = selected.includes(data.id);
  const handleClick = () => {
    if (selected.includes(data.id)) {
      setSelected((prev)=> prev.filter((item) => item !== data.id))
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };

  return (
    <Card
      style={{
        background: data.color,
        border: isSelected ? "6px solid #11B800" : "6px solid transparent",
      }}
      onClick={handleClick}
    >
      <h5>{data.id}</h5>
      {data.image}
    </Card>
  );
}

export default MovieCard;
