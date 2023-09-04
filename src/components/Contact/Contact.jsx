import React from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  const members = [
    {
      name: 'Ritika Malik',
      position: 'Chairperson',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Ritika-Malik1.jpg', // Replace with the actual image path
    },
    {
      name: 'Trrupti Singh',
      position: 'Vice Chairperson',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/TRRUPTI-2.jpeg', // Replace with the actual image path
    },
    {
      name: 'Riya Choudhary ',
      position: 'Secretary',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Riya-Choudhary-1.jpeg', // Replace with the actual image path
    },
    {
      name: 'Shruti Agrawal',
      position: 'Treasurer ',
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Shruti-Agrawal-.jpg', // Replace with the actual image path
    },
   
    {
      name: 'Chetna Mishra',
      position: 'Web Master',  
      image: 'http://edu.ieee.org/in-must/wp-content/uploads/sites/615/Chetna-Mishra-1.jpg', // Replace with the actual image path
    },

   
  ];

  return (
    <div className="contact-container">
       <h3>CONTACT <hr /></h3>
       <h4>EXECOM 2023-2024</h4>
      {members.map((member, index) => (
        <div key={index} className="contact-card">
           
          <div className="profile-image">
           
            <img src={member.image} alt={member.name} />
          </div>
          <h5>{member.name}</h5>
          <p>{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
