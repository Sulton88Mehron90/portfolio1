// import React from 'react';
// import mylogo from '../assets/mylogo4.png'; 
// import '../index.css'; 

// const Logo = () => {
//   return (
//     <div className="logo-container">
//       <img src={mylogo} alt="Parvin A. Sattorova Logo" className="logo" />
//     </div>
//   );
// };

// export default Logo;


import React from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/mylogo4.png'; 
import '../index.css'; 

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={mylogo} alt="Parvin A. Sattorova Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
