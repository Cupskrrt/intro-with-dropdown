import React from "react";
import heroImageDesktop from "../images/image-hero-desktop.png"

export default function Hero() {
    return(
        <img src={heroImageDesktop} alt="Hero Image" className="w-[30rem] h-auto font-epilogue"/>
    )
}