import RegisterForm from '../src/components/RegisterForm';
import heroImage from '../src/assets/Images/hero.png'
import styled from 'styled-components';

const PageWrapper = styled.section`
    display: flex;
    flex-direction: row;
`

const ImageWrapper = styled.div`
    height: 100vh;
    width: 50%;
    background-image: url(${heroImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 4rem 4rem;
`
const FormWrapper = styled.div`
    width: 50%;
`

const Heading = styled.h1`
    font-size: 3.3rem;
    color: white;
    line-height: 120%;
`



const Register = () => {
    return (
        <PageWrapper>
            <ImageWrapper>
                <Heading>Discover new things on Superapp</Heading>
            </ImageWrapper>
            <FormWrapper>
                <RegisterForm />
            </FormWrapper>
        </PageWrapper>
    );
}

export default Register;
