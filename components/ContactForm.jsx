export default function ContactForm() {
    return (
        <form className="mt-16 contact-form mx-auto max-w-min mb-16 flex flex-col gap-4">
            <div className="form-field flex gap-6">
                <div className="form-item">
                    <label htmlFor="first_name" className="font-semibold text-sm">First Name</label>
                    <input type="text" className="border-gray-300 border-2 rounded py-1" name="first_name" id="firstName" />
                </div>
                <div className="form-item">
                    <label htmlFor="first_name" className="font-semibold text-sm">Last Name</label>
                    <input type="text" className="border-gray-300 border-2 rounded py-1" name="last_name" id="lastName" />
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
