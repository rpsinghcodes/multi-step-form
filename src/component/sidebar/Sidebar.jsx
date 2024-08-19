const sidebarImage = '/images/bg-sidebar-desktop.svg';


const data = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]

export default function Sidebar({ section }) {
    return (
        <div style={{ backgroundImage: `url('${sidebarImage}')` }} className="p-16 bg-cover rounded-md flex-shrink-0 h-[550px]">
            {/* <img src={sidebarImage} alt="" /> */}
            {data.map((item, index) => (
                <div key={item} className="flex  gap-4 mb-4">
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center self-center font-bold  ${section===index ? "text-marineBlue bg-lightBlue" : "bg-transparent border text-white"}`}>{index + 1}</span>
                    <div className="flex flex-col text-customWhite">
                        <span className="font-light">Step {index + 1}</span>
                        <span className="font-semibold">{item}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}