export default function ResultBox({ savedRounds }) {
  if (savedRounds.rodada1 === null && savedRounds.rodada2 === null) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Resultados Salvos</h2>
      <div className="space-y-3">
        {savedRounds.rodada1 !== null && (
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl border border-green-200">
            <span className="text-green-700 font-medium">Rodada 1</span>
            <span className="text-2xl font-bold text-green-600">{savedRounds.rodada1}</span>
          </div>
        )}
        {savedRounds.rodada2 !== null && (
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-200">
            <span className="text-blue-700 font-medium">Rodada 2</span>
            <span className="text-2xl font-bold text-blue-600">{savedRounds.rodada2}</span>
          </div>
        )}
      </div>

      {savedRounds.rodada1 !== null && savedRounds.rodada2 !== null && (
        <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border border-yellow-200">
          <div className="flex justify-between items-center">
            <span className="text-orange-700 font-medium">Total Geral</span>
            <span className="text-2xl font-bold text-orange-600">
              {savedRounds.rodada1 + savedRounds.rodada2}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
