export default function CardInput({ cards, onChange }) {
  const cardNames = {
    carta1: 'Cartinha 1', carta2: 'Cartinha 2',
    carta3: 'Cartinha 3', carta4: 'Cartinha 4',
    carta5: 'Cartinha 5', carta6: 'Cartinha 6'
  };

  return (
    <div className="space-y-4">
      {Object.entries(cardNames).map(([key, name]) => (
        <div key={key} className="flex items-center space-x-3">
          <label className="text-gray-700 font-medium w-24 text-sm">{name}</label>
          <div className="flex-1 relative">
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={cards[key]}
              onChange={(e) => onChange(key, e.target.value)}
              placeholder="0"
              className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl text-center text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
