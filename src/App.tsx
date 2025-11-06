import data from "../data.json";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col">
      <header className="sticky top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 py-6 flex justify-center z-50">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Levani Kapanadze
        </motion.h1>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center"
        >
          {data.map((element, i) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.07, y: -8 }}
              className={`relative flex flex-col items-center justify-center w-full max-w-[320px] p-8 rounded-3xl shadow-2xl overflow-hidden ${element.bgGradient}`}
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-inner" />
              <motion.img
                src={element.mediaIcon}
                alt={element.mediaTitle}
                className="h-16 w-16 mb-6 z-10 drop-shadow-2xl"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h2 className="text-2xl font-bold text-center mb-6 z-10 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {element.mediaTitle}
              </h2>
              <motion.button
                onClick={() => window.open(element.url, "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 font-semibold tracking-wide uppercase transition-all duration-300 shadow-lg z-10"
              >
                Visit Page
              </motion.button>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-600/30 to-cyan-400/30 blur-3xl rounded-full" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 blur-3xl rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="py-6 text-center text-white/40 text-sm tracking-wide">
        © {new Date().getFullYear()} Levani Kapanadze. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
