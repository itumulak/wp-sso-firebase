/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import Providers from "./components/SettingsProviders";
import ProviderGoogle from "./components/ProviderGoogle";
import ProviderFacebook from "./components/ProviderFacebook";
import ProviderUserForm from "./components/ProviderUserForm";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const {google, facebook, user_login} = attributes;

	const facebookHandler = (facebook) => {
		setAttributes({facebook});
	}

	const googleHandler = (google) => {
		setAttributes({google});
	}

	const userLoginHandler = (user_login) => {
		setAttributes({user_login});
	}

	return (
		<div {...useBlockProps()}>
			<Providers facebook={facebook}
					   google={google}
					   user_login={user_login}
					   onChangeFacebook={facebookHandler}
					   onChangeGoogle={googleHandler}
					   onChangeUserLogin={userLoginHandler}/>
			{google && <ProviderGoogle/>}
			{facebook && <ProviderFacebook/>}
			{user_login && <ProviderUserForm/>}
		</div>

	);
}
