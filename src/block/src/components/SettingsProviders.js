import {CheckboxControl, Panel, PanelBody} from "@wordpress/components";
import {useState} from "@wordpress/element";
import {InspectorControls} from "@wordpress/block-editor";

const Providers = () => {
	const [isFacebookChecked, setFacebookChecked] = useState(true);
	const [isGoogleChecked, setGoogleCheck] = useState(true);

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<Panel>
						<CheckboxControl label='Facebook' checked={isFacebookChecked} onChange={setFacebookChecked}/>
						<CheckboxControl label='Google' checked={isGoogleChecked} onChange={setGoogleCheck}/>
					</Panel>
				</PanelBody>
			</InspectorControls>
		</>
	)
}

export default Providers;



