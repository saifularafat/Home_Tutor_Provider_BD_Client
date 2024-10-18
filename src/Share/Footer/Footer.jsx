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
                    <div className="grid md:grid-cols-6 grid-cols-2 md:gap-8 g gap-4 ">
                       <FooterFistPart />
                        <FooterSecondPart />
                        <FooterThirdPart />
                    </div>
                </div>
            </div>
            <Socket />
        </div>
    );
};

export default Footer;