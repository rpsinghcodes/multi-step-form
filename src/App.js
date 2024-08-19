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
  const handleBack = () => {
    setSection((prevData) => prevData - 1);
  };
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
    <div className="bg-lightBlue p-20 font-ubuntu h-lvh">
      <div className="flex p-3 rounded-lg bg-customWhite gap-6 w-[960px] m-auto">
        <Sidebar section={section} />
        {activeSection}
      </div>
    </div>
  );
}

export default App;
