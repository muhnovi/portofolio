"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [teamSlide, setTeamSlide] = useState(0);
  const [selfSlide, setSelfSlide] = useState(0);

  const teamProjects = [
    {
      title: "Jejak Rasa",
      description:
        "Aplikasi mobile untuk tracking kuliner dan rekomendasi restoran",
      image: "/images/jejakrasa.png",
      url: "#",
      githubUrl: "#",
      tech: ["Flutter", "Dart", "Supabase"],
    },
  ];

  const selfProjects = [
    {
      title: "E-Jimpitan",
      description:
        "Aplikasi mobile untuk mengelola iuran jimpitan atau iuran keamanan warga berbasis QR Code. Dilengkapi fitur scan QR per KK, pencatatan pembayaran harian, rekap laporan, hingga berbagi laporan langsung ke WhatsApp.",
      image: "/images/ejimpitan.png",
      url: "#",
      githubUrl: "https://github.com/muhnovi/ejim",
      tech: ["Expo", "React Native", "Firebase"],
    },
    {
      title: "Nero Chain Profile",
      description:
        "Profile berbasis blockchain untuk menampilkan portofolio dan pencapaian secara transparan dan terdesentralisasi",
      image: "/images/nerochain.png",
      url: "https://nero-profile.vercel.app",
      githubUrl: "https://github.com/muhnovi/nrprf",
      tech: ["Next.js"],
    },
    {
      title: "Penduduk Garotan",
      description:
        "Aplikasi web untuk mengelola data penduduk di desa Garotan, Semin, Gunungkidul. Dengan fitur login admin untuk mempermudah mengelola data penduduk, termasuk menambahkan, mengedit, dan menghapus informasi penduduk secara efisien.",
      image: "/images/pendudukgarotan.png",
      url: "https://penduduk.garotanmanunggal.web.id/",
      githubUrl: "https://github.com/muhnovi/dtgrt",
      tech: ["Next.js"],
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='12' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
          {project.title}
        </h3>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full font-mono border border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.url}
            target={project.url !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm flex-1 justify-center ${
              project.url === "#"
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : ""
            }`}
          >
            <span>{project.url === "#" ? "Coming Soon" : "Visit Website"}</span>
            {project.url !== "#" && (
              <svg
                className="w-4 h-4"
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
            )}
          </a>

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
              title="View on GitHub"
            >
              <svg
                className="w-5 h-5 text-zinc-700 dark:text-zinc-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const SliderSection = ({
    title,
    subtitle,
    projects,
    currentSlide,
    setSlide,
  }) => {
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(projects.length / itemsPerSlide);

    const nextSlide = () => {
      setSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
      setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const SectionHeader = () => (
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1 h-10 bg-zinc-900 dark:bg-white rounded-full"></div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              {subtitle}
            </p>
          </div>
        </div>

        {projects.length > itemsPerSlide && (
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </button>
            <div className="text-sm font-mono text-zinc-500 dark:text-zinc-400 px-2">
              {currentSlide + 1} / {totalSlides}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </button>
          </div>
        )}
      </div>
    );

    // If projects are 3 or less, show grid without slider
    if (projects.length <= itemsPerSlide) {
      return (
        <div>
          <SectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      );
    }

    // Show slider for more than 3 projects
    return (
      <div>
        <SectionHeader />

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide,
                    )
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Counter and Dots */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {totalSlides > 1 && (
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setSlide(dotIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex === currentSlide
                      ? "bg-zinc-900 dark:bg-white w-6"
                      : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div className="md:pt-[50px] pt-[50px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 tracking-tight">
            My Projects
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-2xl mx-auto">
            Koleksi project yang telah saya kerjakan baik secara tim maupun
            individual
          </p>
        </div>

        <div className="mb-16">
          <SliderSection
            title="Team Projects"
            subtitle="Proyek yang dikerjakan bersama tim di kantor"
            projects={teamProjects}
            currentSlide={teamSlide}
            setSlide={setTeamSlide}
          />
        </div>

        <div className="mb-16">
          <SliderSection
            title="Personal Projects"
            subtitle="Proyek yang dikerjakan secara mandiri"
            projects={selfProjects}
            currentSlide={selfSlide}
            setSlide={setSelfSlide}
          />
        </div>
      </div>
    </div>
  );
}