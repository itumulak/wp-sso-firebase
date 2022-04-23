import classes from "./ProviderUserForm.module.scss";

const ProviderUserForm = () => {
	return (
		<div className={classes.login}>
			<form>
				<p>
					<label htmlFor='user_login'>Username or Email Address</label>
					<input id='user_login' type="text"/>
				</p>
				<p>
					<label htmlFor="user_pass">Password</label>
					<input id='user_pass' type="password"/>
				</p>
				<div className={classes['space-between']}>
					<p>
						<input id='forgetmenot' type="checkbox" value='forever'/>
						<label htmlFor="forgetmenot">Remember Me</label>
					</p>
					<p>
						<input type="submit" value='Log In' />
					</p>
				</div>
			</form>
		</div>
	);
};

export default ProviderUserForm;
