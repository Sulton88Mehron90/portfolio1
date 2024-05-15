import React, { useRef } from 'react';
import profileImage from '../assets/Dodobashara.JPG';
import Link from '../components/Link';
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
            <div className="hero-content">
                <h1>Parvin A. Sattorova</h1>
                <p>Front-End Software Developer</p>
                <p>Colorado, USA</p>
                <div className="hero-links">
                    <Link href="#projects" className="btn">Check Projects</Link>
                    <Link href="https://docs.google.com/document/d/1egLhxEtaT5PdwMK0A4qh9j5EmbBL68fF/export?format=docx" className="btn">Download my Resume</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
