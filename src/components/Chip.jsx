/* eslint-disable react/prop-types */
import styled from "styled-components";

const ChipBox = styled.div`
  padding: 14px 26px;
  border-radius: 60px;
  background-color: #148a08;
  margin: 10px;
  min-width: 110px;
`;

const CloseBtn = styled.span`
  cursor: pointer;
`;

function Chip({ data, setSelected }) {
  const handleClick = () =>{
          setSelected((prev)=> prev.filter((item) => item !== data))
  }
  return (
    <ChipBox>
      {data} &nbsp; &nbsp;
      <CloseBtn style={{ color: "#085C00" }} onClick={handleClick}>X</CloseBtn>
    </ChipBox>
  );
}

export default Chip;
