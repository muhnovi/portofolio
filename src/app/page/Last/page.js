import Link from "next/link";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const socialLinks = [
    // {
    //   icon: CiFacebook,
    //   name: "Giri Diwa Adam",
    //   url: "https://www.facebook.com/giri.diwa.1/",
    //   color: "hover:text-blue-600",
    //   bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    // },
    {
      icon: CiTwitter,
      name: "MuhFi",
      url: "https://x.com/MuhammadNoviya6",
      color: "hover:text-cyan-500",
      bgColor: "hover:bg-cyan-50 dark:hover:bg-cyan-900/20",
    },
    {
      icon: IoLogoGithub,
      name: "Muhnov",
      url: "https://github.com/muhnov",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      bgColor: "hover:bg-gray-50 dark:hover:bg-gray-800/20",
    },
    // {
    //   icon: IoLogoLinkedin,
    //   name: "Giri Diwa Adam",
    //   url: "https://www.linkedin.com/in/giri-diwa-adam/",
    //   color: "hover:text-blue-700",
    //   bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    // },
  ];

  return (
    <div className="wrapper">
      <div className="md:pt-[50px] pt-[50px] fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text leading-tight font-display mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Terhubunglah denganku melalui platform berikut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Social Media Section */}
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Social Media
              </h2>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${social.bgColor} ${social.color} group hover:scale-105 hover:shadow-lg`}
                >
                  <social.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{social.name}</span>
                  <svg
                    className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <SiGmail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Email
              </h2>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SiGmail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Email Address
                  </p>
                  <a
                    href="mailto:muhnoviyanto815@gmail.com"
                    className="text-sm font-semibold text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {/* Tampilkan email lengkap di layar sm ke atas */}
                    <span className="hidden sm:inline">
                      muhnoviyanto815@gmail.com
                    </span>
                    {/* Tampilkan singkatan di mobile */}
                    <span className="inline sm:hidden">Mail Saya</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800/30">
              <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                💡 Jangan ragu untuk menghubungi saya untuk diskusi project atau
                kolaborasi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
