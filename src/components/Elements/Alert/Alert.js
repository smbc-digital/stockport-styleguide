import React from 'react'

const Alert = ({ level, icon, heading, content, enableH3, onClick }) => {
	return (
		<section className={level}>
			<i className={icon}></i>
			<div className="content">
				{enableH3
					? <h3>{heading}</h3>
					: <h2>{heading}</h2>
				}
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</div>
			<a href="#" aria-label="close" onClick={onClick.bind(this)}><i className="fa fa-times"></i></a>
		</section>
	)
}

export default Alert