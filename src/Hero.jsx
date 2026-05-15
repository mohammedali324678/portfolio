function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100" id="home">
            <p className="text-blue-500  font-mono text-sm mb-4 tracking-widest">//HHello World</p>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">Mohammad <br />
            <span className="text-blue-500">Ali</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed mb-10">
                Computer Engineering student at RCOEM Nagpur. Building full stack web apps and AI-powered projects. Learning in public every day.
            </p>
            <div className="flex gap-4 flex-wrap">
                <a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Project

                </a>
                <a href="" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Contact Me
                </a>
            </div>
        </section>
    )
}

export default Hero