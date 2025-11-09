document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("simuladorForm");
  const resultado = document.getElementById("resultado");
  const economiaEl = document.getElementById("economia");
  const porcentagemEl = document.getElementById("porcentagem");
  const ctx = document.getElementById("graficoEconomia");

  let grafico = null;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const consumo = parseFloat(document.getElementById("consumo").value);
    const custo = parseFloat(document.getElementById("custo").value);
    const produtivo = parseFloat(document.getElementById("produtivo").value);

    if (isNaN(consumo) || isNaN(custo) || isNaN(produtivo)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const gastoMensal = consumo * custo;
    const creditoICMS = gastoMensal * (produtivo / 100) * 0.18; // 18% de ICMS
    const economiaPercent = (creditoICMS / gastoMensal) * 100;

    economiaEl.textContent = `R$ ${creditoICMS.toFixed(2)}`;
    porcentagemEl.textContent = `${economiaPercent.toFixed(1)}%`;

    resultado.classList.remove("hidden");

    // gráfico
    const data = {
      labels: ["Gasto Total", "Crédito ICMS"],
      datasets: [{
        label: "Economia (R$)",
        data: [gastoMensal, creditoICMS],
        backgroundColor: ["#6fc195", "#153e2e"]
      }]
    };

    if (grafico) grafico.destroy();

    grafico = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
});
