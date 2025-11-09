function calcularCredito() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  const resultado = document.getElementById('resultado');
  
  if (isNaN(consumo) || consumo <= 0) {
    resultado.textContent = "Por favor, insira um valor válido.";
    return;
  }

  const credito = consumo * 0.15; // 15% de crédito fictício
  resultado.textContent = `Seu crédito estimado de ICMS é de R$ ${credito.toFixed(2)}.`;
}
