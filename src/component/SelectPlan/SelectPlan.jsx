export default function SelectPlan({ onNext, onBack, data, updateData }) {
    function handleNext() {
        onNext((prevData) => prevData + 1);
        console.log(data);
    }

    function handlePlan(plan, price) {
        if(data.subscription === "Yearly") {
            price *= 10
        }
        updateData((prevData) => ({ ...prevData, plan: {name:plan, price} }));
    }
    function handleSubscription() {
        updateData((prevData) => ({
            ...prevData,
            subscription: prevData.subscription === "Monthly" ? "Yearly" : "Monthly",
        }));
    }
    return (
        <div className="p-6 flex flex-col gap-8 mobile:w-[90%] mobile:bg-customWhite mobile:mx-auto mobile:rounded-lg">
            <div>
                <h1 className="text-3xl text-marineBlue font-bold">Select your plan</h1>
                <p className="text-pastelBlue">
                    You have the option of monthly or yearly billing.
                </p>
            </div>

            {/* Select plans */}
            <div className="flex mobile:flex-col gap-3 justify-around">
                <button
                    onClick={() => handlePlan("Arcade", 9)}
                    className={`flex flex-col mobile:flex-row gap-10  pl-4 pr-16 py-4 rounded-md content-start  border ${data.plan.name === "Arcade" && "border-marineBlue  bg-magnolia"
                        } `}
                >
                    <img src="images/icon-arcade.svg" alt="Arcade" />
                    <span className="flex flex-col text-left">
                        <span className="font-bold text-marineBlue">Arcade</span>
                        {data.subscription === "Monthly" ? (
                            <span className="text-coolGray">$9/mo</span>
                        ) : (
                            <>
                                <span className="text-coolGray">$90/yr</span>
                                <span className="text-purplishBlue ">2 months free</span>
                            </>
                        )}
                    </span>
                </button>
                <button
                    onClick={() => handlePlan("Advanced", 12)}
                    className={`flex flex-col mobile:flex-row gap-10  pl-4 pr-16 py-4 rounded-md content-start  border  ${data.plan.name === "Advanced" && "border-marineBlue  bg-magnolia"
                        } `}
                >
                    <img src="images/icon-advanced.svg" alt="Arcade" />
                    <span className="flex flex-col text-left">
                        <span className="font-bold text-marineBlue">Advanced</span>
                        {data.subscription === "Monthly" ? (
                            <span className="text-coolGray">$12/mo</span>
                        ) : (
                            <>
                                <span className="text-coolGray">$120/yr</span>
                                <span className="text-purplishBlue ">2 months free</span>
                            </>
                        )}
                    </span>
                </button>
                <button
                    onClick={() => handlePlan("Pro", 15)}
                    className={`flex flex-col mobile:flex-row gap-10  pl-4 pr-16 py-4 rounded-md content-start  border ${data.plan.name === "Pro" && "border-marineBlue  bg-magnolia"
                        } `}
                >
                    <img src="images/icon-pro.svg" alt="Arcade" />
                    <span className="flex flex-col text-left">
                        <span className="font-bold text-marineBlue">Pro</span>
                        {data.subscription === "Monthly" ? (
                            <span className="text-coolGray">$15/mo</span>
                        ) : (
                            <>
                                <span className="text-coolGray">$150/yr</span>
                                <span className="text-purplishBlue ">2 months free</span>
                            </>
                        )}
                    </span>
                </button>
            </div>
            {/* Select plans ends */}

            <div className="flex items-center justify-center gap-2  bg-magnolia rounded-md py-3">
                <span
                    className={` ${data.subscription === "Monthly"
                        ? "text-marineBlue"
                        : "text-coolGray"
                        } transition-all   font-semibold `}
                >
                    Monthly
                </span>
                <div className="relative w-[50px] h-[20px] bg-marineBlue rounded-full shadow-inner  ">
                    <input
                        type="checkbox"
                        id="slideOne"
                        name="check"
                        className="hidden peer"
                        onChange={handleSubscription}
                        checked={data.subscription !== "Monthly"}
                    />
                    <label
                        htmlFor="slideOne"
                        className="block w-[14px] h-[14px] absolute top-[3px] left-[3px] bg-[#fcfff4] rounded-full cursor-pointer shadow-[0px_2px_5px_rgba(0,0,0,0.3)] transition-all duration-300 ease-[1s] peer-checked:left-[33px]"
                    ></label>
                </div>
                <span
                    className={`${data.subscription === "Yearly" ? "text-marineBlue" : "text-coolGray"
                        } transition-all font-semibold`}
                >
                    Yearly
                </span>
            </div>
            <div className="flex mobile:hidden justify-between items-center mt-[70px]">
                <a href="#sdf" className="text-coolGray" onClick={onBack}>
                    Go Back
                </a>
                <button
                    className="px-6 py-2 bg-marineBlue text-white rounded-md"
                    onClick={handleNext}
                >
                    Next Step
                </button>
            </div>
            {/* <Navigation section={1} handleNext={handleNext} margin="mt-24" /> */}
        </div>
    );
}
