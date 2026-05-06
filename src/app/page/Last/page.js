import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Last() {
  const socialLinks = [
    {
      icon: CiTwitter,
      name: "MuhFi",
      url: "https://x.com/MuhammadNoviya6",
      label: "X / Twitter",
    },
    {
      icon: IoLogoGithub,
      name: "Muhnov",
      url: "https://github.com/muhnov",
      label: "GitHub",
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
          Let's Connect
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Terhubunglah denganku melalui platform berikut
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Social Media */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Social Media
          </h3>
          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300 group border border-zinc-200 dark:border-zinc-700"
              >
                <social.icon className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white text-sm">{social.name}</p>
                  <p className="text-xs text-zinc-400 font-mono">{social.label}</p>
                </div>
                <svg className="w-4 h-4 ml-auto text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Email
          </h3>
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <SiGmail className="w-4 h-4 text-white dark:text-zinc-900" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 mb-0.5 font-mono uppercase tracking-widest">
                  Email
                </p>
                <a
                  href="mailto:muhnoviyanto815@gmail.com"
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-zinc-500 transition-colors"
                >
                  <span className="hidden sm:inline">muhnoviyanto815@gmail.com</span>
                  <span className="inline sm:hidden">Mail Saya</span>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500 text-center font-mono leading-relaxed">
            Jangan ragu untuk menghubungi saya untuk diskusi project atau kolaborasi.
          </p>
        </div>
      </div>
    </div>
  );
}
