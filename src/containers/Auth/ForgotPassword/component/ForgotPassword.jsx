import React from 'react';
// import PropTypes from 'prop-types';
import Headling from '../../../../components/Heading/Heading';
import InputText from '../../../../components/InputText';
import '../../../Auth/auth.sass';
import Button from '../../../../components/Button/Button';

const ForgotPassword = (props) => {
	return (
		<div className='auth'>
			<Headling title>Forgot password</Headling>
			<form action='' className='form__forgot'>
				<div className='auth__body'>
					<p className='descriptiveItems'>
						Please, enter your email address. You will receive a link to create a new password via email.
					</p>
					<InputText error='Not a valid email address. Should be your@email.com' className='auth__input' label='Email' />

					<div className='auth__btn auth__btn-forgot'>
						<Button >SEND</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

ForgotPassword.propTypes = {};

export default ForgotPassword;
