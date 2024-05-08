import Image from 'next/image';

export default function SlideShow() {
    return (
        <div id="Projects">

            <div className='carousel w-full flex justify-center mb-24 gap-10 items-center'>
                <button className="prev-button"><img src="./assets/prev.svg" alt="" srcset="" /></button>
                <div className="slide-item ">
                    <Image
                        src="./assets/slide-item-1.png" width={400} height={600} />
                </div>
                <div className="slide-item ">
                    <Image
                        src="./assets/slide-item-2.png" width={400} height={600} />
                </div>
                <div className="next-button"><img src="./assets/next.svg" alt="" srcset="" /></div>
            </div>
            <ul className='flex justify-center gap-4 mb-24'>
                <li className="slide-circle"></li>
                <li className="slide-circle"></li>
                <li className="slide-circle"></li>
            </ul>

        </div>
    )
}
