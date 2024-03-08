import styled from "styled-components";
import MovieCard from "../src/components/MovieCard";
import Chip from "../src/components/Chip";
import { Container, Heading1, Button } from "../src/styles/Global";
import action from "../src/assets/Images/action.png";
import drama from "../src/assets/Images/drama.png";
import romance from "../src/assets/Images/romance.png";
import thriller from "../src/assets/Images/thriller.png";
import western from "../src/assets/Images/western.png";
import horror from "../src/assets/Images/horror.png";
import fantasy from "../src/assets/Images/fantasy.png";
import music from "../src/assets/Images/music.png";
import fiction from "../src/assets/Images/fiction.png";
import warningLogo from "../src/assets/Images/warningLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img src={action} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img src={drama} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Romance",
    color: "#148A08",
    image: <img src={romance} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img src={thriller} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img src={western} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img src={horror} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img src={fantasy} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img src={music} style={{ height: "120px", width: "100%" }} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img src={fiction} style={{ height: "120px", width: "100%" }} />,
  },
];

const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  height: 100vh;
  padding: 6rem 6.5rem;
`;
const ChipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 3rem;
`;

const MoviesHeading = styled.h1`
  font-size: 4.25rem;
  padding-bottom: 3rem;
`;

const TagHeading = styled(Heading1)`
  padding-bottom: 3rem;
`;

const MoviePageContent = styled.div`
  width: 45%;
`;
const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px;
  width: 55%;
  @media only screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const Warning = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
  font-size: 26px;
  color: red;
`;

const MovieContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 9rem;
  max-width: 1540px;
`;

styled(Button)``;

const Movies = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () =>{
    if(selected.length < 3){
      return
    } else {
      localStorage.setItem("MoviesGenre", JSON.stringify(selected))
      navigate('/display')
    }
  }
  return (
    <MoviesWrapper>
      <MovieContainer>
        <MoviePageContent>
          <TagHeading>Super app</TagHeading>
          <MoviesHeading>Choose your entertainment category</MoviesHeading>
          <ChipWrapper>
            {selected.map((item) => {
              return <Chip key={item} data={item} setSelected={setSelected} />;
            })}
          </ChipWrapper>
          {selected.length < 3 ? (
            <Warning>
              <img src={warningLogo} alt="warning logo" /> Minimum 3 category
              required
            </Warning>
          ) : (
            <></>
          )}
        </MoviePageContent>
        <CategoryGrid>
          {genres.map((item) => {
            return (
              <MovieCard
                key={item.id}
                data={item}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </CategoryGrid>
      </MovieContainer>
      <MovieContainer>
        <Button style={{marginLeft: "auto"}} onClick={handleClick} >Next page</Button>
      </MovieContainer>
    </MoviesWrapper>
  );
};

export default Movies;
