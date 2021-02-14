import React from "react";
import Mountains from '../assets/mountains.png'
import Fish from '../assets/fish.png'
import Shop from '../assets/shop.png'

function BergenInfo() {
    return (
        <div className="bergen">
            <h2 className="bergen__header">Mountains</h2>
            <div className="bergen__column">
                <img src={Mountains} alt="Mountains" className="bergen__img" />
            </div>
            <div className="bergen__column">
                <p className="bergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed dictum ullamcorper dolor, consectetur aliquam ipsum pharetra ac.
                Pellentesque tincidunt, ante et molestie ullamcorper, erat lorem
                scelerisque ex, ac mollis eros metus vel diam. Donec venenatis,
                libero vel tincidunt posuere, urna ante venenatis nisl.</p>
            </div>
            <h2 className="bergen__header">Fishing</h2>
            <div className="bergen__columntwo">
                <p className="bergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed dictum ullamcorper dolor, consectetur aliquam ipsum pharetra ac.
                Pellentesque tincidunt, ante et molestie ullamcorper, erat lorem
                scelerisque ex, ac mollis eros metus vel diam. Donec venenatis,
                libero vel tincidunt posuere, urna ante venenatis nisl.</p>
            </div>
            <div className="bergen__columntwo">
                <img src={Fish} alt="Fishing" className="bergen__imgtwo" />
            </div>
                        <h2 className="bergen__header">Shopping</h2>
            <div className="bergen__column">
                <img src={Shop} alt="Shopping" className="bergen__img" />
            </div>
            <div className="bergen__column">
                <p className="bergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed dictum ullamcorper dolor, consectetur aliquam ipsum pharetra ac.
                Pellentesque tincidunt, ante et molestie ullamcorper, erat lorem
                scelerisque ex, ac mollis eros metus vel diam. Donec venenatis,
                libero vel tincidunt posuere, urna ante venenatis nisl.</p>
            </div>
        </div>

    );
};

export default BergenInfo;
