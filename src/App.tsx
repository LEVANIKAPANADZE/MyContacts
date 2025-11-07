import { motion } from "framer-motion";
import data from "../data.json";

export default function App() {
  return (
    <div
      className="relative min-h-screen 
    bg-gradient-to-br from-gray-950 via-gray-900 to-black 
    text-white flex flex-col overflow-hidden"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute w-[40vmax] h-[40vmax] rounded-full blur-3xl mix-blend-screen opacity-60"
          style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
          initial={{ x: -200, y: -100, scale: 0.8 }}
          animate={{ x: -100, y: -160, scale: 1.05 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[30vmax] h-[30vmax] rounded-full blur-3xl mix-blend-screen opacity-50 right-[-5vmax] bottom-[-10vmax]"
          style={{ background: "linear-gradient(135deg,#f97316,#e11d48)" }}
          initial={{ x: 100, y: 200, scale: 0.9 }}
          animate={{ x: 140, y: 160, scale: 1.1 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <header className="sticky top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/8 py-6 flex flex-col items-center z-40">
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 4,
          }}
          whileHover={{
            y: [0, -10, 0, -6, 0],
            rotate: [0, -2, 0, 2, 0],
            transition: { duration: 0.6 },
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-md cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Levani Kapanadze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="mt-2 text-sm text-white/60"
        >
          curated links · projects · socials
        </motion.p>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center"
        >
          {data.map((element, i) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative w-full max-w-[320px] p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden ${element.bgGradient} cursor-pointer`}
              style={{ WebkitTapHighlightColor: "transparent" }}
              role="button"
              tabIndex={0}
              onClick={() =>
                window.open(element.url, "_blank", "noopener,noreferrer")
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  window.open(element.url, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="absolute inset-0 bg-white/3 backdrop-blur-md rounded-3xl border border-white/6" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="rounded-full p-2 bg-white/6 ring-1 ring-white/6">
                  <img
                    src={element.mediaIcon}
                    alt={`${element.mediaTitle} icon`}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  {element.mediaTitle}
                </h3>
                <p className="text-xs text-white/70 text-center max-w-[260px]">
                  {element.description || element.mediaTitle}
                </p>
                <div className="w-full flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(element.url, "_blank", "noopener,noreferrer");
                    }}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 font-semibold tracking-wide uppercase text-sm sm:text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20 cursor-pointer"
                  >
                    Visit Page
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        navigator.clipboard?.writeText(element.url);
                      } catch {}
                    }}
                    className="p-3 rounded-xl bg-white/6 hover:bg-white/8 ring-1 ring-white/6 cursor-pointer"
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
                        d="M8 17H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2"
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
                className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-20 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(6,182,212,0.6))",
                }}
              />
              <div
                className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full opacity-18 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.5), rgba(225,29,72,0.5))",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="py-6 text-center text-white/40 text-sm tracking-wide">
        © {new Date().getFullYear()} Levani Kapanadze
      </footer>
    </div>
  );
}
