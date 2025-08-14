import React from 'react'

const SingleBox = ({ id, icon, title }) => {

    return (
        <>
            <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                    <div className="inner-card">
                        <img src={icon} alt="" />
                        <h3>{title}</h3>
                        <p>Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBox