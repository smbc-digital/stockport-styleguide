import React from 'react'

class ColourBoxes extends React.Component {
	render() {
		return(
			<ul className="colour-boxes">
				{this.props.colours.map((colour, index) => {
					return(
						<li key={index}>
							<div className={colour.Class}>
								<p>{colour.Hex}</p>
								<p>{colour.Name}</p>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default ColourBoxes