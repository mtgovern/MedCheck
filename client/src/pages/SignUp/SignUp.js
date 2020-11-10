
import React, { useState } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';

function SignUp() {
  const [un, setemail] = useState('');
	const [pw, setpassword] = useState('');

	const onSubmitHandler = (err) => {
		err.preventDefault();
		createAccount();
	}

	const onInputChange = (error) => {
		const value = error.target.value;
		const name = error.target.name;
	
		switch (name)
		{
			case 'un':
				{
					setemail(value);
					break;
				}
			case 'pw':
				{
					setpassword(value);
					break;
				}
			default:
				{
					break;
				}
		}
	}

	function createAccount(){

		API.getLogin({
			email: un,
			password: pw
		})
		.then(results => {
			console.log(results);
			window.location.href="/login";
		})
		.catch(err => console.log(err));
	}

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>SIGN-UP</p>
      </div>
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
            <label>Email Address</label>
              <Input
                value={un}
                name='un'
                onChange={onInputChange}
                type='text'
                placeholder='enter your email address'
              />  
            <label>Password</label>
              <Input
                name='pw'
                placeholder='create a new password'
                value={pw}
                onChange={onInputChange}
                type='text'
              />
              <FormBtn className="btn btn-create" onClick={onSubmitHandler}>
                Create Account
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;