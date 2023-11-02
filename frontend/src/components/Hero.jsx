import taskBull from "../assets/images/TaskBull.png"

const Hero = () => {
    return (
        <div>
            <section id="hero">
                <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Need Someone To Run Your Errands? Ask Bull Runners!
                        </h1>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left text-lg">
                            A online market place for USF students to match freelance labors with demands
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a href="/service"
                                className="p-3 px-6 pt-2 text-white bg-bullGreen rounded-full baseline hover:bg-lightBullGreen">Go Bulls!
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={taskBull} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;