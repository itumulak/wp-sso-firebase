import classes from "./ProviderGoogle.module.css";
import svg from "../../../../assets/google-logo.svg";

const ProviderGoogle = () => {
	return (
		<p className={classes['btn-wrapper']}>
			<button className={`${classes.btn} btn-lg btn-block text-uppercase`}>
				<img src={svg} height='18'/> Sign in with Google
			</button>
		</p>
	);
};

export default ProviderGoogle;
