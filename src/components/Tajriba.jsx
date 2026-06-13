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
                                <span className='text-[#FF675B]'>Pankajux India</span>'dan tezkor <br />
                                narx taklifini oling
                            </h1>

                            <p className='text-gray-600 text-lg leading-relaxed'>
                                2021-yilda tashkil etilganidan beri Pankajux India birinchi navbatda xizmat ko'rsatish, sifat, narx va yetkazib berishga katta e'tibor qaratib kelmoqda. Dastlab, bizning asosiy yo'nalishimiz yarimo'tkazgich sanoatida talab qilinadigan o'ta yuqori sirt ishlovi talablariga javob berish qobiliyatimiz edi.
                            </p>

                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <h3 className='text-5xl font-bold text-[#FF675B] mb-2'>5+</h3>
                                    <p className='text-gray-600 font-medium'>Yillik tajriba</p>
                                </div>
                                <div>
                                    <h3 className='text-5xl font-bold text-[#FF675B] mb-2'>500+</h3>
                                    <p className='text-gray-600 font-medium'>Tugallangan loyihalar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-16 items-center'>


                        <div className='flex flex-col gap-6'>
                            <h2 className='text-4xl font-bold text-gray-900'>
                                Pankajux India do'koni
                            </h2>

                            <p className='text-gray-600 text-lg leading-relaxed'>
                                Garchi biz Delrin, Polikarbonat, Polipropilen, alyuminiy, po'lat va zanglamaydigan po'lat kabi barcha turdagi plastmassa va metallarga ishlov berish bo'yicha mutaxassis ekanligimiz bilan faxrlansak-da, biz ko'plab kompaniyalar va xususiy mijozlar uchun yagona manzilga aylandik.
                            </p>

                            <div className='flex gap-4 pt-2'>
                                <button className='bg-[#FF675B] hover:bg-red-600 transition text-white px-8 py-3 rounded-full font-semibold'>
                                    Hozir bizga yozing!
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
            </section>
        </>
    )
}

export default Tajriba