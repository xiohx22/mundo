function calculate() {
  let totalGuarani = parseFloat(document.getElementById('total').value);
  let persons = parseInt(document.getElementById('persons').value);

  if (isNaN(totalGuarani) || isNaN(persons)) {
    alert('Por favor, ingrese valores numéricos válidos.');
    return;
  }

  let amountPerPerson = totalGuarani / persons;
  amountPerPerson = parseInt(amountPerPerson);
  document.getElementById('result').innerHTML = 'Cada persona debe pagar: Gs ' + amountPerPerson;
}
