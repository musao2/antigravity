


function Email() {
    return (
        <>
            <section className="Email mt-10 md:mt-20 px-4 md:px-10">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                    <div className="pt-10 flex flex-col gap-4">
                        <p>Request a Quote</p>
                        <h2 className="text-4xl md:text-6xl w-full lg:w-[600px] font-semibold">Ready to Start Your Project?</h2>
                        <p className="w-full lg:w-[480px] text-gray-200">For more information about our manufacturing services, or to request a quote from the Pankajux India shop near you. Contact us now.</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative flex items-center justify-center p-4 pt-10 lg:pt-32 pb-10">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                            </div>

                            <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">

                                <h1 className="text-4xl font-semibold text-white mb-8 text-center">
                                    Request a Quote
                                </h1>

                                <form className="space-y-5">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition"
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Part Number"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone number*"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition"
                                    />

                                  

                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition"
                                    />

                                    <textarea
                                        placeholder="Message"
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition resize-none"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-white text-slate-800 font-semibold rounded-2xl hover:bg-white/90 transition shadow-lg"
                                    >
                                        PankaJUX India
                                    </button>

                                </form>

                                <p className="mt-6 text-center text-white/70 text-xs leading-relaxed">
                                    *** Here at Pankajux India your privacy is important to us. That is to say, any information shared with us will be kept internal, confidential, and secure. ***
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Email