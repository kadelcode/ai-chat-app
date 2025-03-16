export default function Contact() {
    return (
        <section id="contact" className="py-16 px-4 md:px-0 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-[#1e2939] mb-12">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <form className="space-y-4">
                            {/* Name div */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#364153]">
                                    Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="mt-2 block w-full p-3 border-[#d1d5dc] shadow-sm border-2 focus:border-[#2b7fff]"
                                  placeholder="Your Name"
                                  autoComplete="true"
                                  style={{ border: "2px solid #2b7fff"}}
                                />
                            </div>

                            {/* Email div */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#364153]">
                                    Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="mt-2 block w-full p-3 shadow-sm border-2 focus:border-[#2b7fff]"
                                  placeholder="Your Email"
                                  autoComplete="email"
                                  style={{ border: "2px solid #2b7fff"}}
                                />
                            </div>

                            {/* Message div */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#364153]">
                                    Message
                                </label>
                                <textarea
                                  id="message"
                                  rows={5}
                                  className="mt-2 block w-full p-3 rounded-md border-[#d1d5dc] shadow-sm border-2 focus:border-[#2b7fff]"
                                  style={{ border: "2px solid #2b7fff"}}
                                  ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="bg-[#155dfc] hover:bg-[#1447e6] text-white font-bold py-3 px-6 rounded-full cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="text-[#364153]">
                        <h3 className="text-xl font-semibold mb-4">Our Information</h3>
                        <p className="mb-2">
                            <strong>Address:</strong> 123 Main Street, Anytown, CA 12345
                        </p>
                        <p className="mb-2">
                            <strong>Email:</strong> info@novachat.com
                        </p>
                        <p className="mb-2">
                            <strong>Phone:</strong> +1 (123) 456-7890
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-[#2b7fff] hover:text-[#1447e6]">
                                    <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.665l-.35 2.913h-2.315V21.88C20.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}