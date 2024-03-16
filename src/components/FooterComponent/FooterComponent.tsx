import React from 'react';
import './FooterComponent.scss'

const FooterComponent = () => {
    return (
        <footer>
            jqvelin, {new Date().getFullYear()} &copy;
        </footer>
    );
};

export default FooterComponent;