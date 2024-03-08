import styled from "styled-components";


const DateAndTime = styled.div`
    background-color: #FF4ADE;
    padding: 12px;
    height: 55px;
`

const WeatherWrapper = styled.div`
    background-color: #101744;
    border-radius: 30px;
    overflow: hidden;
    height: 100%;
`
const TempratureWrapper = styled.div`
    padding: 36px;
`

function Wheatherinfo() {
    return ( 
        <WeatherWrapper>
            <DateAndTime>time</DateAndTime>
            <TempratureWrapper>temp</TempratureWrapper>
        </WeatherWrapper>
     );
}

export default Wheatherinfo;