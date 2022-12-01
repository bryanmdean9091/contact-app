import "./ContactCard.css";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <div className="card-wrap mt-3">
      <div className="cardPill mb-2">
        <div className="profilePic mx-2">
          <img
            className="face"
            src={profilePic}
            alt={`Profile of ${firstName} ${lastName}.`}
          />
        </div>
        <div className="cardInfo">
          <div className="nm-Phn">
            <p className="cardName
            mb-0">
              {firstName} {lastName}
            </p>
            <p className="cardPhone">{phoneNumber}</p>
          </div>
        </div>
        <div className="xBtnBox ">
        <button className="xBtn btn-sm">X</button>
      </div>
        
      </div>
     
      
    </div>
  );
};

export default ContactCard;
