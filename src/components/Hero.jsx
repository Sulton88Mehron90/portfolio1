import React, { useRef } from 'react';
import profileImage from '../assets/Dodobashara.JPG';
import Link from '../components/Link';
// import namePrononce from '../assets/namePrononce.png';
import namePrononce from '../assets/namePronunce15.png';
import ParvinPronunciation from '../assets/ParvinPronunciation.mov';

const Hero = () => {
    const videoRef = useRef(null); 

    const playPronunciation = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section className="hero divider">
            <div className="image">
                <img src={profileImage} alt="Portrait of Parvin A. Sattorova" />
                <button className="name-voice" onClick={playPronunciation}>
                    <img src={namePrononce} alt="Play name pronunciation" className="icon-image" />
                </button>
                {/* Hidden video element for pronunciation */}
                <video ref={videoRef} src={ParvinPronunciation} style={{ display: 'none' }}></video>
            </div>
            <div>
                <h1>Parvin A. Sattorova</h1>
                <p>Front-End Software Developer</p>
                <p>Colorado, USA</p>
                <Link href="#projects">Check projects below</Link>
            </div>
        </section>
    );
};

export default Hero;
