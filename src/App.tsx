import data from "../data.json";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      <header className="sticky top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 py-4 flex justify-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Levani Kapanadze
        </h1>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {data.map((element) => (
            <div
              key={element.id}
              className={`flex flex-col items-center justify-center 
                w-full max-w-[260px] p-6 rounded-xl shadow-xl 
                transition-transform duration-300 
                hover:-translate-y-1 hover:scale-105 
                ${element.bgGradient}`}
            >
              <img
                src={element.mediaIcon}
                alt="Social media icon"
                className="h-12 w-12 mb-4"
              />

              <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
                {element.mediaTitle}
              </h2>

              <button
                onClick={() => window.open(element.url, "_blank")}
                className="w-full py-2 px-4 rounded-lg bg-white/10 
                  hover:bg-white/20 text-sm sm:text-base font-semibold 
                  tracking-wide uppercase transition-colors"
              >
                Visit Page
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
