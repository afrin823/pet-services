import Link from "next/link";


const FooterProduct = () => {
    return (
        <div className="space-y-3">
            <h3 className=" uppercase ">Product</h3>
            <ul className="space-y-1">
                <li>
                    <Link href="#">Features</Link>
                </li>
                <li>
                    <Link href="#">Integrations</Link>
                </li>
                <li>
                    <Link href="#">Pricing</Link>
                </li>
                <li>
                    <Link href="#">FAQ</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterProduct;