import {CheckboxControl, Panel, PanelBody} from "@wordpress/components";
import {InspectorControls} from "@wordpress/block-editor";

const Providers = (props) => {
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<Panel>
						<CheckboxControl label='Facebook' checked={props.facebook} onChange={props.onChangeFacebook}/>
						<CheckboxControl label='Google' checked={props.google} onChange={props.onChangeGoogle}/>
					</Panel>
				</PanelBody>
			</InspectorControls>
		</>
	)
}

export default Providers;



