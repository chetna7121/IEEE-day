import React from 'react';
import './Contact.css'; 
import ritika_boss from './ritika_boss.jpg';
import riya from './riya.jpg';
import trupti_boss from './trupti_boss.jpg'
import shruti_boss from './shruti_boss.jpg'
import chetna1 from './chetna1.jpg'
import EmailIcon from '@mui/icons-material/Email';



const Contact = () => {
  const members = [
    {
      name: 'Ritika Malik',
      position: 'Chairperson',
      email: 'ritikamalik100102@gmail.com',
      image: ritika_boss, 
    },
    {
      name: 'Trrupti Singh',
      position: 'Vice Chairperson',
      email:'trruptisingh@gmail.com',
      image: trupti_boss, 
    },
    {
      name: 'Riya Choudhary ',
      position: 'Secretary',
      email:'choudharyriya2308@gmail.com',
      image: riya, 
    },
    {
      name: 'Shruti Agrawal',
      position: 'Treasurer ',
      email:'shrutioriya@gmail.com ',
      image: shruti_boss, 
    },
   
    {
      name: 'Chetna Mishra',
      position: 'Web Master',  
      email:'mchetna28@gmail.com',
      image: chetna1, 
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
