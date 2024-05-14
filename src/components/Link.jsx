import React from 'react';
import PropTypes from 'prop-types'

const Link = ({ href, children }) => {
    return (
        <a href={href} className='btn'>{children}</a>
    );
}

export default Link;

Link.propType = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,

}