import React from 'react'

import { FaSearch } from 'react-icons/fa';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next'
import { Select } from 'antd';



const Header = () => {

    const { t } = useTranslation();
    const chngLang = (mylang) => {
        i18next.changeLanguage(mylang);
    }


    return (
        <>

            <Select defaultValue="en" style={{ width: 120 }} onChange={chngLang}>
                <Select.Option value="az">az</Select.Option>
                <Select.Option value="en">en</Select.Option>
            </Select>

            <h1>{t("header.0")}</h1>

            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid" >
                        <a className="navbar-brand" href="#"><img src="https://aplio.vercel.app/images/logo.svg" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="buttons">
                            <FaSearch className='magnify' />
                            <button>Request Demo</button>

                        </div>


                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header