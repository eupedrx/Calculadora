const primeiroNome = prompt("Informe o nome");
const sobrenome = prompt("Informe o sobrenome");
const estudo = prompt("Campo de Estudo");
const anodenascimento = prompt("Informe a data de nascimento");

alert(
  "Cadastro realizado com sucesso.\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    estudo +
    "\nIdade: " +
    (2022 - anodenascimento)
);
