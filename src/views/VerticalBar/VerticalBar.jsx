import React from 'react'
import "./VerticalBar.css"
import weight from '../../assets/icon-weight.png'
import meditation from '../../assets/icon-meditation.png'
import swim from '../../assets/icon-swim.png'
import bike from '../../assets/icon-bike.png'

export default function VerticalBar() {
    const copyright = "Copyright, SportSee 2020"
    return (
        <section className="vertical-bar">
            <nav>
                <img src={meditation} alt={"icone" + meditation} />
                <img src={swim} alt={"icone" + swim} />
                <img src={bike} alt={"icone" + bike} />
                <img src={weight} alt={"icone" + weight} />
            </nav>
            <span>{copyright}</span>
        </section>
    )
}
