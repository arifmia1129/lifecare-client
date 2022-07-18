import React from 'react';

const Footer = () => {
    return (
        <footer class="footer footer-center py-10 bg-base-200 text-base-content rounded">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <div>
                        <p className='font-bold'>Main Branch</p>
                        <p>Gobindaganj, Gaibandha, Bangladesh</p>
                    </div>
                    <div>
                        <p className='font-bold'>Kochashahar Branch</p>
                        <p>Kochashahar, Gobindaganj, Gaibandha, Bangladesh</p>
                    </div>
                    <div>
                        <p className='font-bold'>Contact</p>
                        <p>+8809649676331</p>
                        <p>+8801849676331</p>
                        <p>contact@lifecare.com</p>
                    </div>
                </div>
                <div>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe className='h-96 w-full' title='map' id="gmap_canvas" src="https://maps.google.com/maps?q=Gobindaganj&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
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