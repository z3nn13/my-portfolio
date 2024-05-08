import ContactForm from "@components/ContactForm"

export default function Contact() {
    return (
        <section>
            <div id="Contact" className="line w-full line my-24 h-24"></div>
            <div className="flex justify-center">
                <h2 className="font-special heading text-center text-4xl font-bold"> Send Me A Message</h2>
            </div>
            <ContactForm></ContactForm>
        </section>

    )
}
