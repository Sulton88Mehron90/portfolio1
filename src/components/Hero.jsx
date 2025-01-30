// import React, { useRef } from 'react';
// import profileImage from '../assets/Dodobashara.JPG';
// import Link from '../components/Link';
// import namePrononce from '../assets/namePronunce15.png';
// import ParvinPronunciation from '../assets/ParvinPronunciation.mov';

// const Hero = () => {
//     const videoRef = useRef(null);

//     const playPronunciation = () => {
//         if (videoRef.current) {
//             videoRef.current.play();
//         }
//     };

//     return (
//         <section className="hero divider">
//             <div className="image">
//                 <img src={profileImage} alt="Portrait of Parvin A. Sattorova" />
//                 <button className="name-voice" onClick={playPronunciation}>
//                     <img src={namePrononce} alt="Play name pronunciation" className="icon-image" />
//                 </button>
//                 {/* Hidden video element for pronunciation */}
//                 <video ref={videoRef} src={ParvinPronunciation} style={{ display: 'none' }}></video>
//             </div>
//             <div className="hero-content">
//                 <h1>Parvin A. Sattorova</h1>
//                 <p>Front-End Software Developer</p>
//                 <p>Colorado, USA</p>
//                 <div className="hero-links">
//                     <Link href="#projects" className="btn">Check My Projects</Link>
//                     <Link href="https://docs.google.com/document/d/1x-aw1oNwc8OdlhFadUd3JvFMhyebqlqM/export?format=docx" className="btn">Download my Resume</Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

// import React, { useRef } from 'react';
// import profileImage from '../assets/Dodobashara.JPG';
// import Link from '../components/Link';
// import namePrononce from '../assets/namePronunce15.png';
// import ParvinPronunciation from '../assets/ParvinPronunciation.mp3';

// const Hero = () => {
//     const audioRef = useRef(null);

//     const playPronunciation = () => {
//         if (audioRef.current) {
//             audioRef.current.play().catch(error => {
//                 console.error("Error playing audio:", error);
//             });
//         }
//     };

//     return (
//         <section className="hero divider">
//             <div className="image">
//                 <img src={profileImage} alt="Portrait of Parvin A. Sattorova" />
//                 <button className="name-voice" onClick={playPronunciation}>
//                     <img src={namePrononce} alt="Play name pronunciation" className="icon-image" />
//                 </button>
//                 {/* Hidden audio element for pronunciation */}
//                 <audio ref={audioRef} src={ParvinPronunciation} preload="auto"></audio>
//             </div>
//             <div className="hero-content">
//                 <h1>Parvin A. Sattorova</h1>
//                 <p>Front-End Software Developer</p>
//                 <p>Colorado, USA</p>
//                 <div className="hero-links">
//                     <Link href="#projects" className="btn">Check My Projects</Link>
//                     <Link href="https://docs.google.com/document/d/1x-aw1oNwc8OdlhFadUd3JvFMhyebqlqM/export?format=docx" className="btn">Download my Resume</Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;



import React, { useRef, useEffect, useState } from 'react';
import profileImage from '../assets/Dodobashara.JPG';
import Link from '../components/Link';
import namePrononce from '../assets/namePronunce15.png';
import ParvinPronunciation from '../assets/ParvinPronunciation.mp3';
// import pleiades from '../assets/pleiades3.png';
import pleiades from '../assets/arrow.png';

const Hero = () => {
    const audioRef = useRef(null);
    const [showPleiades, setShowPleiades] = useState(false);

    const playPronunciation = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPleiades(true);
            setTimeout(() => setShowPleiades(false), 3000);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero divider">
            <div className="image-container">
                <img src={profileImage} alt="Portrait of Parvin A. Sattorova" className="image"/>
                <button className="name-voice" onClick={playPronunciation}>
                    <img src={namePrononce} alt="Play name pronunciation" className="icon-image" />
                </button>
                {showPleiades && (
                    <img src={pleiades} alt="Pleiades constellation pointing to microphone" className="pleiades-animation" />
                )}
                {/* Hidden audio element for pronunciation */}
                <audio ref={audioRef} src={ParvinPronunciation} preload="auto"></audio>
            </div>
            <div className="hero-content">
                <h1>Parvin A. Sattorova</h1>
                <p>Front-End Software Developer</p>
                <p>Colorado, USA</p>
                <div className="hero-links">
                    <Link href="#projects" className="btn">Check My Projects</Link>
                    <Link href="https://docs.google.com/document/d/17_LOEyom4M1bDCU-l8OyQCCTZbrs7O13/export?format=docx" className="btn">Download my Resume</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
