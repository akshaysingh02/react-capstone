import styled from "styled-components";
import { Heading1, Para, Input, Button } from "../styles/Global";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const H1 = styled(Heading1)`
  text-align: center;
`;
const ParaForm = styled(Para)`
  text-align: center;
  padding-bottom: 2rem;
`;
const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 4rem;
  max-width: 600px;
  margin: auto auto;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
`;

const SubmitButton = styled(Button)`
  background-color: #72db73;
  text-transform: uppercase;
  padding: 0.875rem 2.25rem;
  width: 100%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  label {
    color: #7c7c7c;
  }
  padding-bottom: 1.5rem;
`;
const LegalPara = styled(Para)`
  color: #7c7c7c;
  font-size: 1.125rem;
`;

const GreenLink = styled.a`
  color: #72db73;
`;

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const navigate = useNavigate()
  const handleSignUp = () =>{
    let isErrors = false

    if(formValues.name.trim().length === 0){
        setErrors((prev)=>({...prev, name: "Name is required"}))
        isErrors = true
    }
    else{
      setErrors((prev)=>({...prev, name: null}))
    }
    if(formValues.username.trim().length === 0){
      setErrors((prev)=>({...prev, username: "Username is required"}))
      isErrors = true
    }
    else{
      setErrors((prev)=>({...prev, username: null}))
    }
    if(formValues.email.trim().length === 0){
      setErrors((prev)=>({...prev, email: "Email is required"}))
      isErrors = true
    }
    else{
      setErrors((prev)=>({...prev, email: null}))
    }
    if(formValues.mobile.trim().length === 0){
      setErrors((prev)=>({...prev, mobile: "Email is required"}))
      isErrors = true
    }
    else{
      setErrors((prev)=>({...prev, mobile: null}))
    }
    if(formValues.checkbox === false){
      setErrors((prev)=>({...prev,checkbox: "Please accept terms and conditions"}))
      isErrors = true
    }
    else{
      setErrors((prev)=>({...prev, checkbox: null}))
    }
    if(!isErrors) {
      navigate("/movies")
    }
  }

  return (
    <FormWrapper>
      <H1>Super app</H1>
      <ParaForm>Create your new account</ParaForm>

      <Form>
        <Input
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
          name="name"
        />
        {errors.name ? <p style={{color: 'red', marginTop: "-10px"}}>{errors.name}</p> : <></>}
        <Input
          type="text"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
          name="username"
        />
        {errors.username ? <p style={{color: 'red', marginTop: "-10px"}}>{errors.username}</p> : <></>}
        <Input
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          name="email"
        />
        {errors.email ? <p style={{color: 'red', marginTop: "-10px"}}>{errors.email}</p> : <></>}
        <Input
          type="text"
          placeholder="Mobile"
          value={formValues.mobile}
          onChange={handleChange}
          name="mobile"
        />
        {errors.mobile ? <p style={{color: 'red', marginTop: "-10px"}}>{errors.mobile}</p> : <></>}
        <CheckboxWrapper>
          <input
            type="checkbox"
            id="checkbox"
            value={formValues.checkbox}
            onChange={handleChange}
            name="checkbox"
          />
          <label htmlFor="checkbox">
            Share my registration data with Superapp
          </label>
        </CheckboxWrapper>
          {errors.checkbox ? <p style={{color: 'red', marginTop: "-30px", marginBottom: "20px"}}>{errors.checkbox}</p> : <></>}
        <SubmitButton onClick={handleSignUp}>sign up</SubmitButton>
        <LegalPara>
          By clicking on Sign up. you agree to Superapp{" "}
          <GreenLink>Terms and Conditions of Use</GreenLink>
        </LegalPara>
        <LegalPara>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <GreenLink>Privacy Policy</GreenLink>{" "}
        </LegalPara>
      </Form>
    </FormWrapper>
  );
};

export default RegisterForm;
