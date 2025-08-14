import React from 'react'
import '../assets/style.css'

const Header = () => {
    return (
        <>
            <header>
                <section className="top-header">
                    <div className="left-side">
                        <i className="fa-solid fa-tag" />
                        <p>get up to 25% cashback on first order</p>
                    </div>
                    <div className="right-side">
                        <div className="email">
                            <i className="fa-regular fa-envelope" />
                            <p>supprt@yourstore.com</p>
                        </div>
                        <div className="gift">
                            <i className="fa-solid fa-gift" />
                            <p>Gift Sertificates</p>
                        </div>
                    </div>
                </section>
                <section className="main-header">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <a className="navbar-brand"><img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/200x48/logo_1614156460__72483.original.png" /></a>
                            <form className="search-bar d-flex" role="search">
                                <input className="search me-2" type="search" placeholder="Search the store" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass" /> Search</button>
                            </form>
                            <div className="call">
                                <i className="fa-solid fa-phone-volume" />
                                <p>Call Us :</p>
                                <span>(00)1234 567891</span>
                            </div>
                            <div className="icons">
                                <i className="fa-regular fa-heart" />
                                <i className="fa-regular fa-user" />
                                <i className="fa-solid fa-cart-shopping" />
                            </div>
                        </div>
                    </nav>
                </section>
                <section className="down-header">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="menu nav-link" href="#"><i className="fa-solid fa-bars" />SHOP BY CATEGORIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ABOUT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">RETURN POLICY</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">TERMS &amp; CONDITIONS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SHIPPING &amp; RETURNS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">CONTACT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">MORE <i className="fa-solid fa-angle-down" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>

        </>
    )
}

export default Header