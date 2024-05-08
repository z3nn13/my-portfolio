import Image from "next/image"
export default function About() {
    return (
        <section>
            <div className="mt-16 flex justify-center">
                <h2 className="font-special heading text-center text-4xl font-bold mb-16"> About Me </h2>
            </div>

            <div className="flex flex-col w-full justify-center items-center text-center px-16 md:flex-row md:px-48 gap-10">
                <div className="mt-16 max-w-3xl">
                    <p className="font-bold text-md mb-12">
                        Graduated with Bachelor of Science in Computing  <br /> - University Of Greenwich  <br />(1st Class Honours)
                    </p>

                    Passionate developer enthusiasted for new knowledge.<br />
                    Avid enjoyer of guard clausing and abstraction.<br />

                </div>
                <Image src={"./assets/about.jpg"} width={300} height={300} />
            </div>

        </section>

    )
}
