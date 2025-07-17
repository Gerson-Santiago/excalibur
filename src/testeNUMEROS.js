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
let cards = {
  carta1: '',
  carta2: '2',
  carta3: '2',
  carta4: '1',
  carta5: '',
  carta6: '1'
};

console.log(`Saída esperada => ${calculateTotal(cards)}`); // Saída: 20

console.log(`Saída esperada => ${ calculateTotal({
  carta1: '',
  carta2: '2',
  carta3: '2',
  carta4: '',
  carta5: '',
  carta6: ''
})}`); // Saída: 10


console.log(`Saída esperada => ${ calculateTotal({
  carta1: '',
  carta2: '2',
  carta3: '2',
  carta4: '',
  carta5: '',
  carta6: '1'
})}`); // Saída: 16

console.log(`Saída esperada => ${ calculateTotal({
  carta1: '',
  carta2: '',
  carta3: '',
  carta4: '',
  carta5: '2',
  carta6: '1'
})}`); // Saída: 16