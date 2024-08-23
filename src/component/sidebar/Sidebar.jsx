import { useState, useEffect } from "react";

const sidebarImage = '/images/bg-sidebar-desktop.svg';
const mobileSidebarImage = '/images/bg-sidebar-mobile.svg'


const data = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]

export default function Sidebar({ section }) {
    
    const [backgroundImage, setBackgroundImage] = useState(sidebarImage);

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 640) {
                setBackgroundImage(mobileSidebarImage);
            } else {
                setBackgroundImage(sidebarImage);
            }
        };

        window.addEventListener('resize', updateBackgroundImage);

        // Initial check
        updateBackgroundImage();

        return () => window.removeEventListener('resize', updateBackgroundImage);
    }, []);
    
    return (
        <div style={{ backgroundImage: `url('${backgroundImage}')` }} className="p-16 mobile:flex mobile:justify-center   bg-cover rounded-md mobile:rounded-none  flex-shrink-0 h-[550px] mobile:h-auto mobile:w-auto">
            {/* <img src={sidebarImage} alt="" /> */}
            {data.map((item, index) => (
                <div key={item} className="flex mobile:justify-center mobile:p-2   gap-2 mobile:gap-2 mb-8  mobile:inline-block">
                    <span className={`h-8 w-8  mobile:font-semibold rounded-full flex items-center justify-center self-center font-bold  ${section===index ? "text-marineBlue bg-lightBlue" : "bg-transparent border text-white"}`}>{index + 1}</span>
                    <div className="flex  flex-col  text-customWhite mobile:hidden">
                        <span className="font-light "> Step{index + 1}</span>
                        <span className="font-semibold ">{item}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}