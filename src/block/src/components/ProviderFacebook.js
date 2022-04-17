import classes from "./Base.module.scss";
import facebookClass from "./ProviderFacebook.module.scss";
import svg from "../../../../assets/facebook-logo-invert.svg";

const ProviderFacebook = () => {
	return (
		<p className={classes['btn-wrapper']}>
			<button className={`${classes.btn} ${facebookClass['btn-facebook']} btn-lg btn-block text-uppercase`}>
				<img src={svg} height='28'/> Log in with Facebook
			</button>
		</p>
	);
};

export default ProviderFacebook;
