import React from 'react';

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <header className="header">
                <h1 className="header__title">
                    Crêpes raffinées
                </h1>
                <div className="header__info">
                    <span className="header__info-tag">
                        webdiff
                    </span>
                    -
                    <span className="header__info-tag">
                        Facile
                    </span>
                </div>
            </header>
         );
    }
}
 
export default Header;