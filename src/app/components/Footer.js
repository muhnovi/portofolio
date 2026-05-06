export default function Footer() {
  const version = "15.04"

  return (
    <div className="wrapper">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl px-6 py-5 border border-zinc-200 dark:border-zinc-800 mb-8">
        <div className="flex flex-col justify-center items-center text-center space-y-1">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <span>Created by</span>
            <span className="font-semibold text-zinc-900 dark:text-white">Muhammad Noviyanto</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600 font-mono">
            <span>Built with Next.js v{version}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
