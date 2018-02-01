import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavItem extends React.Component {
    render() {
        var isActive = this.context.router.route.location.pathname === '/' + this.props.to;
        var className = isActive ? 'current-page' : '';

        if (isActive) {
            return(<li className={className}>{this.props.name}</li>);
        } else {
            return(
                <li className={className}>
                    <NavLink to={this.props.to} {...this.props}>{this.props.name}</NavLink>
                </li>
            );
        }
    }
}

NavItem.contextTypes = {
    router: PropTypes.object
};

export default NavItem;