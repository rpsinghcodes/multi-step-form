export default function FinishingUp({ onBack, onNext, data }) {
    function handleNext() {
        onNext(prevData => prevData + 1)
    }

    function handleChange() {
        onNext(0);
    }

    function totalPrice() {
        let totalPrice = 0;
        data.addOns.map(item => (
            totalPrice += item.price

        ))
        return totalPrice + data.plan.price
    }

    return (
        <div className="p-6 flex flex-col gap-8 w-[50%] mobile:w-[90%]  mobile:mx-auto mobile:bg-customWhite mobile:rounded-lg">
            <div>
                <h1 className="text-3xl text-marineBlue font-bold">Finishing up</h1>
                <p className="text-pastelBlue">Double-check everything looks OK before confirming.</p>
            </div>
            <div className=" bg-alabaster rounded-md p-4 text-coolGray">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-marineBlue font-bold">{data.plan.name}({data.subscription})</h1>
                        <span> <a href="#sdf" onClick={handleChange} className=" underline ">Change</a></span>
                    </div>
                    <span className="text-marineBlue font-bold">{`${data.plan.price}/${data.subscription === 'Monthly' ? 'mo' : 'yr'}`}</span>
                </div>
                <hr className="my-4 bg-lightGray h-[2px] rounded-md" />
                {data.addOns.map(item => <div key={item.title} className="flex justify-between ">
                    <span>{item.title}</span>
                    <span>{`$${item.price}${data.subscription === 'Monthly' ? 'mo' : 'yr'}`}</span>
                </div>)}
            </div>
            <div className="flex justify-between px-3">
                <span className="text-coolGray">Total(per {data.subscription})</span>
                <span className="text-purplishBlue font-bold text-lg">+${totalPrice()}/{`${data.subscription === 'Monthly' ? 'mo' : 'yr'}`}</span>
            </div>


            <div className="flex  justify-between mt-20 mobile:hidden">
                <a href="#sdf" className="text-coolGray" onClick={onBack}>Go Back</a>
                <button className="px-6 py-2 bg-purplishBlue text-white rounded-md" onClick={handleNext}>Confirm</button>
            </div>
        </div>
    )
}