import React from 'react'

const Alert = ({level, icon, heading, content, onClickHandler}) => {
    return(
        <section className={level}>
            <i className={icon}></i>
            <div className="content">
                <h2>{heading}</h2>
                <p dangerouslySetInnerHTML={{__html: content}}/>
            </div>
            <a href="#" aria-label="close" onClick={onClickHandler.bind(this)}><i className="fa fa-times"></i></a>
        </section>
    )
}

export default Alert