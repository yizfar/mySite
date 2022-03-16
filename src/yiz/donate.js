import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "../yizcss/donate.css";
function Donate(props) {
  return (
    <div className="container pt-5">
      <div className="row mt-4 justify-content-center">
        <div className="justify-content-center text-center " id="donateid">
          <img
            id="donateid"
            src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px1000031-image-kwvwhb2u.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=1b46704a4f79dd5b8956157567ef184b"
          />

          <div className="col-md-12 pop_up justify-content-center ">
          <PayPalButton 
            currency="ILS"
            amount="20"
            options={{
              clientId:"AYzIhc7UIzldQyAH4oO84Jregbu7k_A8F8bDM52kX8JoMpnvO-xjc5EitmDjKIHB70nZHn0ZE8mi8Qvu"
            }}
            onSuccess={(details,data) => {
              console.log(data)
              console.log(details)

              // important info of the transction is in the data like token and orderId
              // in the real we will the facilitatorAccessToken  and the  orderID from the data params
              alert("payment approved!");
            }}
            onCancel={(err) => {
              console.log(err);
              alert("The payment process been canceld, try again")
            }}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;

// AQPeEO4ithx19XL8qK-J6Ysgn9Erdp_JubJ1Z7ueFsotA-ugJCpXyfylLlP6qVSNU40MUhZ0N_4mfGNK
