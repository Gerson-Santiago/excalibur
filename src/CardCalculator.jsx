// import React, { useState } from 'react';
// import { Save, RotateCcw } from 'lucide-react';

// export default function CardCalculator() {
//   const [cards, setCards] = useState({
//     carta1: '',
//     carta2: '',
//     carta3: '',
//     carta4: '',
//     carta5: '',
//     carta6: ''
//   });
  
//   const [savedRounds, setSavedRounds] = useState({
//     rodada1: null,
//     rodada2: null
//   });
  
//   const [currentRound, setCurrentRound] = useState(1);
  
//   const cardNames = {
//     carta1: 'Cartinha 1',
//     carta2: 'Cartinha 2',
//     carta3: 'Cartinha 3',
//     carta4: 'Cartinha 4',
//     carta5: 'Cartinha 5',
//     carta6: 'Cartinha 6'
//   };
//   // O ideal é fazer a multiplicação dos valores das cartas aqui.
//   const calculateTotal = (cards) => {
//     return Object.entries(cards).reduce((sum, [_, value], index) => {
//       const num = parseInt(value, 10);
//       return !isNaN(num) ? sum + num * (index + 1) : sum;
//     }, 0);
//   };

  
//   const handleInputChange = (cardKey, value) => {
//     // Apenas números
//     if (value === '' || /^\d+$/.test(value)) {
//       setCards(prev => ({
//         ...prev,
//         [cardKey]: value
//       }));
//     }
//   };
  
//   const handleSave = () => {
//     const total = calculateTotal(cards);
    
//     if (currentRound === 1) {
//       setSavedRounds(prev => ({
//         ...prev,
//         rodada1: total
//       }));
//       setCurrentRound(2);
//     } else {
//       setSavedRounds(prev => ({
//         ...prev,
//         rodada2: total
//       }));
//     }
    
//     // Limpar campos após salvar
//     setCards({
//       carta1: '',
//       carta2: '',
//       carta3: '',
//       carta4: '',
//       carta5: '',
//       carta6: ''
//     });
//   };
  
//   const handleReset = () => {
//     setCards({
//       carta1: '',
//       carta2: '',
//       carta3: '',
//       carta4: '',
//       carta5: '',
//       carta6: ''
//     });
//     setSavedRounds({
//       rodada1: null,
//       rodada2: null
//     });
//     setCurrentRound(1);
//   };
  
//   const total = calculateTotal(cards);
//   const canSave = total > 0;
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
//       <div className="max-w-md mx-auto">
//         <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
//           <div className="text-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">
//               Calculadora de Cartas
//             </h1>
//             <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2">
//               <span className="text-purple-700 font-medium">
//                 Rodada {currentRound}
//               </span>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             {Object.entries(cardNames).map(([key, name]) => (
//               <div key={key} className="flex items-center space-x-3">
//                 <label className="text-gray-700 font-medium w-24 text-sm">
//                   {name}
//                 </label>
//                 <div className="flex-1 relative">
//                   <input
//                     type="number"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     value={cards[key]}
//                     onChange={(e) => handleInputChange(key, e.target.value)}
//                     placeholder="0"
//                     className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl text-center text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-700 font-medium">Total:</span>
//               <span className="text-3xl font-bold text-purple-600">
//                 {total}
//               </span>
//             </div>
//           </div>
          
//           <div className="mt-6 flex gap-3">
//             <button
//               onClick={handleSave}
//               disabled={!canSave}
//               className={`flex-1 h-12 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
//                 canSave
//                   ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg'
//                   : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//               }`}
//             >
//               <Save size={20} />
//               Salvar
//             </button>
            
//             <button
//               onClick={handleReset}
//               className="h-12 px-4 bg-gray-100 text-gray-600 rounded-2xl font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
//             >
//               <RotateCcw size={20} />
//             </button>
//           </div>
//         </div>
        
//         {(savedRounds.rodada1 !== null || savedRounds.rodada2 !== null) && (
//           <div className="bg-white rounded-3xl shadow-xl p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
//               Resultados Salvos
//             </h2>
            
//             <div className="space-y-3">
//               {savedRounds.rodada1 !== null && (
//                 <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl border border-green-200">
//                   <span className="text-green-700 font-medium">Rodada 1</span>
//                   <span className="text-2xl font-bold text-green-600">
//                     {savedRounds.rodada1}
//                   </span>
//                 </div>
//               )}
              
//               {savedRounds.rodada2 !== null && (
//                 <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-200">
//                   <span className="text-blue-700 font-medium">Rodada 2</span>
//                   <span className="text-2xl font-bold text-blue-600">
//                     {savedRounds.rodada2}
//                   </span>
//                 </div>
//               )}
//             </div>
            
//             {savedRounds.rodada1 !== null && savedRounds.rodada2 !== null && (
//               <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border border-yellow-200">
//                 <div className="flex justify-between items-center">
//                   <span className="text-orange-700 font-medium">Total Geral</span>
//                   <span className="text-2xl font-bold text-orange-600">
//                     {savedRounds.rodada1 + savedRounds.rodada2}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }