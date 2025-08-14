const SingleCard = ({ userdata }:any) => {
  const imageSrc = userdata.image || (userdata.images && userdata.images[0]);
  const descriptionSrc = userdata.description || userdata.body;

  return (
    <div className="col-12">
      <div className="card d-flex flex-row align-items-center p-4 my-4" style={{border:"2px solid #CC025B", backgroundColor:"transparent", backdropFilter: "blur(30px)" }}>
        {imageSrc &&(
          <img style={{ width: "15rem", mixBlendMode:"multiply" }} src={imageSrc} className="card-img-top" alt={userdata.title} />
        )}
        <div className="card-body" style={{color:"#CC025B", fontWeight:"bold"}}>
          <h5 className="card-title">{userdata.title}</h5>
          {descriptionSrc && <p className="card-text">{descriptionSrc}</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
