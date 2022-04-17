<?php
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets, so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
namespace IT\SSO\Firebase {
	function create_block_init() {
		register_block_type( __DIR__ . '/build' );
	}
	add_action( 'init', __NAMESPACE__ . '\\create_block_init' );
}
