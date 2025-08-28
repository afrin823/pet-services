import React from 'react';
import FooterLogo from './footerLogo';
import FooterProduct from './FooterProduct';
import FooterCompany from './FooterCompany';
import FooterDeveloper from './FooterDeveloper';
import FooterSocial from './FooterSocial';

const MainFooter = () => {
    return (
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <FooterLogo />
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                <FooterProduct />
                <FooterCompany />
                <FooterDeveloper />
                <FooterSocial />
            </div>
        </div>

    );
};

export default MainFooter;