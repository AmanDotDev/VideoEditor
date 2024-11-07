"use client"
import SubmitBtn from "@/components/shared/SubmitBtn";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {

    const router = useRouter()
    
    return (
        <>
            <div className="flex min-h-full bg-zinc-900 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-300">
                        Create Account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-300">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-300">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-300">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    required
                                    autoComplete="confirm-Password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <SubmitBtn />

                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        <button onClick={(e )=> router.push("/Login") } className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Already have an Account ?
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}
