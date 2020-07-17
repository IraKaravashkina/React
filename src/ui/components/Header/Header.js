import React from 'react';
import './Header.css'

import Logo from '../Logo/Logo'

function Header() {
    const name = <span style={{
        color: 'red',
        fontSize: '24px',
    }}> Ира </span>;

    const age = (currentYear, userYear) => {
        const currentAge = currentYear - userYear;
        if (currentAge < 21) {
            return <span style={{background: 'red'}}> {currentAge}</span>;
        } else {
            return <span style={{background: 'green'}}> {currentAge}</span>

        }
    }

    return <header className="headerClass">
        <Logo />
        Привет { name }
        <p>Твой возраст: { age(2020, 2000) }</p>
    </header>
}

export  default Header;