import React from 'react'

const AlertInline = ({heading, content}) => {
	return(
		<section className="alert-inline">
			<h2>{heading}</h2>
			<p dangerouslySetInnerHTML={{__html: content}}/>
		</section>
	)
}

export default AlertInline