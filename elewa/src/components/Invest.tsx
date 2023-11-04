import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import Content1 from "./Content1";
import Content3 from "./Content3";
import Content5 from "./Content5";
import exp from "constants";

function Invest(){
    return (
        <div>
            <Hero 
              text='Trade, not aid'
              title="Southern innovations addressing global problems"  
            />
            <Header />
            <Content1 
                title="How we see it differently"
                text={`The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).`}
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            />
            <Content3 
                title="Elewa NV, a multi-stakeholder cooperation"
                text="At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities. Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
                img="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
            />
            <Footer />
        </div>
    )
}
export default Invest;