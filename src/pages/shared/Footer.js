import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center py-10 bg-base-200 text-base-content rounded">
            <div>
                <div>
                    <div>
                        <p className='font-bold text-xl'>Main Branch</p>
                        <p>Gobindaganj, Gaibandha, Bangladesh</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Kochashahar Branch</p>
                        <p>Kochashahar, Gobindaganj, Gaibandha, Bangladesh</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Contact</p>
                        <p>+8809649676331</p>
                        <p>+8801849676331</p>
                        <p>contact@lifecare.com</p>
                    </div>
                </div>
                <div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe className='md:w-[30vw] w-[90vw] h-64' title='map' id="gmap_canvas" src="https://maps.google.com/maps?q=Gobindaganj&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by LifeCare</p>
            </div>
        </footer>
    );
};

export default Footer;