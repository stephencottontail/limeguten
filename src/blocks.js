import './block.scss';
import './editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import * as button from './blocks/button.js';
import * as sixty_forty from './blocks/sixty-forty.js';

const blocks = [
	button,
	sixty_forty
];

blocks.forEach( ( block ) => {
	const { name, settings } = block;

	registerBlockType( name, settings );
} );
