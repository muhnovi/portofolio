import {
  // SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  // SiReact,
  // SiAngular,
  // SiExpress,
  // SiNodedotjs,
  // SiBootstrap,
  // SiRadixui,
  SiShadcnui,
} from "react-icons/si";

export default function About() {
  const techStack = [
    // { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-black dark:text-white" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
    // { icon: SiReact, name: "React", color: "text-cyan-600" },
    // { icon: SiAngular, name: "Angular", color: "text-red-600" },
    // {
    //   icon: SiExpress,
    //   name: "Express JS",
    //   color: "text-black dark:text-white",
    // },
    // { icon: SiNodedotjs, name: "Node JS", color: "text-green-500" },
    // { icon: SiBootstrap, name: "Bootstrap CSS", color: "text-purple-500" },
    // { icon: SiRadixui, name: "Radix UI", color: "text-black dark:text-white" },
    {
      icon: SiShadcnui,
      name: "Shadcn UI",
      color: "text-black dark:text-white",
    },
  ];

  return (
    <div className="wrapper mb-[10px]">
      <div className="md:pt-[50px] pt-[50px] fade-in">
        <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
          <h1 className="text-4xl font-bold gradient-text leading-tight font-display pb-6">
            About Me
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p className="slide-in">
              Halo semuanya, perkenalkan nama saya Muhammad Noviyanto, saya
              adalah seorang yang berasal dari Sukoharjo. Awal mula saya
              menyukai dunia programming adalah waktu ketika saya smp kenal
              dengan perinject an kemudian saya penasaran terhadap code
              pemrograman, disitulah saya mulai tertarik dengan dunia
              programming.
            </p>

            <p className="slide-in">
              Dan akhirnya saya melanjutkan kuliah di Jurusan IT, dan saya pun
              semakin tertarik untuk mendalami dunia pemrograman. Untuk
              melanjutkan rasa penasaran saya terhadap dunia pemrograman.
            </p>

            <p className="slide-in">
              Melalui portofolio ini saya ingin menunjukkan hasil-hasil project
              yang saya kerjakan dan tim, semoga dapat menginspirasi teman-teman
              yang ingin menjadi programmer juga. dan jangan menyerah, teruslah
              belajar sampai bisa, karena dalam dunia programming tidak ada kata
              menunggu, mereka akan terus berkembang mengikuti perkembangan
              jaman.
            </p>
          </div>
        </div>
      </div>

      <div className="md:pt-[30px] pt-[30px] mb-[20px] fade-in">
        <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Tech Stack Saya:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white/20 dark:bg-gray-800/20 rounded-xl hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <tech.icon
                  className={`w-12 h-12 ${tech.color} mb-3 tech-icon group-hover:animate-bounce`}
                />
                <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">
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
