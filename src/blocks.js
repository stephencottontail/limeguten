import './block.scss';
import './editor.scss';
import { registerBlockType } from '@wordpress/blocks';

const { name, settings } = require('./blocks/button.js');

registerBlockType( name, settings );
