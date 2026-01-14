export default function SignUp() {
    return (
        <section className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-center text-gray-900 tracking-tight">
                        Sign Up
                    </h1>
                    <p className="text-center text-gray-600 mt-2">Create your eXtrack account</p>
                </header>

                <form className="flex flex-col gap-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="John"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="+1 234 567 8900"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Address Section */}
                    <div className="border-t pt-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Address Details</h2>

                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="country" className="text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="India"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="state" className="text-sm font-medium text-gray-700">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="Kerala"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="city" className="text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="Thiruvananthapuram"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="apartment" className="text-sm font-medium text-gray-700">
                                        Apartment/House No.
                                    </label>
                                    <input
                                        type="text"
                                        id="apartment"
                                        name="apartment"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="Apt 123"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="landmark" className="text-sm font-medium text-gray-700">
                                        Landmark
                                    </label>
                                    <input
                                        type="text"
                                        id="landmark"
                                        name="landmark"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="Near Park"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                                    Pincode
                                </label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="695001"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-4 font-bold py-3 px-8 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </section>
    )
}