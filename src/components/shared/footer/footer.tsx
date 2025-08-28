import FooterCopyWrite from "./FooterCopyWrite";
import MainFooter from "./MainFooter";

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-primary text-secondary">
            <MainFooter />
            <FooterCopyWrite />
        </footer>
    );
};

export default Footer;