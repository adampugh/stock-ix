import React from 'react';

import PalaceLogo from '../images/palacelogo.png';
import SupremeLogo from '../images/supremelogo.jpg';
import TNFLogo from '../images/tnflogo.jpeg';

const Navbar = () => (
    <header>
        <div className="navbar">
            <img src={SupremeLogo} className="supreme-logo" alt="supreme logo" />
            <img src={PalaceLogo} className="palace-logo" alt="palace logo" />
            <img src={TNFLogo} className="tnf-logo" alt="tnf logo" />
        </div>
    </header>
);

export default Navbar