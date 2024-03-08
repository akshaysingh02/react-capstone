import styled from "styled-components";
import UserInfo from "../src/components/UserInfo";
import { Container } from "../src/styles/Global";
import Wheatherinfo from "../src/components/Wheatherinfo";
import Timer from "../src/components/Timer";
import Notes from "../src/components/Notes";

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.75fr 1fr 1fr;
  gap: 50px 50px;
  grid-template-areas: 
    "user notes"
    "weather notes"
    "timer timer";
`;

const BlogWrapper = styled.div`
    background-color: white;
    flex-grow: 1;
    border-radius: 20px;
    overflow: hidden;
`;

const UserInfoWrapper = styled.div`
    grid-area: user;
`;

const WeatherInfoWrapper = styled.div`
    grid-area: weather;
`;

const TimerWrapper = styled.div`
    background-color: #1E2343;
    border-radius: 20px;
    grid-area: timer;
`;

const NotesWrapper = styled.div`
    background-color: #F1C75B;
    border-radius: 20px;
    grid-area: notes;
`;

const DisplayContainer = styled(Container)`
    display: flex;
    gap: 50px;
    max-width: 1660px;
    padding:100px 60px;
`

const Display = () => {
  return (
    <DisplayContainer>
      <DisplayGrid>
        <UserInfoWrapper>
          <UserInfo />
        </UserInfoWrapper>
        <WeatherInfoWrapper>
          <Wheatherinfo />
        </WeatherInfoWrapper>
        <TimerWrapper>
          <Timer />
        </TimerWrapper>
        <NotesWrapper>
          <Notes />
        </NotesWrapper>
      </DisplayGrid>
      <BlogWrapper>Blog</BlogWrapper>
    </DisplayContainer>
  );
};

export default Display;
