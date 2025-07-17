import { useState } from 'react';

export function useCardCalculator() {
  const [cards, setCards] = useState({
    carta1: '', carta2: '', carta3: '',
    carta4: '', carta5: '', carta6: ''
  });

  const [savedRounds, setSavedRounds] = useState({
    rodada1: null,
    rodada2: null
  });

  const [currentRound, setCurrentRound] = useState(1);

  const calculateTotal = (cards) => {
    return Object.entries(cards).reduce((sum, [_, value], index) => {
      const num = parseInt(value, 10);
      return !isNaN(num) ? sum + num * (index + 1) : sum;
    }, 0);
  };

  const handleInputChange = (cardKey, value) => {
    if (value === '' || /^\d+$/.test(value)) {
      setCards(prev => ({ ...prev, [cardKey]: value }));
    }
  };

  const handleSave = () => {
    const total = calculateTotal(cards);
    if (currentRound === 1) {
      setSavedRounds(prev => ({ ...prev, rodada1: total }));
      setCurrentRound(2);
    } else {
      setSavedRounds(prev => ({ ...prev, rodada2: total }));
    }

    setCards({
      carta1: '', carta2: '', carta3: '',
      carta4: '', carta5: '', carta6: ''
    });
  };

  const handleReset = () => {
    setCards({
      carta1: '', carta2: '', carta3: '',
      carta4: '', carta5: '', carta6: ''
    });
    setSavedRounds({ rodada1: null, rodada2: null });
    setCurrentRound(1);
  };

  const total = calculateTotal(cards);
  const canSave = total > 0;

  return {
    cards, savedRounds, currentRound, total, canSave,
    handleInputChange, handleSave, handleReset
  };
}
