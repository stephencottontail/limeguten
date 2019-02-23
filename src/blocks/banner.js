import { Path, SVG, TextControl, TextareaControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const BannerHeader = withState({
    text: ''
})( ({ text, setState }) => (
    <TextControl
        label='Banner Title'
        value={ text }
        onChange={ ( text ) => {
            setState({ text });
        } }
    />
) );
const BannerURL = withState({
    url: ''
})( ({ url, setState }) => (
    <TextControl
        label='Banner URL'
        type='url'
        value={ url }
        onChange={ ( url ) => {
            setState({ url });
        } }
    />
) );
const BannerContent = withState({
    text: 'Enter the content'
})( ({ text, setState }) => (
    <TextareaControl
        label='Banner Content'
        value={ text }
        onChange={ ( text ) => {
            setState({ text });
        } }
    />
) );

export const name = 'limeguten/banner';
export const settings = {
	title: 'Banner',
	icon: <SVG viewBox="0 0 32 32" version="1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1"><Path d="M5 13h22v7H5zM1 14h4v7H1l2-3-2-4M31 21h-4v-7h4l-2 4 2 3"/></SVG>,
	category: 'limecuda',
	attributes: {
		header: {
			type: 'string',
			source: 'html',
			selector: '.lc-banner__header',
            default: ''
		}
	},

	edit({ attributes, className, setAttributes }) {
        const { header } = attributes;
        return [
            <BannerHeader />,
            <BannerContent />,
            <BannerURL />
        ];
	},

	save({ attributes, className }) {
        const { header } = attributes;
        return wp.element.createElement( 'p', { className: className }, header );
	}
};
