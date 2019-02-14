import React, { Component } from 'react'
import Aside from '../../Elements/Aside'

class Typography extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main id="content">
				<article id="content" className="with-aside">
					<h1>Typography</h1>
					<section>
						<h2>Our fonts</h2>
						<section className="with-border-bottom">
							<h3>Noto sans</h3>
							<p>Noto sans is an open source sans serif typeface created for eligibility in UI design.</p>
							<p>The typeface is designed by Google and aims to make the wen more beautiful across all platforms regardless of language it is used in.</p>
							<p>The font is sans serif and is used widley accross Stockport.gov.uk</p>
							<div className="font-display noto-sans">
								<span>Aa</span>
								<div className="alphabet">
									<p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
									<p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
								</div>
							</div>
						</section>
						<section className="with-border-bottom">
							<h3>Source sans pro</h3>
							<p>Source sans pro is an open source sans seriftypeface that is easily readable across all devices.</p>
							<p>The font is inspired by twentieth century American gothic design, with a clean and friendly simplicity.</p>
							<p>The font is used predominantely for headings across Stockport.gov.uk</p>
							<div className="font-display source-sans-pro">
								<span>Aa</span>
								<div className="alphabet">
									<p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
									<p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
								</div>
							</div>
						</section>
					</section>
					<section className="heading-display">
						<h2>Headings</h2>
						<section className="with-border-bottom">
							<h1>This is what h1 looks like</h1>
							<div className="description">								
								<p>Font family: Source Sans Pro</p>
								<p>Font size: 48px/2.526em/$fontSizeExtraLarge)</p>
								<p>Font weight: 700/$fontWeightBold)</p>
								<p>Line height: 50px/1.04</p>
								<p>Colour: #1b1b1b</p>								
								<br/>
								<p>Mobile values:</p>
								<p>Font size: 32px/2em/$mobileFontSizeExtraLarge</p>
								<p>Line height: 35px/1.25</p>
							</div>
						</section>
						<section className="with-border-bottom">
							<h2>This is what h2 looks like</h2>
							<div className="description">
								<p>Font family: Source Sans Pro</p>
								<p>Font size: 36px/1.895em/$fontSizeLarge</p>
								<p>Font weight: 700/$fontWeightBold</p>
								<p>Line height: 40px/1.111</p>
								<p>Colour: #1b1b1b</p>
								<br/>
								<p>Mobile values</p>
								<p>Font size: 24px/1.5em/$mobileFontSizeLarger</p>
								<p>Line height: 30px/1.25</p>
							</div>
						</section>
						<section className="with-border-bottom">
							<h3>This is what h3 looks like</h3>
							<div className="description">
								<p>Font family: Source Sans Pro</p>
								<p>Font size: 24px/1.125m/$fontSizeLarge</p>
								<p>Font weight: 700/$fontWeightBold</p>
								<p>Line height: 30px/1.25</p>
								<p>Colour: #1b1b1b</p>
								<br/>
								<p>Mobile values</p>
								<p>Font size: 18px/$mobileFontSizeLarge</p>
								<p>Line height: 20px/1.111</p>
							</div>
						</section>
						<section className="with-border-bottom">
							<h4>This is what h4 looks like</h4>
							<div className="description">
								<p>Font family: Source Sans Pro</p>
								<p>Font size: 19px/1em/$fontSizeDefault</p>
								<p>Font weight: 600/$fontWeightSemiBold</p>
								<p>Line height: 25px/1.315</p>
								<p>Colour: #1b1b1b</p>
								<br/>
								<p>Mobile values</p>
								<p>Font size: 16px/1em/$mobileFontSizeBold</p>
								<p>Line height: 20px/1.25</p>
							</div>
						</section>
						<section className="with-border-bottom">
							<p className="lead-paragraph">This is what lead body text looks like</p>
							<div className="description">
								<p>Font family: Noto Sans</p>
								<p>Font size: 24px</p>
								<p>Font weight: 400</p>
								<p>Line height: 32px</p>
								<p>Colour: #1b1b1b</p>
								<br/>
								<p>Mobile values</p>
								<p>Font size: 18px</p>
								<p>Line height: 28px</p>
							</div>
						</section>
						<section className="with-border-bottom">
							<p>This is what body text looks like</p>
							<div className="description">
								<p>Font family: Noto Sans</p>
								<p>Font size: 19px/1em/$fontSizeDefault</p>
								<p>Font weight: 400/$fontWeightRegular</p>
								<p>Line height: 25px/1.316</p>
								<p>Colour: #1b1b1b</p>
								<br/>
								<p>Mobile values</p>
								<p>Font size: 16px/1em/$mobileFontSizeRegular</p>
								<p>Line height: 28px/1.75</p>
							</div>
						</section>
						<section className="with-border-bottom">
							<a href="#">This is what a link to some amazing content looks like</a>
							<div className="description">
								<p>Font family: Noto Sans</p>
								<p>Font size: 16px</p>
								<p>Font weight: 400</p>
								<p>Colour: #065c58</p>
								<p>Text decoration: Underline</p>
							</div>
						</section>
					</section>
					<section className='header-container'>
						<h1>Submit your supporting documents</h1>
						<p className="h2">Thanks for uploading your supporting evidence</p>
						<p className="h3">Your doucument reference number is: 123456789 </p>
					</section>
				</article>
				<Aside />
			</main>
		)
	}
}

export default Typography
