import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-black flex items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full opacity-5 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 max-w-4xl px-8">
                <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                    Jason Lam
                </h1>

                <h2 className="text-xl md:text-2xl font-light mb-6 text-red-300 uppercase tracking-[0.2em] relative">
                    Computer Science Student & Software Developer
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-red-500"></div>
                </h2>

                <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed">
                    Passionate about building efficient, user-focused applications with
                    experience in full-stack development and data analysis
                </p>

                <div className="flex gap-6 justify-center flex-wrap mt-10">
                    <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300">
                        View My Projects
                    </button>
                    <button className="px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500/10 hover:-translate-y-1 transition-all duration-300">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;