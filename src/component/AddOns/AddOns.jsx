import React from 'react';

const addOnsData = [{
    title: 'Online Services',
    description: 'Access to multiplayer games',
    price: 1,
}, {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
}, {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
}];

export default function AddOns({ onNext, onBack, data, updateData }) {

    const handleNext = () => {
        onNext(prevData => prevData + 1);
        console.log(data);
    };

    function handlePlan(plan, price) {
        console.log('plan: ', plan, ' price: ', price);
        // if plan is yearly 
        if(data.subscription === 'Yearly') {
            price *= 10;
        }
        updateData(prevData => {
            const existingPlan = prevData.addOns.find(item => item.title === plan);
            console.log('Found plan:', existingPlan);

            if (existingPlan) {
                console.log('Removing plan:', plan);

                const updatedAddOns = prevData.addOns.filter(item => item.title !== plan);
                console.log('Updated addOns after removal:', updatedAddOns);

                return {
                    ...prevData,
                    addOns: updatedAddOns
                };
            } else {
                console.log('Adding plan:', plan);

                const updatedAddOns = [...prevData.addOns, { title: plan, price }];
                console.log('Updated addOns after addition:', updatedAddOns);

                return {
                    ...prevData,
                    addOns: updatedAddOns
                };
            }
        });
    }

    return (
        <div className="p-6 flex flex-col gap-8 w-1/2">
            <div>
                <h1 className="text-3xl text-marineBlue font-bold">Pick add-ons</h1>
                <p className="text-pastelBlue">Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="flex flex-col gap-3 justify-around">
                {addOnsData.map(item => (
                    <button
                        key={item.title}
                        onClick={() => handlePlan(item.title, item.price)}
                        className={`flex justify-between items-center px-4 py-4 rounded-md border ${data.addOns.some(addOn => addOn.title === item.title) ? "border-marineBlue bg-magnolia" : ""}`}
                    >
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                name={item.title.toLowerCase().replace(" ", "-")}
                                onClick={() => handlePlan(item.title, item.price)}
                                checked={data.addOns.some(addOn => addOn.title === item.title)}
                                readOnly
                            />
                            <span className="flex flex-col text-left">
                                <h1 className="font-bold text-marineBlue">{item.title}</h1>
                                <p className="text-coolGray">{item.description}</p>
                            </span>
                        </div>
                        <span className="text-purplishBlue">{data.subscription === "Monthly" ? `+${item.price}/mo` : `+${item.price * 10}/yr`}</span>
                    </button>
                ))}
            </div>

            <div className="flex justify-between mt-20">
                <a href="#back" className="text-coolGray" onClick={onBack}>Go Back</a>
                <button className="px-6 py-2 bg-marineBlue text-white rounded-md" onClick={handleNext}>Next Step</button>
            </div>
        </div>
    );
}
