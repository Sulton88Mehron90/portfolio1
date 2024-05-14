// import React from 'react'
// import profileImage from '../assets/Dodobashara.JPG'
// import Link from '../components/Link'


// const Hero = () => {
//   return (
//     <section className="hero divider">
//       <div className="image">
//         <img src={profileImage} alt="Portrait of Parvin A. Sattorova" />
//       </div>
//       <div>
//         <h1>Parvin A. Sattorova</h1>
//         <p>Front-End Software Developer</p>
//         <p>Lakewood, Colorado</p>
//        <Link href="#projects">Check out my work</Link>
//       </div>
//     </section>
//   );
// };
// export default Hero;

import React, { useRef } from 'react';
import profileImage from '../assets/Dodobashara.JPG';
import Link from '../components/Link';
import namePrononce from '../assets/namePrononce.png';
import ParvinPronunciation from '../assets/ParvinPronunciation.mov';

const Hero = () => {
    const videoRef = useRef(null); // Reference to the video element

    // Function to play pronunciation video
    const playPronunciation = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section className="hero divider">
            <div className="image" style={{ position: 'relative' }}>
                <img src={profileImage} alt="Portrait of Parvin A. Sattorova" />
                <button className='name-voice' onClick={playPronunciation} style={{ position: 'absolute', bottom: 10, right: 10 }}>
                    <img src={namePrononce} alt='Play name pronunciation' />
                </button>
                {/* Hidden video element for pronunciation */}
                <video ref={videoRef} src={ParvinPronunciation} style={{ display: 'none' }}></video>
            </div>
            <div>
                <h1>Parvin A. Sattorova</h1>
                <p>Front-End Software Developer</p>
                <p>Lakewood, Colorado</p>
                <Link href="#projects">Check out my work</Link>
            </div>
        </section>
    );
};

export default Hero;
