import "./footer.css"
import Socket from "./Socket";
import FooterFistPart from "./FooterFist";
import FooterSecondPart from "./FooterSecondPart";
import FooterThirdPart from "./FooterThirdPart";

const Footer = () => {
    return (
        <div>
            <div className="footerBg w-full border-t-2">
                <div className="w-10/12 mx-auto pt-12">
                    <div className="grid grid-cols-6 gap-8">
                      
                    </div>
                </div>
            </div>
            <Socket />
        </div>
    );
};

export default Footer;