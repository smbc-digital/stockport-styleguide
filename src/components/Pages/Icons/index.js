import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import IconBoxes from '../../Elements/IconBoxes'

class Icons extends Component {
	constructor(props) {
		super(props)
		this.icons = [
			{ 'Name': 'Basket', 'Class': 'si-basket' },
			{ 'Name': 'Bin', 'Class': 'si-bin' },
			{ 'Name': 'Book', 'Class': 'si-book' },
			{ 'Name': 'Books', 'Class': 'si-books' },
			{ 'Name': 'Briefcase', 'Class': 'si-briefcase' },
			{ 'Name': 'Bug', 'Class': 'si-bug' },
			{ 'Name': 'Buildings', 'Class': 'si-buildings' },
			{ 'Name': 'Calendar', 'Class': 'si-calendar' },
			{ 'Name': 'Camera', 'Class': 'si-camera' },
			{ 'Name': 'Car', 'Class': 'si-car' },
			{ 'Name': 'Certificate', 'Class': 'si-certificate' },
			{ 'Name': 'Clipboard pencil', 'Class': 'si-clipboard-pencil' },
			{ 'Name': 'Coin', 'Class': 'si-coin' },
			{ 'Name': 'Colin', 'Class': 'si-colin' },
			{ 'Name': 'Conversation', 'Class': 'si-conversation' },
			{ 'Name': 'Council', 'Class': 'si-council' },
			{ 'Name': 'Council2', 'Class': 'si-council2' },
			{ 'Name': 'Cutlery', 'Class': 'si-cutlery' },
			{ 'Name': 'Data table', 'Class': 'si-data-table' },
			{ 'Name': 'Devices', 'Class': 'si-devices' },
			{ 'Name': 'Document checked', 'Class': 'si-document-checked' },
			{ 'Name': 'Documents', 'Class': 'si-documents' },
			{ 'Name': 'Drums', 'Class': 'si-drums' },
			{ 'Name': 'Envelope open', 'Class': 'si-envelope-open' },
			{ 'Name': 'Exclamation mark', 'Class': 'si-exclamation-mark'},
			{ 'Name': 'Fair', 'Class': 'si-fair' },
			{ 'Name': 'Group', 'Class': 'si-group' },
			{ 'Name': 'Hand', 'Class': 'si-hand' },
			{ 'Name': 'Heart', 'Class': 'si-heart' },
			{ 'Name': 'House', 'Class': 'si-house' },
			{ 'Name': 'Leaf', 'Class': 'si-leaf' },
			{ 'Name': 'Lightbulb', 'Class': 'si-lightbulb' },
			{ 'Name': 'Location', 'Class': 'si-location' },
			{ 'Name': 'Microphone', 'Class': 'si-microphone' },
			{ 'Name': 'Page', 'Class': 'si-page' },
			{ 'Name': 'Pallet', 'Class': 'si-pallet' },
			{ 'Name': 'People', 'Class': 'si-people' },
			{ 'Name': 'Person', 'Class': 'si-person' },
			{ 'Name': 'Pitch', 'Class': 'si-pitch' },
			{ 'Name': 'Pointing hand', 'Class': 'si-pointing-hand' },
			{ 'Name': 'Quaver', 'Class': 'si-quaver' },
			{ 'Name': 'Raincloud', 'Class': 'si-raincloud' },
			{ 'Name': 'Raindrop', 'Class': 'si-raindrop' },
			{ 'Name': 'Road sign', 'Class': 'si-road-sign' },
			{ 'Name': 'Scale', 'Class': 'si-scale' },
			{ 'Name': 'Scales',	'Class': 'si-scales' },
			{ 'Name': 'Search', 'Class': 'si-search' },
			{ 'Name': 'Shop', 'Class': 'si-shop' },
			{ 'Name': 'Sign', 'Class': 'si-sign' },
			{ 'Name': 'Snowflake', 'Class': 'si-snowflake' },
			{ 'Name': 'Stationary', 'Class': 'si-stationary' },
			{ 'Name': 'Stop smoking', 'Class': 'si-stop-smoking' },
			{ 'Name': 'Tickbox', 'Class': 'si-tickbox' },
			{ 'Name': 'Train', 'Class': 'si-train' },
			{ 'Name': 'Tree', 'Class': 'si-tree' },
			{ 'Name': 'Trees', 'Class': 'si-trees' },
			{ 'Name': 'Wallet', 'Class': 'si-wallet' }
		]
	}

	render() {
		return (
			<main id="content">
				<article className="with-aside">
					<section>
						<h1>Icons</h1>
						<p>We use two different icon sets throughout the council website.</p>
						<p>One set features prominently on the homepage, which is known as Line Art. This is a predefined set of icons that can be manipulated through the Creative Commons licence.</p>
						<p>We also use <a href="http://fontawesome.io/">Font Awesome</a>, which is a vast icon set that is used by many different websites across the web. These icons are used in less prominent positions within the site.</p>
					</section>
					<section>
						<h2>Line art icons</h2>
						<IconBoxes icons={this.icons} />
					</section>
				</article>
				<Aside />
			</main>
		)
	}
}

export default Icons