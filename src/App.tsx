import data from "../data.json";

function App() {
  return (
    <div>
      <header>
        <h1>Levani Kapanadze</h1>
      </header>
      <div
        className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      >
        <div>
          {data.map((element) => {
            return (
              <div key={element.id}>
                <img
                  src={`${element.mediaIcon}`}
                  alt="Social media icon"
                  className="h-[40px] w-[40px]"
                />

                <h1>{element.mediaTitle}</h1>

                <button onClick={() => window.open(element.url, "_blank")}>
                  VISIT PAGE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
