import Link from "next/link";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className="py-8 my-8 md:pt-[50px] pt-[50px]">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6 tracking-tight">
            Contact
          </h1>
          
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 text-sm">
            Terhubunglah Denganku :
          </p>

          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
              Social Media :
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                <div className="flex items-center gap-3">
                  <CiFacebook className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  <Link href="" className="text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    unknow
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                <div className="flex items-center gap-3">
                  <CiTwitter className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  <Link href="https://x.com/MuhammadNoviya6" className="text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    MuhFi
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                <div className="flex items-center gap-3">
                  <IoLogoGithub className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  <Link href="https://github.com/muhnov/" className="text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:text-zinc-900 dark:hover:text-white transition-colors">
                    Muhnov
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                <div className="flex items-center gap-3">
                  <IoLogoLinkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  <Link href="" className="text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    unkonw
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
              Atau Bisa Lewat :
            </h2>
            
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 inline-flex items-center gap-3">
              <SiGmail className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              <span className="text-zinc-600 dark:text-zinc-400 font-medium text-sm font-mono">
                muhnoviyanto815@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}