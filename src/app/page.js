import Link from "next/link"
import Last from "./page/Last/page"

export default function Home() {
  const fullname = `Muhammad Noviyanto`

  return (
    <div className="wrapper">
      <div className="py-8 my-8 md:pt-[50px] pt-[50px] fade-in">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 pb-6 slide-in">Hallo Dunia, Saya 👋</p>

          <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight font-display mb-6 floating">
            {fullname}
          </h1>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Saya Pemula
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Suka Tantangan dan Membantu sesama.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-xl border border-red-200 dark:border-red-800/50">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 dark:text-red-300 font-medium">Belum Bersedia Untuk Di Rekrut</span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down-to-line w-5 h-5"
            >
              <path d="M12 17V3" />
              <path d="m6 11 6 6 6-6" />
              <path d="M19 21H5" />
            </svg>
            Download My CV
          </Link>
        </div>
      </div>

      <div className="fade-in">
        <Last />
      </div>
    </div>
  )
}
