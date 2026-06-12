import Mashina from '../images/mashina.png'
import Texnika from '../images/texnika.png'

function Tajriba() {
    return (
        <>
            <section className='py-20 px-10 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>

                    <div className='grid grid-cols-2 gap-16 items-start mb-32'>
                        <div>
                            <img
                                src={Mashina}
                                alt="Welding Machine"
                                className='w-full rounded-3xl shadow-lg object-cover h-96'
                            />
                        </div>

                        <div className='flex flex-col gap-8'>
                            <h1 className='text-5xl font-bold text-gray-900 leading-tight'>
                                Receive a fast <br />
                                quote from the <br />
                                <span className='text-[#FF675B]'>Pankajux India</span>
                            </h1>

                            <p className='text-gray-600 text-lg leading-relaxed'>
                                Since it's inception in 2021, Pankajux India has placed a strong focus on service, quality, pricing and delivery above all else. At first, our niche was our ability to meet extremely high surface finish requirements needed in the semiconductor industry.
                            </p>

                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <h3 className='text-5xl font-bold text-[#FF675B] mb-2'>5+</h3>
                                    <p className='text-gray-600 font-medium'>Years of Experience</p>
                                </div>
                                <div>
                                    <h3 className='text-5xl font-bold text-[#FF675B] mb-2'>500+</h3>
                                    <p className='text-gray-600 font-medium'>Completed Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-16 items-center'>


                        <div className='flex flex-col gap-6'>
                            <h2 className='text-4xl font-bold text-gray-900'>
                                The Pankajux India shop
                            </h2>

                            <p className='text-gray-600 text-lg leading-relaxed'>
                                Although we pride ourselves as machining specialists who are exceptional with machining all types of plastics and metals like Delrin, Polycarbonate, Polypropylene, aluminum, steel and stainless steel, we have become a one stop shop for many companies and private customers.
                            </p>

                            <div className='flex gap-4 pt-2'>
                                <button className='bg-[#FF675B] hover:bg-red-600 transition text-white px-8 py-3 rounded-full font-semibold'>
                                    Email us now!
                                </button>
                                <button className='border-2 border-[#FF675B] hover:bg-red-50 transition text-[#FF675B] px-8 py-3 rounded-full font-semibold'>
                                    PankajUX India
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src={Texnika}
                                alt="Machine Part"
                                className='w-full rounded-3xl shadow-lg object-cover h-80'
                            />
                        </div>
                    </div>

                </div>



                <h1>stainless</h1>
            </section>
        </>
    )
}

export default Tajriba