import { Dashicon, Draggable, Panel, PanelBody } from '@wordpress/components';

export const name = 'limeguten/testimonial-slider';
export const settings = {
	title: 'Testimonial Slider',
	icon: 'move',
	category: 'limecuda',

	edit( { attributes, className, setAttributes } ) {
		return (
			<div id="draggable-panel">
				<Panel header="Draggable">
					<PanelBody>
						<Draggable
							elementId="draggable-panel"
							transferData={ { } }
						>
						{
							( { onDraggableStart, onDraggableEnd } ) => (
								<Dashicon
									icon="move"
									onDragStart={ onDraggableStart }
									onDragEnd={ onDraggableEnd }
									draggable
								/>
							)
						}
						</Draggable>
					</PanelBody>
				</Panel>
			</div>
		);
	},

	save() {
		return <p>Hi</p>;
	}
}
