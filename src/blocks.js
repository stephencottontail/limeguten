import './block.scss';
import './editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import * as button from './blocks/button.js';
import * as sixtyForty from './blocks/sixty-forty.js';

const blocks = [
	button,
	sixtyForty
];

blocks.forEach( ( block ) => {
	const { name, settings } = block;

	registerBlockType( name, settings );
} );
