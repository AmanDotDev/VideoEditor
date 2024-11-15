'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex z-50 h-14 items-center justify-between bg-zinc-900 px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="text-blue-500">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
              />
              <circle cx={12} cy={12} r={3} />
            </svg>
          </div>
          <span className="text-lg text-white">Editor</span>
        </Link>
        <nav className="hidden items-center ml-4 gap-6 text-sm lg:flex">
          <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
            Projects
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-yellow-500 lg:inline-flex">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </button>
        <button className="overflow-hidden rounded-full border border-white/10" aria-label="Toggle user menu">
          <Image
            src="/placeholder.svg"
            alt="User avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
        </button>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 top-14 bg-zinc-900 p-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/projects"
              className="text-white/60 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/calendar"
              className="text-white/60 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Calendar
            </Link>
            <button className="mt-2 inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-yellow-500">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Project
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}