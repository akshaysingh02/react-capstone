import styled from "styled-components";
import displayImage from "../assets/Images/displayImage.png"

const UserInfoWrapper = styled.div`
    background-color: #5746EA;
    padding: 2rem;
    border-radius: 35px;
    display: flex;
    gap: 2.5rem;
`
const ImageWrapper = styled.div`
    width: 109px;
    height: 270px;
    img{
        width: 100%;
        height: 100%;
    }
`

const GenerChip = styled.div`
    background-color: #9F94FF;
    padding: 16px 44px;
    max-width: 230px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 400;
`

const GenereGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 12px;
    margin-top: 1.5rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`

const Name = styled.p`
    font-size: 21px;
`
const Email = styled.p`
    font-size: 21px;
`
const UserName = styled.h2`
    font-size: 41px;
`
function UserInfo() {
    const userData = JSON.parse(localStorage.getItem("UserInfo"));
    const MovieGenres = JSON.parse(localStorage.getItem("MoviesGenre"));
    return ( 
        <UserInfoWrapper>
            <ImageWrapper><img src={displayImage} alt="user image" /></ImageWrapper>
            <Content>
                <Name>{userData.name}</Name>
                <Email>{userData.email}</Email>
                <UserName>{userData.username}</UserName>
                <GenereGrid>{MovieGenres.map((item)=>{
                    return <GenerChip key={item}>{item}</GenerChip>
                })}</GenereGrid>
            </Content>
        </UserInfoWrapper>
     );
}

export default UserInfo;