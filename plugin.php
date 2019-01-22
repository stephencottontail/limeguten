<?php
	/**
	 * Plugin Name: LimeGuten
	 * Description: Some Gutenberg stuff
	 * Author: Stephen Dickinson <stephencottontail@me.com>
	 * Author URI: https://stephencottontail.com
	 * Version: 1.0.0
	 * License: GPL-2.0
	 */

	add_action( 'init', function() {
		wp_register_script( 'limeguten-blocks', plugins_url( 'dist/blocks.js', __FILE__ ), array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-editor' ) );
		wp_register_style( 'limeguten-block-style', plugins_url( 'dist/block.css', __FILE__ ), array( 'wp-blocks' ) );
		wp_register_style( 'limeguten-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), array( 'wp-edit-blocks' ) );

		register_block_type( 'limeguten/hello-world', array(
			'editor_script' => 'limeguten-blocks'
		) );
	} );
