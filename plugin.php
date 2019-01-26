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
		/**
		 * Despite what some sources may say, it's no longer necessary to have
		 * any dependencies for the block style, and from my testing, it may
		 * actually prevent the block style from loading properly.
		 */
		wp_register_style( 'limeguten-block-style', plugins_url( 'dist/block.css', __FILE__ ) );
		wp_register_style( 'limeguten-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), array( 'wp-edit-blocks' ) );

		register_block_type( 'limeguten/button', array(
			'editor_script' => 'limeguten-blocks',
			'editor_style'  => 'limeguten-editor-style',
			'style'         => 'limeguten-block-style'
		) );

		register_block_type( 'limeguten/sixty-forty', array(
			'editor_script' => 'limeguten-blocks',
			'editor_style'  => 'limeguten-editor-style',
			'style'         => 'limeguten-block-style'
		) );
	} );

	/**
 	 * Create new category for LimeCuda blocks
 	 *
 	 * It is possible to use an SVG icon, but it's recommended to use the
 	 * SVG React element like you would do for a block. See the link for
 	 * more information.
 	 *
 	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
	 */
	add_filter( 'block_categories', function( $categories, $post ) {
		return array_merge( $categories, array( array(
			'slug'  => 'limecuda',
			'title' => 'LimeCuda Blocks',
			'icon'  => 'edit'
		) ) );
	}, 10, 2 );
