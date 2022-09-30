import React from 'react';
import ImageGallery from 'react-image-gallery';

import ArcadeClassicsMenu from "../assets/images/games/ArcadeClassics/Arcade Classics.png";
import Asteroids from "../assets/images/games/ArcadeClassics/Asteroids.png";
import Asteroids2 from "../assets/images/games/ArcadeClassics/Asteroids 2.png";
import NinjaTheaMenu from "../assets/images/games/NinjaThea/0 - Main menu.png";
import NinjaThea1 from "../assets/images/games/NinjaThea/5 - Stage 2.png";
import NinjaThea2 from "../assets/images/games/NinjaThea/6 - Stage 3.png";


const images = [
    {
        original: ArcadeClassicsMenu,
        thumbnail: ArcadeClassicsMenu,
    },
    {
        original: Asteroids,
        thumbnail: Asteroids,
    },
    {
        original: Asteroids2,
        thumbnail: Asteroids2,
    },
    {
        original: NinjaTheaMenu,
        thumbnail: NinjaTheaMenu,
    },
    {
        original: NinjaThea1,
        thumbnail: NinjaThea1,
    },
    {
        original: NinjaThea2,
        thumbnail: NinjaThea2,
    },
];

class GameImageGallery extends React.Component {
    render() {
        return <ImageGallery items={images} autoPlay={true} />;
    }
}

export default GameImageGallery;