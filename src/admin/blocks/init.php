<?php
namespace IT\SSO\Firebase {
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	} // Exit if accessed directly

	function block_init() {
		register_block_type( __DIR__ );
	}

	add_action( 'init', __NAMESPACE__ . '\\block_init' );
}
