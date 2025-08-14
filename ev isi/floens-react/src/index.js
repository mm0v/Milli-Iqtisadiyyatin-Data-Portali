import React from 'react';
import ReactDOM from 'react-dom'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className='top-header'>
                        <div className='right-top-header'>
                            <a href='#'><i className="fa-solid fa-paper-plane"></i> needhelp@company.com</a>
                            <a href='#'><i className="fa-solid fa-phone-volume"></i> +91 5698 0036 420</a>
                            <a href='#'><i className="fa-solid fa-location-dot"></i> 85 Ketch Harbour Road Bensal, PA 19020</a>
                        </div>
                        <div className='icons'>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <img src='https://bracketweb.com/floens-html/assets/images/logo-dark.png' />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ color: "#000" }} href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Our Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Testimonials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">News</a>
                                    </li>
                                </ul>
                                <div className='buttons'>
                                    <button style={{ marginRight: "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
                                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                                <button className='get-a-quote'>
                                    <span>GET A QUOTE</span>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <>
                <main>
                    <section className='hero'>
                        <div className='text'>
                            <p>WELCOME TO FLOENS TILES & FLOORING</p>
                            <h2>PRECISION TILES & BEST FLOORING Solutions</h2>
                            <button className='discover-more'>
                                <span>DISCOVER MORE</span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </div>
                    </section>
                    <section className="logos">
                        <div className="container" >
                            <div className="row slider">
                                <div className="col-12 col-lg-2 col-md-3 col-sm-12">
                                    <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-1.png" />
                                </div>
                                <div className="col-12 col-lg-2 col-md-3 col-sm-12">
                                    <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-2.png" />
                                </div>
                                <div className="col-12 col-lg-2 col-md-3 col-sm-12">
                                    <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-3.png" />
                                </div>
                                <div className="col-12 col-lg-2 col-md-3 col-sm-12">
                                    <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-4.png" />
                                </div>
                                <div className="col-12 col-lg-2 col-md-3 col-sm-12">
                                    <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-5.png" />
                                </div>
                                <div className="col-12 col-lg-2 col-md-3 col-sm-12">
                                    <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-6.png" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="services" >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card">
                                        <img src="https://bracketweb.com/floens-html/assets/images/services/service-2-1.jpg" />
                                        <h3>Tiling & Concrete</h3>
                                        <div className="card-bottom">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                            <div className="symbol">
                                                <svg className='svg' style={{ width: "50px", color: '#fff' }} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 496 512.24"><path fill-rule="nonzero" d="m303.36 5.1 44.31 76.74h95.18l2.94 5.09L496 173.88l-47.28 81.87L496 337.62l-26.57 46.01-26.58 46.03h-94.73l-47.69 82.58H194.17l-47.67-82.58H53.15l-2.95-5.09L0 337.62l47.28-81.87L0 173.88l26.57-46.01 26.58-46.03h93.8L194.2 0h106.22l2.94 5.1zm-22.11 434.2c1.72-2.88 5.47-3.82 8.35-2.1a6.11 6.11 0 0 1 2.1 8.36l-14.42 24.02c-1.13 1.9-3.15 2.95-5.22 2.95l-23.34.03a6.11 6.11 0 1 1 0-12.22h19.9l12.63-21.04zm0-165.72c1.72-2.88 5.47-3.82 8.35-2.09 2.88 1.72 3.82 5.47 2.1 8.35l-14.42 24.02a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.63-21.04zm-.73-165.05a6.11 6.11 0 0 1 8.36-2.1c2.88 1.72 3.82 5.47 2.09 8.36l-14.41 24.01a6.067 6.067 0 0 1-5.22 2.96l-23.34.03a6.116 6.116 0 0 1 0-12.23h19.9l12.62-21.03zM140.7 358.73c1.73-2.89 5.48-3.82 8.36-2.1 2.88 1.72 3.82 5.47 2.1 8.35L136.74 389a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.62-21.03zm.43-168.77c1.72-2.89 5.47-3.82 8.35-2.1 2.88 1.72 3.82 5.47 2.1 8.35l-14.41 24.02a6.096 6.096 0 0 1-5.23 2.96l-23.33.02c-3.38 0-6.11-2.73-6.11-6.11a6.11 6.11 0 0 1 6.11-6.11h19.9l12.62-21.03zm284.52 168.77c1.73-2.89 5.48-3.82 8.36-2.1 2.88 1.72 3.82 5.47 2.1 8.35L421.69 389a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.62-21.03zm.43-168.77c1.72-2.89 5.47-3.82 8.35-2.1 2.88 1.72 3.82 5.47 2.1 8.35l-14.41 24.02a6.096 6.096 0 0 1-5.23 2.96l-23.33.02c-3.38 0-6.11-2.73-6.11-6.11a6.11 6.11 0 0 1 6.11-6.11h19.9l12.62-21.03zm-219.89 158.6-41.53 71.94 41.26 71.46h82.8l41.38-71.72-20.69-35.84-20.7-35.84h-82.52zm-58.82 60.73 41.53-71.93-41.26-71.46h-82.8l-41.38 71.72 20.69 35.83 20.7 35.84h82.52zm59.69-81.1h81.88l41.81-72.44-41.39-71.69h-82.72l-41.39 71.69 41.81 72.44zm224.1-62.29h-82.81l-41.4 71.72 41.38 71.67h82.82l41.39-71.67-41.38-71.72zm-242.49-91.37-41.75-72.32H64.85l-41.39 71.67 41.38 71.73h82.8l41.03-71.08zM164.89 91.4l41.78 72.37h82.05l41.38-71.72-20.69-35.84-20.7-35.83H205.9L164.89 91.4zm286.95 46.65-20.69-35.84h-82.82l-41.38 71.67 41.41 71.73h82.79l41.39-71.73-20.7-35.83z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card">
                                        <img src="https://bracketweb.com/floens-html/assets/images/services/service-2-2.jpg" />
                                        <h3>Industrial Flooring</h3>
                                        <div className="card-bottom">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                            <div className="symbol">
                                                <svg className='svg' style={{ width: "50px", color: '#fff' }} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 496 512.24"><path fill-rule="nonzero" d="m303.36 5.1 44.31 76.74h95.18l2.94 5.09L496 173.88l-47.28 81.87L496 337.62l-26.57 46.01-26.58 46.03h-94.73l-47.69 82.58H194.17l-47.67-82.58H53.15l-2.95-5.09L0 337.62l47.28-81.87L0 173.88l26.57-46.01 26.58-46.03h93.8L194.2 0h106.22l2.94 5.1zm-22.11 434.2c1.72-2.88 5.47-3.82 8.35-2.1a6.11 6.11 0 0 1 2.1 8.36l-14.42 24.02c-1.13 1.9-3.15 2.95-5.22 2.95l-23.34.03a6.11 6.11 0 1 1 0-12.22h19.9l12.63-21.04zm0-165.72c1.72-2.88 5.47-3.82 8.35-2.09 2.88 1.72 3.82 5.47 2.1 8.35l-14.42 24.02a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.63-21.04zm-.73-165.05a6.11 6.11 0 0 1 8.36-2.1c2.88 1.72 3.82 5.47 2.09 8.36l-14.41 24.01a6.067 6.067 0 0 1-5.22 2.96l-23.34.03a6.116 6.116 0 0 1 0-12.23h19.9l12.62-21.03zM140.7 358.73c1.73-2.89 5.48-3.82 8.36-2.1 2.88 1.72 3.82 5.47 2.1 8.35L136.74 389a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.62-21.03zm.43-168.77c1.72-2.89 5.47-3.82 8.35-2.1 2.88 1.72 3.82 5.47 2.1 8.35l-14.41 24.02a6.096 6.096 0 0 1-5.23 2.96l-23.33.02c-3.38 0-6.11-2.73-6.11-6.11a6.11 6.11 0 0 1 6.11-6.11h19.9l12.62-21.03zm284.52 168.77c1.73-2.89 5.48-3.82 8.36-2.1 2.88 1.72 3.82 5.47 2.1 8.35L421.69 389a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.62-21.03zm.43-168.77c1.72-2.89 5.47-3.82 8.35-2.1 2.88 1.72 3.82 5.47 2.1 8.35l-14.41 24.02a6.096 6.096 0 0 1-5.23 2.96l-23.33.02c-3.38 0-6.11-2.73-6.11-6.11a6.11 6.11 0 0 1 6.11-6.11h19.9l12.62-21.03zm-219.89 158.6-41.53 71.94 41.26 71.46h82.8l41.38-71.72-20.69-35.84-20.7-35.84h-82.52zm-58.82 60.73 41.53-71.93-41.26-71.46h-82.8l-41.38 71.72 20.69 35.83 20.7 35.84h82.52zm59.69-81.1h81.88l41.81-72.44-41.39-71.69h-82.72l-41.39 71.69 41.81 72.44zm224.1-62.29h-82.81l-41.4 71.72 41.38 71.67h82.82l41.39-71.67-41.38-71.72zm-242.49-91.37-41.75-72.32H64.85l-41.39 71.67 41.38 71.73h82.8l41.03-71.08zM164.89 91.4l41.78 72.37h82.05l41.38-71.72-20.69-35.84-20.7-35.83H205.9L164.89 91.4zm286.95 46.65-20.69-35.84h-82.82l-41.38 71.67 41.41 71.73h82.79l41.39-71.73-20.7-35.83z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card">
                                        <img src="https://bracketweb.com/floens-html/assets/images/services/service-2-3.jpg" />
                                        <h3>Vinyl Plank</h3>
                                        <div className="card-bottom">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                            <div className="symbol">
                                                <svg className='svg' style={{ width: "50px", color: '#fff' }} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 496 512.24"><path fill-rule="nonzero" d="m303.36 5.1 44.31 76.74h95.18l2.94 5.09L496 173.88l-47.28 81.87L496 337.62l-26.57 46.01-26.58 46.03h-94.73l-47.69 82.58H194.17l-47.67-82.58H53.15l-2.95-5.09L0 337.62l47.28-81.87L0 173.88l26.57-46.01 26.58-46.03h93.8L194.2 0h106.22l2.94 5.1zm-22.11 434.2c1.72-2.88 5.47-3.82 8.35-2.1a6.11 6.11 0 0 1 2.1 8.36l-14.42 24.02c-1.13 1.9-3.15 2.95-5.22 2.95l-23.34.03a6.11 6.11 0 1 1 0-12.22h19.9l12.63-21.04zm0-165.72c1.72-2.88 5.47-3.82 8.35-2.09 2.88 1.72 3.82 5.47 2.1 8.35l-14.42 24.02a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.63-21.04zm-.73-165.05a6.11 6.11 0 0 1 8.36-2.1c2.88 1.72 3.82 5.47 2.09 8.36l-14.41 24.01a6.067 6.067 0 0 1-5.22 2.96l-23.34.03a6.116 6.116 0 0 1 0-12.23h19.9l12.62-21.03zM140.7 358.73c1.73-2.89 5.48-3.82 8.36-2.1 2.88 1.72 3.82 5.47 2.1 8.35L136.74 389a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.62-21.03zm.43-168.77c1.72-2.89 5.47-3.82 8.35-2.1 2.88 1.72 3.82 5.47 2.1 8.35l-14.41 24.02a6.096 6.096 0 0 1-5.23 2.96l-23.33.02c-3.38 0-6.11-2.73-6.11-6.11a6.11 6.11 0 0 1 6.11-6.11h19.9l12.62-21.03zm284.52 168.77c1.73-2.89 5.48-3.82 8.36-2.1 2.88 1.72 3.82 5.47 2.1 8.35L421.69 389a6.067 6.067 0 0 1-5.22 2.96l-23.34.02c-3.37 0-6.11-2.74-6.11-6.11s2.74-6.11 6.11-6.11h19.9l12.62-21.03zm.43-168.77c1.72-2.89 5.47-3.82 8.35-2.1 2.88 1.72 3.82 5.47 2.1 8.35l-14.41 24.02a6.096 6.096 0 0 1-5.23 2.96l-23.33.02c-3.38 0-6.11-2.73-6.11-6.11a6.11 6.11 0 0 1 6.11-6.11h19.9l12.62-21.03zm-219.89 158.6-41.53 71.94 41.26 71.46h82.8l41.38-71.72-20.69-35.84-20.7-35.84h-82.52zm-58.82 60.73 41.53-71.93-41.26-71.46h-82.8l-41.38 71.72 20.69 35.83 20.7 35.84h82.52zm59.69-81.1h81.88l41.81-72.44-41.39-71.69h-82.72l-41.39 71.69 41.81 72.44zm224.1-62.29h-82.81l-41.4 71.72 41.38 71.67h82.82l41.39-71.67-41.38-71.72zm-242.49-91.37-41.75-72.32H64.85l-41.39 71.67 41.38 71.73h82.8l41.03-71.08zM164.89 91.4l41.78 72.37h82.05l41.38-71.72-20.69-35.84-20.7-35.83H205.9L164.89 91.4zm286.95 46.65-20.69-35.84h-82.82l-41.38 71.67 41.41 71.73h82.79l41.39-71.73-20.7-35.83z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='team-members'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='box'>
                                        <img src='https://bracketweb.com/floens-html/assets/images/team/team-1-1.jpg' />
                                        <div className='social-media'>
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <i className="fa-brands fa-twitter"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-youtube"></i>
                                        </div>
                                        <div className='name'>
                                            <h3>MIKE HARDSON</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='box'>
                                        <img src='https://bracketweb.com/floens-html/assets/images/team/team-1-2.jpg' />
                                        <div className='social-media'>
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <i className="fa-brands fa-twitter"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-youtube"></i>
                                        </div>
                                        <div className='name'>
                                            <h3>MIKE HARDSON</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='box'>
                                        <img src='https://bracketweb.com/floens-html/assets/images/team/team-1-3.jpg' />
                                        <div className='social-media'>
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <i className="fa-brands fa-twitter"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-youtube"></i>
                                        </div>
                                        <div className='name'>
                                            <h3>MIKE HARDSON</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='news'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-3 col-sm-12'>
                                    <div className='post'>
                                        <div className='box-top'>
                                            <span><i className="fa-solid fa-user"></i> by Admin</span>
                                            <span><i className="fa-solid fa-comment-dots"></i> 2 Comments</span>
                                        </div>
                                        <h3>Talk About The Three Major Types Of Floor Tiles</h3>
                                        <div className='image'>
                                            <img src='https://bracketweb.com/floens-html/assets/images/blog/blog-1-2.jpg' />
                                            <span className='number-in-brown'>20</span>
                                        </div>
                                        <span className='month'>JUNE</span>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-3 col-sm-12'>
                                    <div className='post'>
                                        <div className='box-top'>
                                            <span><i className="fa-solid fa-user"></i> by Admin</span>
                                            <span><i className="fa-solid fa-comment-dots"></i> 2 Comments</span>
                                        </div>
                                        <h3>Talk About The Three Major Types Of Floor Tiles</h3>
                                        <div className='image'>
                                            <img src='https://bracketweb.com/floens-html/assets/images/blog/blog-1-3.jpg' />
                                            <span className='number-in-brown'>22</span>
                                        </div>
                                        <span className='month'>JUNE</span>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-3 col-sm-12'>
                                    <div className='post'>
                                        <div className='box-top'>
                                            <span><i className="fa-solid fa-user"></i> by Admin</span>
                                            <span><i className="fa-solid fa-comment-dots"></i> 2 Comments</span>
                                        </div>
                                        <h3>Talk About The Three Major Types Of Floor Tiles</h3>
                                        <div className='image'>
                                            <img src='https://bracketweb.com/floens-html/assets/images/blog/blog-1-4.jpg' />
                                            <span className='number-in-brown'>8</span>
                                        </div>
                                        <span className='month'>JUNE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));