import { G, Path, SVG } from '@wordpress/components';
import { PlainText, RichText, URLInput, InspectorControls } from '@wordpress/editor';
import { Fragment } from '@wordpress/element';
const colors = [
	'Black',
	'Gray',
	'Red',
	'Yellow',
	'Blue',
	'Purple'
];

export const name = 'limeguten/button';
export const settings = {
	title: 'Button',
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z" /></G></SVG>,
	category: 'limecuda',
	/**
	 * I like how `default` doesn't seem to be mentioned anywhere in the docs.
	 */
	attributes: {
		text: {
			type: 'string',
			default: ''
		},
		url: {
			type: 'string',
			default: ''
		}
	},
	styles: colors.map((color, index) => {
		return {
			name: color.toLowerCase().replace( ' ', '-' ),
			label: color,
			isDefault: ( 0 === index ) ? true : false
		};
	} ),

	edit( { attributes, className, setAttributes } ) {
		const { url, text } = attributes;
		let changeText = ( text ) => setAttributes( { text: text } );
		let changeUrl = ( url, post ) => setAttributes( { url, text: (post && post.title) || attributes.text } );

		return (
			<div className={ className }>
				<PlainText onChange={ changeText } value={ text } placeholder={ 'Click here...' } />
				<URLInput className={ className } onChange={ changeUrl } value={ attributes.url } />
			</div>
		);
	},

	save( { attributes, className } ) {
		const { url, text } = attributes;

		/**
		 * I don't know why the <Button> element doesn't work here when it
		 * works in the `edit()` function. A mystery that will never be
		 * solved.
		 */
		return (
			<div className={ className }>
				<a className={ 'button' } href={ url }>{ text }</a>
			</div>
		);
	}
};
