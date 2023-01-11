import React from 'react';
import './styles.scss';

function Button({ouline = false , children, className}) {
    return (
        <button className={`btn-main ${ouline && "outline"} ${className}`}>{children}</button>
    );
}

export default Button;
