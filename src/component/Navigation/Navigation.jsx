export default function Navigation({ section, handleNext, margin }) {
    return <div className={`flex  ${section === 0 ? "justify-end" : "justify-between"} ${margin}`}>
            {section === 0 ? (
                ""
            ) : (
                <a href="#sdf" className="text-coolGray">
                    Go Back
                </a>
            )}
            <button
                onClick={handleNext}
                className="px-6 py-2 bg-marineBlue text-white rounded-md "
            >
                {section === 4 ? "Confirm" : "Next Step"}
            </button>
        </div>    
}
