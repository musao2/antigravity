import {
    TbSettingsCog,
    TbBuildingFactory,
    TbRulerMeasure,
    TbTool,
    TbEngine,
    TbHammer,
} from "react-icons/tb";
function Kafolat() {
    const services = [
        {
            id: 1,
            icon: <TbRulerMeasure className="text-[80px]" />,
            title: "Yuqori aniqlikdagi ishlab chiqarish",
        },
        {
            id: 2,
            icon: <TbBuildingFactory className="text-[80px]" />,
            title: "Sanoat ishlab chiqarish yechimlari",
        },
        {
            id: 3,
            icon: <TbSettingsCog className="text-[80px]" />,
            title: "Aniq muhandislik xizmatlari",
        },
        {
            id: 4,
            icon: <TbTool className="text-[80px]" />,
            title: "Maxsus uskunalar va tayyorlash",
        },
        {
            id: 5,
            icon: <TbEngine className="text-[80px]" />,
            title: "Ilg'or mexanik tizimlar",
        },
        {
            id: 6,
            icon: <TbHammer className="text-[80px]" />,
            title: "Sifatli yig'ish operatsiyalari",
        },
    ];

    return (
        <>
            <section className="Kafolat px-4 md:px-10 flex flex-col gap-5 justify-between py-10 md:py-0">
                <div className="pt-10 md:pt-15">
                    <p>Aniqlik, Tajriba va Ishonch asosida qurilgan</p>
                    <h2 className="text-4xl md:text-6xl w-full md:w-[600px] font-semibold mt-2">Aniqlik, Tajriba va Ishonch asosida qurilgan</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-15 place-items-center mt-10 md:mt-0">
                    {
                        services.map((item) => (
                            <div key={item.id} className="backdrop-blur-md bg-white/10 border border-white/40 w-full max-w-[280px] h-[280px] rounded-[20px] p-5 flex flex-col justify-between">
                                <span className="text-8xl">
                                    {item.icon}
                                </span>
                                <h3 className="text-[24px] font-light">{item.title}</h3>
                            </div>
                        ))
                    }


                </div>
            </section>
        </>
    )
}
export default Kafolat