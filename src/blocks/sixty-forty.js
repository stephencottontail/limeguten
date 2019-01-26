export const name = 'limeguten/sixty-forty';
export const settings = {
	title: 'Sixty Forty',
	icon: 'screenoptions',
	category: 'limecuda',
	attributes: {},

	edit( { attributes, className, setAttributes } ) {
		return <p>Hello Back End!</p>;
	},

	save( { attributes } ) {
		return <p>Hello Front End!</p>;
	}
};
