import { G, Path, SVG } from '@wordpress/components';

export const name = 'limeguten/hello-world';
export const settings = {
	title: 'Hello World!',
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z" /></G></SVG>,
	category: 'common',
	edit() {
		return <p>Hello Back End!</p>;
	},

	save() {
		return <p>Hello Front End!</p>;
	}
};
