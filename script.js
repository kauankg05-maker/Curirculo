document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('printBtn');

  printBtn.addEventListener('click', () => {
    window.print();
  });

  // Opcional: feedback visual ao clicar
  printBtn.addEventListener('mousedown', () => {
    printBtn.style.transform = 'scale(0.98)';
  });

  printBtn.addEventListener('mouseup', () => {
    printBtn.style.transform = 'scale(1)';
  });
});