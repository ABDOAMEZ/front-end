import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useBecomeSellerMutation } from "../../services/api/userApi";
import "../../styles/beseller.css";

export default function FormsPage() {
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [becomeSellerMutation] = useBecomeSellerMutation();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [birthCountry, setBirthCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [issueCountry, setIssueCountry] = useState('');
  const [identityProof, setIdentityProof] = useState('');
  const [dateExpiry, setDateExpiry] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');

  const navigate = useNavigate();

  const handlePaymentFormSubmit = (e) => {
    e.preventDefault();
    setShowDetailedForm(true); 
  };

  const handleCancel = () => {
    
  };
  const handleBecomeSeller = async (e) => {
    e.preventDefault();



    if(localStorage.getItem('USER_ACCESS_TOKEN')){
      const dataSeller = JSON.stringify({
        'phone': phone,  
        'country_of_citizenship': citizenship ,  
        'country_of_birth' : birthCountry,  
        'date_of_birth' : dateBirth,  
        'national_ID' :  nationalId,  
        'identity_proof': identityProof,   
        'country_of_issue' : issueCountry,  
        'date_of_expiry' : dateExpiry,
        'card_Number':cardNumber,
        'date_expires_card' : expiryDate,	
        'card_holder_name' : cardHolderName,
        'residential_address' : residentialAddress,
        'role': "seller"
      });

      const response = await becomeSellerMutation(dataSeller);
      console.log(response);

      if(response.data.user.role === "seller"){
        alert("User is already a seller");
        navigate('/', {state : response.data.user})
        return;
      }

      if(response.data){
        alert("Become a seller success");
        navigate('/', {state : response.data.user})
      }
    }
  }
    
    

    return (
      <div className="seller-container">
        <AnimatePresence mode="wait">
          {!showDetailedForm ? (
            <motion.div
              key="payment-form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7 }}
              className="seller-form"
            >
              <h2>Payment Information</h2>
              <form onSubmit={handlePaymentFormSubmit}>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Expires On</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Card Holder's Name</label>
                  <input
                    type="text"
                    name="cardHolderName"
                    required
                    onChange={(e) => setCardHolderName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Monthly Subscription Fee</label>
                  <p>
                    You will be charged a Professional selling subscription fee of 39.99 USD for the first month. You will continue to be charged this fee each month if you have active listings. If you do not have active listings, you will not be charged a subscription fee in that month. If you expand to sell in other stores, you will pay the equivalent of 39.99 USD per month, split proportionately across each country or region in which you have an active listing and charged separately in each local currency. You can downgrade at any time.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-submit"
                  type="submit"
                >
                  Next
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="detailed-form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7 }}
              className="seller-form"
            >
              <h2>Seller Registration</h2>
              <form onSubmit={handleBecomeSeller}>
                <div className="names-container">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    
                  />
                </div>
                <div className="form-group">
                  <label>Middle Name(s)</label>
                  <input
                    type="text"
                    name="middleName"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    
                  />
                </div>
                </div>
                <div className="form-group">
                  <label>Country of Citizenship</label>
                  <input
                    type="text"
                    name="citizenship"
                    required
                    onChange={(e) => setCitizenship(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Country of Birth</label>
                  <input
                    type="text"
                    name="birthCountry"
                    required
                    onChange={(e) => setBirthCountry(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Identity Proof</label>
                  <select name="identityProof" required  onChange={(e) => setIdentityProof(e.target.value)}>
                    <option value="National ID">National ID</option>
                    <option value="Passport">Passport</option>
                    <option value="Driver's License">Driver's License</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>National ID Number</label>
                  <input
                    type="text"
                    name="nationalId"
                    required
                    onChange={(e) => setNationalId(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    onChange={(e) => setDateBirth(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Country of Issue</label>
                  <input
                    type="text"
                    name="issueCountry"
                    required
                    onChange={(e) => setIssueCountry(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Expiry</label>
                  <input
                    type="date"
                    name="expiryDate"
                    required
                    onChange={(e) => setDateExpiry(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Residential Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    onChange={(e) => setResidentialAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number for Verification</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                
                <div className="seller-form_btn">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-submit"
                  type="submit"
                >
                  Register
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCancel}
                  className="btn-cancel"
                >
                  Cancel
                </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );


  
}