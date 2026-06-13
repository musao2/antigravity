export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className=" px-10 py-16">

                <div className="">
                    <h1 className="text-4xl md:text-6xl font-bold  text-center">
                        <span className="text-white">FREE</span>{" "}
                        <span className="text-red-500">POWER TECH</span>
                    </h1>
                    <div className="h-px bg-gradient-to-r from-slate-700 to-slate-900 mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">

                    <div className="md:col-span-1">
                        <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5442053814937!2d75.86213387355155!3d22.719149279317827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4c8f8f8f8f8f%3A0x0!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">Industries We Serve</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-red-500 transition cursor-pointer">Industrial Manufacturing</li>
                            <li className="hover:text-red-500 transition cursor-pointer">Automotive</li>
                            <li className="hover:text-red-500 transition cursor-pointer">Aerospace</li>
                            <li className="hover:text-red-500 transition cursor-pointer">Engineering & OEMs</li>
                            <li className="hover:text-red-500 transition cursor-pointer">Construction & Heavy Equipment</li>
                            <li className="hover:text-red-500 transition cursor-pointer">Specialized Machinery</li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">Contact</h2>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <p className="text-white font-medium mb-1">Address</p>
                                <p>Indore, Madhya Pradesh, India</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Phone</p>
                                <p className="hover:text-red-500 transition cursor-pointer">+91 8874914529</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Email</p>
                                <p className="hover:text-red-500 transition cursor-pointer">spankaj8874@gmail.com</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Hours</p>
                                <p>Mon-Sun: 10:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-slate-700 to-slate-900 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© 2026 Pankajux India Inc. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-red-500 transition">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}