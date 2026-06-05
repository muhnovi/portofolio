import Link from "next/link"
import Last from "./page/Last/page"

export default function Home() {
  const fullname = `Muhammad Noviyanto`

  return (
    <div className="wrapper">
      <div className="py-8 my-8 md:pt-[50px] pt-[50px]">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 pb-6 tracking-widest uppercase">
            Hallo, Saya
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6 floating tracking-tight">
            {fullname}
          </h1>

          <div className="space-y-3 mb-8">
            <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
              Frontend Developer
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl text-sm">
              Mahasiswa Teknik Informatika Semester 6 — Universitas Duta Bangsa Surakarta
            </p>
          </div>

          <div className="flex items-center gap-3 mb-8 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium text-sm font-mono">
              Siap untuk magang
            </span>
          </div>

          <Link
            href="/CV_Muhammad_Noviyanto.pdf"
            className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 17V3" />
              <path d="m6 11 6 6 6-6" />
              <path d="M19 21H5" />
            </svg>
            Download My CV
          </Link>
        </div>
      </div>

      <div>
        <Last />
      </div>
    </div>
  )
}
