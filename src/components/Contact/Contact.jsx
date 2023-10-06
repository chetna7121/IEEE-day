import React from 'react';
import './Contact.css'; 
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  const members = [
    {
      name: 'Ritika Malik',
      position: 'Chairperson',
      email: 'ritikamalik100102@gmail.com',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Ritika-Malik1.jpg', 
    },
    {
      name: 'Trrupti Singh',
      position: 'Vice Chairperson',
      email:'trruptisingh@gmail.com',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/TRRUPTI-2.jpeg', 
    },
    {
      name: 'Riya Choudhary ',
      position: 'Secretary',
      email:'choudharyriya2308@gmail.com',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Riya-Choudhary-1.jpeg', 
    },
    {
      name: 'Shruti Agrawal',
      position: 'Treasurer ',
      email:'shrutioriya@gmail.com ',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Shruti-Agrawal-.jpg', 
    },
   
    {
      name: 'Chetna Mishra',
      position: 'Web Master',  
      email:'mchetna28@gmail.com',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Chetna-Mishra-1.jpg', 
    },

   
  ];

  return (
    
   <div className="day-heading">
    <h3>CONTACT<hr /></h3>
    <h4>EXECOM 2023-2024</h4>
 <div className="contact-container">
      {members.map((member, index) => (
        <div key={index} className="contact-card">
           
          <div className="profile-image">
           
            <img src={member.image} alt={member.name} />
          </div>
          <h5>{member.name}</h5>
          <p>
            <span>{member.position}</span>
            <a href={`mailto:${member.email}`} className="email-icon">
              <EmailIcon /> 
            </a>
          </p>
        </div>
      ))}
   </div>
   </div>
  );
};

export default Contact;
