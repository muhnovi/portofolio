import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiShadcnui, SiExpo } from "react-icons/si";

export default function About() {
  const techStack = [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiShadcnui, name: "Shadcn UI" },
    { icon: SiExpo, name: "Expo" },
  ];

  return (
    <div className="wrapper mb-[10px]">
      <div className="md:pt-[50px] pt-[50px]">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            {/* Profile Image Section */}
            <div className="relative group flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-lg relative z-10">
                <Image
                  src="/images/Muhammad_Noviyanto.png"
                  alt="Muhammad Noviyanto"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-400 dark:from-zinc-500 dark:via-zinc-300 dark:to-zinc-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition duration-700 animate-pulse"></div>

              {/* Decorative Dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-ping opacity-75 delay-300"></div>
            </div>

            {/* Title and Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white leading-tight pb-2 tracking-tight">
                Tentang Saya
              </h1>

              {/* <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  siap untuk magang
                </span>
              </div> */}

              <div className="space-y-5 text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                <p>
                  Halo, Perkenalkan saya Muhammad Noviyanto — seorang Frontend
                  Developer yang berasal dari Sukoharjo.
                </p>
                <p>
                  Ketertarikan saya terhadap dunia pemrograman dimulai sejak
                  SMA, ketika rasa penasaran membawa saya untuk mulai mengenal
                  dan mempelajari kode pemrograman. Dari situ, semangat belajar
                  saya terus tumbuh hingga akhirnya saya memutuskan untuk
                  melanjutkan studi di Jurusan Teknik Informatika, di mana saya
                  semakin mendalami dunia ini.
                </p>
                <p>
                  Melalui portofolio ini, saya ingin menampilkan hasil karya
                  yang telah saya kerjakan, baik secara individu maupun bersama
                  tim. Semoga dapat menjadi inspirasi bagi teman-teman yang juga
                  ingin terjun ke dunia pemrograman. Jangan pernah menyerah —
                  teruslah belajar, karena dunia teknologi akan selalu
                  berkembang dan selalu ada hal baru yang bisa dipelajari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pt-[30px] pt-[30px] mb-[20px]">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            Tech Stack Saya
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 group border border-zinc-200 dark:border-zinc-700"
              >
                <tech.icon className="w-10 h-10 text-zinc-900 dark:text-white mb-3 group-hover:animate-bounce" />
                <p className="text-xs font-medium text-center text-zinc-600 dark:text-zinc-400 font-mono">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
