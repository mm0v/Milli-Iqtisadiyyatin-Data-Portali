const SingleCard = ({ userdata }:any) => {
    const imageSrc = userdata.image || (userdata.images && userdata.images[0]);
    const descriptionSrc = userdata.description;
  
    return (
      <div className="col-12">
        <div className="card d-flex flex-row align-items-center p-4 my-4" style={{border:"2px solid #17214E", backgroundColor:"transparent", backdropFilter: "blur(30px)" }}>
          {imageSrc &&(
            <img style={{ width: "15rem", mixBlendMode:"multiply" }} src={imageSrc} className="card-img-top" alt={userdata.title} />
          )}
          <div className="card-body" style={{fontWeight:"bold"}}>
            <h5 className="card-title" style={{color:"#fff"}}>{userdata.title}</h5>
            {descriptionSrc && <p className="card-text" style={{color:"#010005"}}>{descriptionSrc}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleCard;
  