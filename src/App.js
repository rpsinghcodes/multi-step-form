import PersonalInfo from "./component/PersonalInfo/PersonalInfo";
import AddOns from "./component/AddOns/AddOns";
import FinishingUp from "./component/FinishingUp/FinishingUp";
import Sidebar from "./component/sidebar/Sidebar";
import Thankyou from "./component/Thankyou/Thankyou";
import SelectPlan from "./component/SelectPlan/SelectPlan";
import { useState } from "react";

function App() {
  const [section, setSection] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {name:"Arcade", price:9},
    subscription: "Monthly",
    addOns: [],
  });
  function handleBack(){
    setSection((prevData) => prevData - 1);

  };
  function handleNext(){
    //my code
    setSection(function(prevData){return prevData + 1})
    
    
  }
  let activeSection;
  switch (section) {
    case 0:
      activeSection = <PersonalInfo onNext={setSection} data={formData} updateData={setFormData} />;
      break;
    case 1:
      activeSection = <SelectPlan onNext={setSection} onBack={handleBack} data={formData} updateData={setFormData} />;
      break;
    case 2:
      activeSection = <AddOns onNext={setSection} onBack={handleBack} data={formData} updateData={setFormData} />;
      break;
    case 3:
      activeSection = <FinishingUp onNext={setSection} onBack={handleBack} data={formData} />;
      break;
    case 4:
      activeSection = <Thankyou onNext={setSection} onBack={handleBack} />;
      break;
    default:
      activeSection = <PersonalInfo onNext={setSection} onBack={handleBack} />;
  }
  return (
    <div className="bg-lightBlue p-20 mobile:p-0 font-ubuntu h-screen ">
      <div className="flex mobile:flex-col p-3 mobile:p-0 rounded-lg  bg-customWhite mobile:bg-lightBlue gap-6 w-[960px] mobile:w-auto m-auto">
        <Sidebar section={section} />
        <div className="mobile:-mt-[30%] mobile:mx-auto mobile:bg-transparent ">
        {activeSection}
        <div className={`hidden  px-2 py-4 bg-customWhite  mobile:flex justify-between items-center  mt-auto fixed bottom-0 w-full  ${section===4 && "mobile:hidden"}`}>
           <a href="#s" className={`text-coolGray font-semibold ${section===0 && "hidden"}`} onClick={handleBack}> Go Back </a>
          <button className=" px-4 py-2 rounded  bg-marineBlue text-white ml-auto" onClick={handleNext}>Next Step</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
