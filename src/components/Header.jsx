import Hero from "./Hero"

function Header() {
    return (
        <>
            <div className="BgImg">
                <header className="flex justify-between py-5 px-10 items-center">
                    <div>
                        <h1 className="text-4xl font-light">
                            FREE POWER TECH
                        </h1>
                    </div>
                    <div className="flex gap-5 items-center backdrop-blur-md bg-white/10 px-10 h-15 rounded-2xl border w-150 border-white">
                        <a href="/">Biz haqimizda</a>
                        <a href="/">Mahsulotlar</a>
                        <a href="/">Hamkorlarimiz</a>
                        <a href="/">Kafolat</a>
                        <button className="bg-white text-black px-6 py-2 rounded-2xl">Aloqa</button>
                    </div>

                </header>
                <Hero/>
            </div>
        </>
    )
}
export default Header