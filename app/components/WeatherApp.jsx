"use client";
const weatherData = {
  date: "Monday, 04 September",
  city: "Jakarta",
  wind: "6.69/ms",
  humidity: "70%",
  clouds: "40%",
  feel: "40%",
  forecast: [
    { day: "Tuesday", temp: "26°", type: "Cloudy" },
    { day: "Wednesday", temp: "14°", type: "Rainy" },
    { day: "Thursday", temp: "25°", type: "Cloudy" },
    { day: "Friday", temp: "32°", type: "Clear" },
    { day: "Saturday", temp: "22°", type: "Cloudy" },
  ],
};

const getIcon = (type) => {
  switch (type) {
    case "Cloudy":
      return "☁️";
    case "Rainy":
      return "🌧️";
    case "Clear":
      return "☀️";
    default:
      return "";
  }
};

export default function WeatherApp() {
  const weatherType = "Cloudy";
  const temp = 29;

  const bgColor = {
    Cloudy: "bg-neutral-800 text-white",
    Rainy: "bg-indigo-900 text-white",
    Clear: "bg-yellow-400 text-white",
  }[weatherType];

  return (
    <main className={`min-h-screen p-10 transition-colors ${bgColor}`}>
      <div className="max-w-xl mx-auto space-y-6">

        {/* Search bar */}
        <div className="flex items-center gap-2">
          <input
            placeholder="Insert your city name"
            className="w-full p-2 rounded text-black"
          />
          <span className="text-xl">🔍</span>
        </div>

        {/* Date & City */}
        <div>
          <p className="text-sm">{weatherData.date}</p>
          <h1 className="text-2xl font-bold">{weatherData.city}</h1>
        </div>

        {/* Current Weather */}
        <div className="text-6xl font-bold flex items-center gap-4 border border-white/40 p-4 rounded-xl font-mono">
          {temp}° <span className="text-5xl">{getIcon(weatherType)}</span>
        </div>
        <p className="text-lg capitalize">{weatherType}</p>

        {/* Weather Details */}
        <div className="grid grid-cols-4 gap-4 text-sm border border-white/40 p-4 rounded-xl text-center">
          <div>
            <div className="text-2xl">💨</div>
            <p>{weatherData.wind}</p>
            <p className="text-xs mt-1">Wind</p>
          </div>
          <div>
            <div className="text-2xl">💧</div>
            <p>{weatherData.humidity}</p>
            <p className="text-xs mt-1">Humidity</p>
          </div>
          <div>
            <div className="text-2xl">☁️</div>
            <p>{weatherData.clouds}</p>
            <p className="text-xs mt-1">Clouds</p>
          </div>
          <div>
            <div className="text-2xl">🌡️</div>
            <p>{weatherData.feel}</p>
            <p className="text-xs mt-1">Real Feel</p>
          </div>
        </div>

        {/* Forecast */}
        <div>
          <p className="font-semibold mb-2">Weekly Forecast</p>
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {weatherData.forecast.map((day, i) => (
              <div
                key={i}
                className="bg-black/20 p-2 rounded border border-white/40"
              >
                <p className="font-medium">{day.day}</p>
                <div className="text-xl font-bold">
                  {getIcon(day.type)} {day.temp}
                </div>
                <p className="capitalize">{day.type}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
