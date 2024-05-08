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
                        Graduated with Bachelor of Science in Computing <br />- 1st Class Honours <br /> - University Of Greenwich
                    </p>

                    Passionate developer dedicated to learning newfound technologies, solving complex problems and transforming dreams into reality.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores inventore error voluptates nisi voluptate totam temporibus earum maiores culpa impedit dolorem id doloribus nemo minima commodi consequatur, labore dolorum at aliquam assumenda sed laboriosam eaque dolore. Soluta repellendus impedit debitis similique, optio dignissimos porro alias nulla sunt corrupti temporibus labore!
                </div>
                <Image src={"./assets/about.jpg"} width={300} height={300} />
            </div>

        </section>

    )
}
