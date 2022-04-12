import {registerBlockType} from "@wordpress/blocks";

registerBlockType('wp-sso-firebase/login', {
    edit: function () {
        return <p> Hello world (from the editor)</p>;
    },
    save: function () {
        return <p> Hola mundo (from the frontend) </p>;
    },
});