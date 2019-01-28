import { Fragment } from '@wordpress/element';
import { PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/editor';
import { times } from 'lodash';

export const name = 'limeguten/sixty-forty';
export const settings = {
	title: 'Sixty Forty',
	description: 'Creates an asymmetric two-column grid',
	icon: 'screenoptions',
	category: 'limecuda',
	attributes: {
		width: {
			type: 'string',
			default: 'half'
		}
	},
	supports: {
		html: false
	},

	edit( { attributes, className, setAttributes } ) {
		const { width } = attributes;
		let classes = [];
		classes.push( className );
		classes.push( `is-${width}-column` );

		return [
			<InspectorControls>
				<PanelBody>
					<SelectControl
					label={ 'Left Column Width' }
					value={ width }
					onChange={ ( size ) => setAttributes( { width: size } ) }
					options={ [
						{ value: 'fourth', label: '1/4' },
						{ value: 'third', label: '1/3' },
						{ value: 'half', label: '1/2' },
						{ value: 'two-third', label: '2/3' },
						{ value: 'three-fourth', label: '3/4' }
					] }
					/>
				</PanelBody>
			</InspectorControls>,
			<div className={ classes.join( ' ' ) }>
				<p>{ 'Sixty-Forty' }</p>
				<InnerBlocks
					template={ times( 2, () => [ 'core/column' ] ) }
					templateLock='all'
					allowedBlocks={ 'core/column' } />
			</div>
		];
	},

	save( { attributes } ) {
		return <InnerBlocks.Content />;
	}
};
