export default function ContactForm() {
    return (
        <form className="contact-form flex flex-col gap-4 w-full px-16  py-16 md:px-60">
            <div className="form-field flex gap-6 flex-col w-full md:flex-row">
                <div className="form-item w-full">
                    <label htmlFor="first_name" className="font-semibold text-sm">First Name</label>
                    <input type="text" className="border-gray-300 border-2 rounded py-1 w-full" name="first_name" id="firstName" />
                </div>
                <div className="form-item w-full">
                    <label htmlFor="first_name" className="font-semibold text-sm">Last Name</label>
                    <input type="text" className="border-gray-300 border-2 rounded py-1 w-full" name="last_name" id="lastName" />
                </div>
            </div>
            <div className="form-item flex flex-col">
                <label htmlFor="email" className="font-semibold text-sm">Email:</label>
                <input className="border-gray-300 border-2 rounded py-1" type="email" id="email" />
            </div>
            <div className="form-item flex flex-col">
                <label htmlFor="message" className="font-semibold text-sm">Message:</label>
                <textarea className="border-gray-300 border-2 rounded-lg" name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className="max-w-min mx-auto mt-12 justify-self-center bg-accent text-white font-bold px-4 py-2 rounded">Send</button>
        </form>
    )
}
