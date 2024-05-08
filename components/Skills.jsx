import Image from "next/image"

export default function Skills() {
    return (
        <section className="skill-section text-center flex flex-col gap-5" id="Skills" style={{ backgroundImage: 'url("./assets/skill-bg.png")' }}>
            <h3 className="pt-24 text-center font-special text-white font-bold text-4xl">Skills</h3>
            <div className="flex mx-auto w-max gap-5 mt-5">
                <Image src={"./assets/html.webp"} width={50} height={300} />
                <Image src={"./assets/css.png"} width={50} height={300} />
                <Image src={"./assets/js.png"} width={50} height={300} />
                <Image src={"./assets/python.webp"} width={50} height={300} />
                <Image src={"./assets/node.png"} width={50} height={50} />
            </div>
            <div className="flex mx-auto w-max gap-5 mt-5 mb-16">
                <Image src={"./assets/laravel.png"} width={50} height={300} />
                <Image src={"./assets/sass.png"} width={50} height={300} />
                <Image src={"./assets/react.png"} width={50} height={300} />
                <Image src={"./assets/next.webp"} width={50} height={300} />
            </div>
        </section >
    )
}
