import './block.scss';
import './editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import { name, settings } from './blocks/button.js';

registerBlockType( name, settings );
