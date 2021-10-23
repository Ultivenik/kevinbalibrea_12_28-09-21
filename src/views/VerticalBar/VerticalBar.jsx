import React from 'react'
import "./VerticalBar.css"
import weight from '../../assets/icon-weight.png'
import meditation from '../../assets/icon-meditation.png'
import swim from '../../assets/icon-swim.png'
import bike from '../../assets/icon-bike.png'
import { Link } from 'react-router-dom'

/**
 * a vertical bar for category of application
 * render a <VerticalBar /> component 
 * @component
 */

export default function VerticalBar() {
    const icons = [meditation, swim, bike, weight]
    const copyright = "Copyright, SportSee 2020"
    return (
        <section className="vertical-bar">
            <nav>
                {icons.map((icon, key) =>{
                    return (
                        <Link key={key} to={"/" + icon}>
                            <img src={icon} alt={"icone" + key} />
                        </Link>
                    )
                })}
            </nav>
            <span>{copyright}</span>
        </section>
    )
}
