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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const {google, facebook} = attributes;

	const facebookHandler = (facebook) => {
		setAttributes({facebook});
	}

	const googleHandler = (google) => {
		setAttributes({google});
	}

	return (
		<div {...useBlockProps()}>
			<Providers facebook={facebook}
					   google={google}
					   onChangeFacebook={facebookHandler}
					   onChangeGoogle={googleHandler}/>
			{attributes.google && <ProviderGoogle/>}
			{attributes.facebook && <ProviderFacebook/>}
			<p>

				{__(`Block – hello from the editor! ${attributes.google} hi!!`, 'block')}
			</p>
		</div>

	);
}
