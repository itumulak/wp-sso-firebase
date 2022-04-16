import {CheckboxControl} from "@wordpress/components";
import {useState} from "@wordpress/element";

const Providers = () => {
	const [isFacebookChecked, setFacebookChecked] = useState(true);
	const [isGoogleChecked, setGoogleCheck] = useState(true);

	return (
		<>
			<CheckboxControl label='Facebook' checked={isFacebookChecked} onChange={setFacebookChecked}/>
			<CheckboxControl label='Google' checked={isGoogleChecked} onChange={setGoogleCheck}/>
		</>
	)
}

export default Providers;



