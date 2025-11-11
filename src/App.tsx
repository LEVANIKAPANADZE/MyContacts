import { motion } from "framer-motion";
import data from "../data.json";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0d0d15] to-black text-white flex flex-col overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute w-[40vmax] h-[40vmax] rounded-full blur-[160px] mix-blend-screen opacity-70"
          style={{ background: "linear-gradient(135deg,#6366f1,#06b6d4)" }}
          initial={{ x: -200, y: -120, scale: 0.9 }}
          animate={{ x: -100, y: -180, scale: 1.05 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[32vmax] h-[32vmax] rounded-full blur-[140px] mix-blend-screen opacity-60 right-[-5vmax] bottom-[-10vmax]"
          style={{ background: "linear-gradient(135deg,#f97316,#e11d48)" }}
          initial={{ x: 80, y: 180, scale: 0.9 }}
          animate={{ x: 120, y: 140, scale: 1.1 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <header className="sticky top-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/10 py-6 flex flex-col items-center z-40 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: [0, -3, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 3,
          }}
          whileHover={{
            scale: 1.03,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.4 },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight 
            bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 
            bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(79,70,229,0.4)]
            cursor-pointer transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(99,102,241,0.8)]"
        >
          Levani Kapanadze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-2 text-sm sm:text-base text-white/60 tracking-wide"
        >
          curated links · projects · socials
        </motion.p>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center"
        >
          {data.map((element, i) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
              whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow: "0 0 40px rgba(99,102,241,0.4)",
              }}
              className={`relative w-full max-w-[320px] p-8 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.05)] 
                bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-500`}
              onClick={() =>
                window.open(element.url, "_blank", "noopener,noreferrer")
              }
            >
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="rounded-full p-3 bg-white/10 ring-1 ring-white/10">
                  <img
                    src={element.mediaIcon}
                    alt={element.mediaTitle}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-transparent">
                  {element.mediaTitle}
                </h3>
                <p className="text-sm text-white/70 text-center max-w-[260px] leading-relaxed">
                  {element.description || element.mediaTitle}
                </p>
                <div className="w-full flex items-center gap-3 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(element.url, "_blank", "noopener,noreferrer");
                    }}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 
                      hover:from-cyan-400 hover:to-purple-400 font-semibold tracking-wide uppercase 
                      text-sm shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400/30"
                  >
                    Visit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        navigator.clipboard?.writeText(element.url);
                      } catch {}
                    }}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition-all duration-300"
                    aria-label="Copy link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 17H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9a2 2 0 1 1 2 2v2"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="13"
                        height="13"
                        rx="2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="absolute -right-10 -top-10 w-44 h-44 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(6,182,212,0.5))",
                }}
              />
              <div
                className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full opacity-25 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.5), rgba(225,29,72,0.4))",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="py-6 text-center text-white/50 text-sm tracking-wide border-t border-white/10 backdrop-blur-lg">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-400">Levani Kapanadze</span>
      </footer>
    </div>
  );
}
