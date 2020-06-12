import React from 'react';

class NavbarNotLoggedIn extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-desktop nav-active">
                <a className="navbar-brand" href="/">
                    BOOKCAMP
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href={'/'}>
                                        Всі табори
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link margin-right--25-desktop"
                                        href={`/login-user`}
                                    >
                                        <button className="enter-button-navbar">
                                            Вхід
                                        </button>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link margin-no-navbar"
                                        href={`/registrate-user`}
                                    >
                                        <button className="registrate-button-navbar">
                                            Реєстрація
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>

            </nav>
        );
    }
}

export default NavbarNotLoggedIn;