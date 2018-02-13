import React from 'react'

class IconBoxes extends React.Component {
    render() {
        return(
            <ul className="icon-boxes">
                {this.props.icons.map((icon, index) => {
                    return(
                        <li key={index}>
                            <div>
                                <i className={icon.Class}></i>
                                <p>{icon.Name}</p>
                                <small>{icon.Class}</small>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default IconBoxes