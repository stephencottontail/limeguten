import './block.scss';
import './editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import * as Button from './blocks/button.js';
import * as SixtyForty from './blocks/sixty-forty.js';
import * as TestimonialSlider from './blocks/testimonial-slider.js';

const blocks = [
	Button,
	SixtyForty,
	TestimonialSlider
];

blocks.forEach( ( block ) => {
	const { name, settings } = block;

	registerBlockType( name, settings );
} );
