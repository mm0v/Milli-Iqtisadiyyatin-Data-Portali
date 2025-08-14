import React from 'react'

const SingleCard = ({ userdata }) => {
    return (
        <div className="col-12 col-sm-12 col-md-12">
            <div className="box">
                <div className="profile">
                    <img src={userdata.avatar_url} className="card-img-top" alt={userdata.login} />
                    <a href={userdata.html_url} className="btn btn-dark">View profile</a>
                </div>
                <div className="card-body">
                    <div className="public-info">
                        <a href={userdata.repos_url} style={{backgroundColor: "#375B7F"}}>Public repos</a>
                        <a href={userdata.gists_url} style={{backgroundColor: "#444444"}}>Public gists</a>
                        <a href={userdata.followers_url} style={{backgroundColor: "#09BA8E"}}>Followers</a>
                        <a href={userdata.following_url} style={{backgroundColor: "#419FE9"}}>Following</a>
                    </div>
                    <h1 className="card-title">{userdata.login}</h1>
                    <p className="card-text">{userdata.node_id}</p>
                </div>
            </div>

        </div>
    )
}

export default SingleCard