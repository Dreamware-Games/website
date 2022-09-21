import React from "react";

import ImageGallery from "react-image-gallery";

import NinjaTheaMenu from "../assets/images/games/NinjaThea/0 - Main menu.png";
import NinjaThea1 from "../assets/images/games/NinjaThea/5 - Stage 2.png";
import NinjaThea2 from "../assets/images/games/NinjaThea/6 - Stage 3.png";
import NinjaThea3 from "../assets/images/games/NinjaThea/9 - End scene.png";

const images = [
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
    {
        original: NinjaThea3,
        thumbnail: NinjaThea3,
    },
];

export const GameImageGallery = () => {
    return (
        <ImageGallery items={images} />
    )
}
