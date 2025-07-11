export default function Footer() {
  const version = "15.04"

  return (
    <div className="wrapper">
      <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/20 mb-8">
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>|</span>
            <span>Created By</span>
            <span className="font-semibold gradient-text">Muhammad Noviyanto</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">💖</span>
            <span>using Next.js v{version}</span>
          </div>

          {/* <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Portfolio is live and updated regularly</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
