const socialLinks = [
  {
    title: "Qiita",
    href: "https://qiita.com/habuhabu",
  },
  {
    title: "Zenn",
    href: "https://zenn.dev/habuhabu",
  },
  {
    title: "X",
    href: "https://x.com/habuhabu__",
  },
  {
    title: "GitHub",
    href: "https://github.com/Takeru-Habu",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 md:px-10">
      <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute right-[-6rem] bottom-[-7rem] h-96 w-96 rounded-full bg-gradient-to-br from-sky-200 to-slate-300 opacity-70 blur-2xl" />

      <section className="mx-auto mt-10 w-full max-w-4xl rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_30px_80px_rgba(40,43,48,0.12)] backdrop-blur md:mt-16 md:p-10">
        <h1 className="text-4xl leading-tight font-semibold text-zinc-900 md:text-6xl">
          Takeru Habu
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-700 md:text-lg">
          The University of Osaka, School of Engineering Science, B3.
          <br />
          Intern at Money Forward.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {socialLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/80 bg-white/80 px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(33,36,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-zinc-900">
                  {item.title}
                </p>
                <span className="text-zinc-500 transition group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-700">Mail: takeruhabu@gmail.com</p>
      </section>
    </main>
  );
}
