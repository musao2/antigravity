import Robot01 from '../images/01.png'

function Mahsulotlar() {
    const services = [
        {
            id: "01",
            title: "CNC Milling",
            description:
                "At Pankajux India Inc., we specialize in precision CNC milling services for a wide range of metals and plastics with high accuracy.",
            image: Robot01,
        },
        {
            id: "02",
            title: "CNC Turning",
            description:
                "Our CNC turning services deliver precise cylindrical components with exceptional quality and consistency.",
            image: Robot01,
        },
        {
            id: "03",
            title: "Sheet Metal Fabrication",
            description:
                "We provide custom sheet metal fabrication solutions including cutting, bending, and welding.",
            image: Robot01,
        },
        {
            id: "04",
            title: "Precision Engineering",
            description:
                "Advanced engineering solutions designed to meet strict industry standards.",
            image: Robot01,
        },
        {
            id: "05",
            title: "Industrial Manufacturing",
            description:
                "Comprehensive manufacturing services with modern machinery and skilled professionals.",
            image: Robot01,
        },
        {
            id: "06",
            title: "Custom Machining",
            description:
                "Tailor-made machining solutions for prototypes and large-scale production.",
            image: Robot01,
        },
    ];
    return (
        <>
            <section className='px-4 md:px-10 mt-10'>
                <h2 className='text-center my-6 md:my-10 text-3xl md:text-4xl font-semibold'>
                    Manufacturing Services
                </h2>


                <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-6'>

                    {
                        services.map((item) => (
                            <div key={item.id} className='group flex flex-col md:flex-row w-full lg:w-[48%] items-center bg-white border border-gray-500/12 rounded-2xl my-2 hover:shadow-xl duration-300 hover:border-[#FF675B] overflow-hidden'>
                                <div className='px-6 md:px-10 py-6 md:py-0 flex flex-col gap-3 w-full md:w-1/2'>
                                    <h2 className='text-4xl md:text-6xl font-bold text-gray-400 duration-300 group-hover:text-[#FF675B]'>{item.id}</h2>
                                    <h3 className='text-2xl md:text-3xl font-semibold'>{item.title}</h3>
                                    <p className='text-gray-600 text-sm md:text-base'>{item.description}</p>
                                    <button className='border border-[#FF675B] w-32 text-[#FF675B] py-2 rounded-xl hover:bg-[#FF675B] hover:text-white duration-300 mt-2'>Learn More</button>
                                </div>
                                <img src={item.image} alt="" className='w-full md:w-1/2 h-auto object-cover' />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
export default Mahsulotlar