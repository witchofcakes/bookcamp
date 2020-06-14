import React from 'react';

export default class NavbarAdmin extends React.Component {
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
                            <a className="nav-link" href={'/all-admins'}>
                                Всі адміни
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link margin-right--25-desktop"
                                href={`/create-admin`}
                            >
                                <button className="enter-button-navbar">
                                    Додати адміна
                                </button>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link margin-no-navbar"
                                href={`/create-camp`}
                            >
                                <button className="registrate-button-navbar">
                                    Додати табір
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
