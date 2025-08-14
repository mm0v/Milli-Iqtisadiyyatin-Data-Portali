import React from 'react'
import '../assets/style.css'

const Main = () => {
    return (
        <>
            <main>
                <section className="promotion">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-menu"></div>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/original/carousel/7/slider.jpg?c=1" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item active">
                                        <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/original/carousel/3/Untitled-2.jpg?c=1" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="right-add">
                                <div className="top-add"></div>
                                <div className="bottom-add"></div>
                            </div>
                            <div className="samples">
                                <div className="box">
                                    <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/cms-img-02.jpg" alt="" />
                                    <div className="text">
                                        <span>BIG RAGE OF</span>
                                        <h4>Ice-cream Maker</h4>
                                        <p>Up To 15% OFF</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/cms-img-03.jpg" alt="" />
                                    <div className="text">
                                        <span>BIG RAGE OF</span>
                                        <h4>Ice-cream Maker</h4>
                                        <p>Up To 15% OFF</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/cms-img-05.jpg" alt="" />
                                    <div className="text">
                                        <span>BIG RAGE OF</span>
                                        <h4>Ice-cream Maker</h4>
                                        <p>Up To 15% OFF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main