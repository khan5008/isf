'use client';

export default function PrayerTimes() {
  const prayers = [
    { name: 'Fajr:', adhan: '5:45 am', iqamah: '6:05 am', icon: '☀️' },
    { name: 'Zuhr:', adhan: '12:46 pm', iqamah: '1:01 pm', icon: '☀️' },
    { name: 'Asr:', adhan: '4:02 pm', iqamah: '4:17 pm', icon: '☀️' },
    { name: 'Maghrib:', adhan: '6:30 pm', iqamah: '6:32 pm', icon: '🌙' },
    { name: 'Isha:', adhan: '7:42 pm', iqamah: '7:57 pm', icon: '🌙' },
  ];

  return (
    <div className="backdrop-blur-md bg-black/20 border-2 border-islamic-yellow/60 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md animate-slide-right">
      <div className="bg-islamic-yellow px-6 py-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Namaz Timetable</h2>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {prayers.map((prayer, index) => (
          <div
            key={prayer.name}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between gap-3 text-white pb-3 border-b border-white/30">
              <span className="text-base sm:text-lg font-medium w-20 sm:w-24 shrink-0">{prayer.name}</span>
              <span className="text-islamic-yellow text-base sm:text-xl font-semibold tabular-nums">
                {prayer.adhan}
              </span>
              <span className="text-white text-base sm:text-xl font-semibold tabular-nums">
                {prayer.iqamah}
              </span>
              <span className="text-xl sm:text-2xl shrink-0">{prayer.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
