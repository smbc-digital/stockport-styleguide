import React from 'react'

const AlertFullWidth = ({level, icon, heading, content, onClick}) => {
	return(
		<section className={level}>
			<i className={icon}></i>
			<div className="content">
				<h2>{heading}</h2>
				<p dangerouslySetInnerHTML={{__html: content}}/>
			</div>
			<div className="dismiss">
				<a href="#" aria-label="close" onClick={onClick.bind(this)}><i className="fa fa-times"></i></a>
			</div>
		</section>
	)
}

export default AlertFullWidth