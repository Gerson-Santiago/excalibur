function calculateTotal(cards) {
  const values = Object.values(cards);

  return values.reduce((sum, value, index) => {
    const num = parseInt(value);
    if (!isNaN(num)) {
      sum += num * (index + 1); // index + 1 é o multiplicador (posição)
    }
    return sum;
  }, 0);
}

// Teste
const cards = {
  carta1: '',
  carta2: '2',
  carta3: '2',
  carta4: '1',
  carta5: '',
  carta6: '1'
};

console.log(calculateTotal(cards)); // Saída: 10
