"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

interface Props { }

function SubmitBtn(props: Props) {
    const { } = props

    const router = useRouter()

    return (
        <div>
            <button
                onClick={() => router.push("/editor")}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
            </button>
        </div>
    )
}

export default SubmitBtn
