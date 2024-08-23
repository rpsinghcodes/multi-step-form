export default function Thankyou() {
    return (
        <div className="flex items-center flex-col justify-center gap-2 w-[50%] mx-auto mobile:bg-customWhite mobile:w-[90%] mobile:rounded-lg mobile:py-10 px-4">
            <img src="images/icon-thank-you.svg" alt="ThankyouImage" />
            <h1 className="text-3xl font-bold text-marineBlue">Thank you</h1>
            <p className="text-center text-coolGray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}