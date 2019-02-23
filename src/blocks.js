import './block.scss';
import './editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import * as button from './blocks/button.js';
import * as sixtyForty from './blocks/sixty-forty.js';
import * as Banner from './blocks/banner.js';

const blocks = [
	button,
	sixtyForty,
	Banner
];

blocks.forEach( ( block ) => {
	const { name, settings } = block;

	registerBlockType( name, settings );
} );
