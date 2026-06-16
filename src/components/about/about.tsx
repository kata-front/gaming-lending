import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const About = () => {
    const imageRef = useRef<HTMLImageElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to(imageRef.current, {
            width: '100vw',
            height: '100vh',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'center center',
                end: '+=500px',
                scrub: 2,
                pin: true
            }
        })
    })
    
    return (
        <div ref={containerRef} className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
            <span className='font-special text-3xl'>Welcome to world of games</span>
            <span className='font-basic'>Lets to start your adventure</span>

            <img ref={imageRef} className='object-cover w-30.5 h-30.5' src="img/about.webp"/>
        </div>
    )
}

export default About