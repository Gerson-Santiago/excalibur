import { Save, RotateCcw } from 'lucide-react';
import { useCardCalculator } from './useCardCalculator';
import CardInput from './CardInput';
import ResultBox from './ResultBox';

export default function CardCalculator() {
  const {
    cards, savedRounds, currentRound, total, canSave,
    handleInputChange, handleSave, handleReset
  } = useCardCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Calculadora de Cartas</h1>
            <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2">
              <span className="text-purple-700 font-medium">Rodada {currentRound}</span>
            </div>
          </div>

          <CardInput cards={cards} onChange={handleInputChange} />

          <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Total:</span>
              <span className="text-3xl font-bold text-purple-600">{total}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleSave}
              disabled={!canSave}
              className={`flex-1 h-12 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                canSave
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Save size={20} />
              Salvar
            </button>

            <button
              onClick={handleReset}
              className="h-12 px-4 bg-gray-100 text-gray-600 rounded-2xl font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>

        <ResultBox savedRounds={savedRounds} />
      </div>
    </div>
  );
}
