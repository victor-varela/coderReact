import "../../styles/styles.css";
import payment from "../../assets/img/payment.jpg";
import social from '../../assets/img/social.jpg'
import ship from '../../assets/img/ship.jpg'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="payment-div">
        <img className="image" src={payment}/>
        <p>aceptamos todos los medios de pago</p>
      </div>
      <div className="contact-div">
        <img className="image" src={social}/>
        <p>contacto@awesome.com</p>
      </div>
      <div className="shipment-div">
        <img className="image" src={ship}/>
        <p>envios a todo el pais</p>
      </div>
    </div>
  );
};
