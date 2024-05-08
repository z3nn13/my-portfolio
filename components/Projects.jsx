import SlideShow from "@components/SlideShow"


export default function Projects() {
    return (
        <section>
            <div id="Projects" className="line w-full line mt-24 mb-16 h-24">
            </div>
            <div className="flex justify-center">
                <h3 className="text-4xl font-bold animate__animated animate__fadeInUp font-special heading mb-24">Projects</h3>
            </div>
            <SlideShow />
        </section>

    )
}
