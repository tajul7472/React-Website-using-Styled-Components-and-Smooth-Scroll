import React from 'react'
import { Container,Form,Icon,FormH1,Text, FormButton, FormContent, FormInput, FormLevel, FromWrap } from './SignInPageElements'

const SignInPage = () => {
    return (
        <Container>
            <FromWrap>
                <Icon to ='/'>Rakib</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLevel htmlFor="for">Email</FormLevel>
                        <FormInput type="email" required/>
                        <FormLevel htmlFor="for">Password</FormLevel>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot Password</Text>


                    </Form>
                </FormContent>
            </FromWrap>
        </Container>
    )
}

export default SignInPage
