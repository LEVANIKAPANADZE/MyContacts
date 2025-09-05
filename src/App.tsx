import data from "../data.json";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      <header className="sticky top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 py-6 flex justify-center z-50">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center drop-shadow-lg">
          Levani Kapanadze
        </h1>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {data.map((element) => (
            <div
              key={element.id}
              className={`flex flex-col items-center justify-center 
                w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] 
                p-6 md:p-8 rounded-2xl shadow-xl 
                transition-transform duration-300 ease-out
                hover:-translate-y-2 hover:scale-105 
                ${element.bgGradient}`}
            >
              <img
                src={element.mediaIcon}
                alt="Social media icon"
                className="h-14 w-14 md:h-16 md:w-16 mb-6 drop-shadow-lg"
              />

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6">
                {element.mediaTitle}
              </h2>

              <button
                onClick={() => window.open(element.url, "_blank")}
                className="w-full py-3 px-6 rounded-lg bg-white/10 
                  hover:bg-white/20 text-sm sm:text-base md:text-lg font-semibold 
                  tracking-wide uppercase transition-colors cursor-pointer
                  shadow-md"
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
