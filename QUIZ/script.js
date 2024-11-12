const questions = [
// 1
    {
        question: "El valor absoluto (o módulo) de un número describen la distancia entre ese número y el cero, sin importar el signo del número. <br><br>Por ejemplo:<br>El valor absoluto de -13 es: 13<br>El valor absoluto de +53 es: 53<br>El valor absoluto de -174 es: 174<br><br>Ahora responde: ¿Cuál es el valor absoluto o módulo del número: -256?",
        options: ['-256', '256', '-13', '0'],
        correctAnswer: '256',
        correctGif: "https://c.tenor.com/Kq_bAI7JRDkAAAAd/tenor.gif", //Gatito salta happy
        incorrectGif: "https://c.tenor.com/dHVat9e2S38AAAAC/tenor.gif" //Ratita ojona la shorazion
      },
// 2
    {
        question: '¿Cuál es el valor absoluto (o módulo) del número: +36?',
        options: ['-36', '36', '+36', '0'],
        correctAnswer: '36',
        correctGif: "https://c.tenor.com/Lbrr3HR3CnkAAAAd/tenor.gif", //Snoop dog bailecito
        incorrectGif: "https://media.tenor.com/7zmfFmzCUJIAAAAi/sad-spongebob.gif" //Bob esponja la shorazion
      },
// 3
    {
        question: '¿Cuál es el valor absoluto (o módulo) del número: -878?',
        options: ['-878', '+878', '0', '878'],
        correctAnswer: '878',
        correctGif: "https://media1.tenor.com/m/KmO0ZsSmxsEAAAAd/celebration-dance.gif", 
        incorrectGif: ""
      },
// 4
        {
        question: 'Al SUMAR (+) dos números que tienen el mismo signo, primero se deben sumar sus valores absolutos y luego al resultado se le agrega el mismo signo de los números.<br><br>Por ejemplo:<br> (+3) + (+2) = +5 (Es positivo porque los dos números de la suma son positivos) <br> -4 + (-1) = -5 (Es negativo porque los dos números de la suma son negativos) <br><br>Ahora responde: ¿Cuál es el resultado de sumar: (+12) + (+5)?',
        options: ['+17', '-17', '+15', '-15'],
        correctAnswer: '+17',
        correctGif: "", 
        incorrectGif: ""
      },
// 5
          {
        question: '¿Cuál es el resultado de sumar: (-74) + (-6)?',
        options: ['+79', '-76', '-80', '+80'],
        correctAnswer: '-80',
        correctGif: "", 
        incorrectGif: ""
      },
// 6    
          {
        question: '¿Cuál es el resultado de sumar: (-25) + (-15)?',
        options: ['+35', '-40', '+45', '-50'],
        correctAnswer: '-40',
        correctGif: "", 
        incorrectGif: ""
      },
// 7
    {
        question: 'Para SUMAR dos números con signos DIFERENTES, primero se toman sus valores absolutos y se resta el menor del mayor. Luego, se asigna al resultado el signo del número que tenga el valor absoluto más grande.<br><br>Por ejemplo:<br><br>(+5) + (-6)<br>Identificar los valores absolutos:<br>El valor absoluto de +5 es 5.<br>El valor absoluto de −6 es 6.<br>Restar los valores absolutos:<br>Se resta el menor del mayor: 6−5=1.<br>Colocar el signo del número con mayor valor absoluto:<br>El número con mayor valor absoluto es −6, por lo que el resultado tendrá un signo negativo.<br><br>Resultado: +5 + (−6) = −1<br><br>Ahora responde:<br><br>+23 + (-31) =',
        options: ['-7', '+7', '-8', '+8'],
        correctAnswer: '-8',
        correctGif: "", 
        incorrectGif: ""
      },
// 8     
    {
        question: '¿Cuál es el resultado de sumar: (-14) + (+18)?',
        options: ['-4', '-6', '+6', '+4'],
        correctAnswer: '+4',
        correctGif: "", 
        incorrectGif: ""
      },
// 9   
    {
        question: '¿Cuál es el resultado de sumar: (-25) + (+30)?',
        options: ['+5', '-15', '+15', '-5'],
        correctAnswer: '+5',
        correctGif: "", 
        incorrectGif: ""
      },
// 10
          {
        question: '¿Cuál es el resultado de sumar: (+45) + (-20)?',
        options: ['-25', '+15', '+25', '-15'],
        correctAnswer: '+25',
        correctGif: "", 
        incorrectGif: ""
      },
// 11 
          {
        question: 'Al MULTIPLICAR dos números con el MISMO signo, el producto siempre será POSITIVO. <br>Esto se debe a que cuando ambos números tienen el mismo signo, su multiplicación da como resultado un número positivo.<br>+ x + = + <br> - x - = + <br><br>Por ejemplo:<br><br>(+4) × (+3)<br>Multiplicamos los valores absolutos:<br>4 × 3 = 12.<br>Como ambos números tienen signo positivo, el producto será positivo.<br><br>Resultado: (+4) × (+3) = +12<br><br>Ahora responde:<br><br>(-6) × (-2) =',
        options: ['-12', '-4', '+21', '+12'],
        correctAnswer: '+12',
        correctGif: "", 
        incorrectGif: ""
      },
// 12
          {
        question: '¿Cuál es el resultado de multiplicar: (+6) × (+4)?',
        options: ['+24', '+42', '-12', '+16'],
        correctAnswer: '+24',
        correctGif: "", 
        incorrectGif: ""
      },
// 13
          {
        question: '¿Cuál es el resultado de multiplicar: (-3) × (-5)?',
        options: ['+15', '-35', '-40', '-45'],
        correctAnswer: '+15',
        correctGif: "", 
        incorrectGif: ""
      },
// 14
        {
        question: 'Al MULTIPLICAR dos números con signos DISTINTOS, el producto siempre será NEGATIVO. <br>Esto se debe a que cuando los números tienen signos diferentes, su multiplicación da como resultado un número negativo.<br>+ x - = - <br> - x + = - <br><br>Por ejemplo:<br><br>(+5) × (-3)<br>Multiplicamos los valores absolutos: 5 × 3 = 15.<br>Como los números tienen signos diferentes, el producto será negativo.<br><br>Resultado: (+5) × (-3) = -15<br><br>Ahora responde:<br><br>(-7) × (+2) = ',
        options: ['+14', '-14', '+15', '-15'],
        correctAnswer: '-14',
        correctGif: "", 
        incorrectGif: ""
      },
// 15
        {
        question: '¿Cuál es el resultado de multiplicar: (+8) × (-2)?',
        options: ['-15', '-16', '+28', '+16'],
        correctAnswer: '-16',
        correctGif: "", 
        incorrectGif: ""
      },
// 16
        {
        question: '¿Cuál es el resultado de multiplicar: (-9) × (+3)?',
        options: ['-26', '-27', '+28', '+29'],
        correctAnswer: '-27',
        correctGif: "", 
        incorrectGif: ""
      },
// 17
        {
        question: 'Al DIVIDIR dos números con el MISMO signo, el cociente siempre será POSITIVO.<br>Esto se debe a que cuando ambos números tienen el mismo signo, su división da como resultado un número positivo.<br>+ ÷ + = + <br> - ÷ - = + <br><br>Por ejemplo:<br><br>(+12) ÷ (+4)<br>Dividimos los valores absolutos: 12 ÷ 4 = 3.<br>Como ambos números tienen signo positivo, el cociente será positivo.<br><br>Resultado: (+12) ÷ (+4) = +3<br><br>Ahora responde:<br><br>(-18) ÷ (-6) = ',
        options: ['-3', '+2', '-4', '+3'],
        correctAnswer: '+3',
        correctGif: "", 
        incorrectGif: ""
      },
// 18
        {
        question: '¿Cuál es el resultado de dividir: (+20) ÷ (+5)?',
        options: ['+4', '+10', '+5', '-5'],
        correctAnswer: '+4',
        correctGif: "", 
        incorrectGif: ""
      },
// 19
      {
        question: '¿Cuál es el resultado de dividir: (-30) ÷ (-6)?',
        options: ['+5', '-5', '-7', '-6'],
        correctAnswer: '+5',
        correctGif: "", 
        incorrectGif: ""
      },
// 20
        {
        question: 'Al DIVIDIR dos números con signos DISTINTOS, el cociente siempre será NEGATIVO. <br>Esto se debe a que cuando los números tienen signos diferentes, su división da como resultado un número negativo.<br>+ ÷ - = - <br> - ÷ + = - <br><br>Por ejemplo:<br><br>(+24) ÷ (-6)<br>Dividimos los valores absolutos: 24 ÷ 6 = 4.<br>Como los números tienen signos diferentes, el cociente será negativo.<br><br>Resultado: (+24) ÷ (-6) = -4<br><br>Ahora responde:<br><br>(-15) ÷ (+3) = ',
        options: ['-5', '+5', '-3', '+3'],
        correctAnswer: '-5',
        correctGif: "", 
        incorrectGif: ""
      },
// 21
        {
        question: '¿Cuál es el resultado de dividir: (+36) ÷ (-9)?',
        options: ['-4', '+9', '-5', '+4'],
        correctAnswer: '-4',
        correctGif: "", 
        incorrectGif: ""
      },
// 22
    {
        question: 'La siguiente regla de signos es correcta: <br>(Verdadero o Falso)<br><br><strong>Multiplicación:</strong><br>+ × + = + <br> + × - = - <br> - × + = - <br> - × - = + ',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        correctGif: "", 
        incorrectGif: ""
      },
// 23
        {
        question: 'La siguiente regla de signos es correcta: <br>(Verdadero o Falso)<br><br><strong>División:</strong><br>+ ÷ + = + <br>+ ÷ - = - <br>- ÷ + = - <br>- ÷ - = + ',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        correctGif: "", 
        incorrectGif: ""
      },
// 24
        {
        question: 'Responde el siguiente ejercicio: <br><strong>Multiplicación y División:</strong><br><br>  (+8) × (-2) ÷ (+4) = ',
        options: ['-2', '-4', '+2', '+4'],
        correctAnswer: '-4',
        correctGif: "", 
        incorrectGif: ""
      },
// 25
        {
        question: 'Responde el siguiente ejercicio (Recuerda separar en términos): <br><strong>Multiplicación, División y Suma:</strong><br><br> (+6) × (-3) ÷ (+2) + (+4) = ?',
        options: ['-7', '-9', '+7', '-5'],
        correctAnswer: '-5',
        correctGif: "", 
        incorrectGif: ""
      },
// 26
    {
        question: 'POTENCIACIÓN:<br><br>La potenciación es una operación matemática que consiste en multiplicar un número por sí mismo tantas veces como indique el exponente.<br>Ejemplo: 2 elevado a la 3, escrito como 2<sup>3</sup>, es igual a 2 × 2 × 2 = 8.  <br><br> Ahora responde: ¿Cuál es el resultado de 3<sup>4</sup>?',
        options: ['81', '54', '27', '64'],
        correctAnswer: '81',
        correctGif: "", 
        incorrectGif: ""
      },
// 27 
        {
        question: 'Cuando (X) MULTIPLICAMOS potencias de IGUAL BASE, se (+) SUMAN sus exponentes.<br>Ejemplo: 2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup>.<br>(Se suman sus exponentes 3 + 4 = 7) <br>2<sup>7</sup> = 2 × 2 × 2 × 2 × 2 × 2 × 2 = 128.<br><br> Ahora responde: ¿Cuál es el resultado de 2<sup>2</sup> × 2<sup>3</sup>? ',
        options: ['16', '32', '64', '128'],
        correctAnswer: '32',
        correctGif: "", 
        incorrectGif: ""
      },
// 28
        {
        question: 'Cuando (÷) DIVIDIMOS potencias de IGUAL BASE, se (-) RESTAN sus exponentes.<br>Ejemplo: 5<sup>8</sup> ÷ 5<sup>3</sup> = 5<sup>5</sup>. <br>(Se restan sus exponentes 8 - 3 = 5)<br>5<sup>5</sup> = 5 × 5 × 5 × 5 × 5 = 3125.<br> Ahora responde: ¿Cuál es el resultado de 3<sup>9</sup> ÷ 3<sup>6</sup>?',
        options: ['9', '16', '27', '36'],
        correctAnswer: '27',
        correctGif: "", 
        incorrectGif: ""
      },
// 29
        {
        question: 'Cuando elevamos una POTENCIA a otra POTENCIA, se (X) MULTIPLICAN los exponentes. <br> Ejemplo: (3<sup>4</sup>)<sup>2</sup> = 3<sup>8</sup>. <br>(Se multiplican sus exponentes 4 x 2 = 8) <br>3<sup>8</sup> = 3 × 3 × 3 × 3 × 3 × 3 × 3 × 3 = 6561.<br><br> Ahora responde: ¿Cuál es el resultado de (2<sup>2</sup>)<sup>3</sup>? ',
        options: ['16', '32', '64', '128'],
        correctAnswer: '64',
        correctGif: "", 
        incorrectGif: ""
      },
// 30
        {
        question: 'Cualquier número elevado a la potencia de CERO (0) es igual a 1, excepto cuando la base es cero. <br>Ejemplos:<br> 2<sup>0</sup> = 1.<br> 10<sup>0</sup> = 1. <br><br> Ahora responde: ¿Cuál es el resultado de 128<sup>0</sup>? ',
        options: ['-1', '0', '1', '128'],
        correctAnswer: '1',
        correctGif: "", 
        incorrectGif: ""
      },
// 31
    {
        question: 'El número 1 elevado a cualquier exponente siempre es igual a 1. <br>Ejemplos:<br>1<sup>2</sup> = 1. <br>1<sup>9</sup> = 1. <br> 1<sup>100</sup> = 1. <br> 1<sup>n</sup> = 1. <br><br>Ahora responde: ¿Cuál es el resultado de 1<sup>3</sup>? ',
        options: ['-1', '0', '1', '3'],
        correctAnswer: '1',
        correctGif: "", 
        incorrectGif: ""
      },
// 32
        {
        question: 'Simplifica la siguiente expresión usando las propiedades de la potenciación:<br><br> 2<sup>3</sup> × 2<sup>2</sup> ÷ 2<sup>4</sup>. ',
        options: ['2<sup>1</sup>', '2<sup>3</sup>', '2<sup>5</sup>', '2<sup>9</sup>'],
        correctAnswer: '2<sup>1</sup>',
        correctGif: "", 
        incorrectGif: ""
      },
// 33
    {
        question: 'Simplifica la siguiente expresión usando las propiedades de la potenciación: <br> <br>3<sup>4</sup> × 3<sup>2</sup> ÷ 3<sup>3</sup>.',
        options: ['3<sup>2</sup>', '3<sup>3</sup>', '3<sup>4</sup>', '3<sup>5</sup>'],
        correctAnswer: '3<sup>3</sup>',
        correctGif: "", 
        incorrectGif: ""
      },
// 34 
        {
        question: 'RAÍCES: <br>La raíz cuadrada de un número es el valor que, multiplicado por sí mismo, da como resultado ese número. <br>Ejemplo: La raíz cuadrada de 9 es 3, ya que 3 × 3 = 9. <br><br> Ahora responde: ¿Cuál es la raíz cuadrada de 16?',
        options: ['&radic;16 = 2', '&radic;16 = 4', '&radic;16 = 6', '&radic;16 = 8'],
        correctAnswer: '',
        correctGif: "", 
        incorrectGif: ""
      },
// 35
      {
        question: 'Las siguientes son las raíces más básicas:<br>√1 = 1<br>√4 = 2<br>√9 = 3<br>√16 = 4<br>√25 = 5<br>√36 = 6<br>√49 = 7<br>√64 = 8<br>√81 = 9<br>√100 = 10<br><br>Ahora responde: ¿Cuál es la raíz cuadrada de 121?',
        options: ['11', '12', '10', '13'],
        correctAnswer: '11',
        correctGif: "",
        incorrectGif: ""
      },
// 36
      {
        question: 'RAIZ DE UNA MULTIPLICACIÓN: <br>Cuando se pide la raiz de una multiplicacion entre dos numeros (Ej: <sup>n</sup>√(𝑎 × 𝑏)) Es lo mismo que: <sup>n</sup>√𝑎 × <sup>n</sup>√𝑏. <br><br> Ejemplos: <br><br><sup>n</sup>√(𝑎 × 𝑏) = <sup>n</sup>√𝑎 × <sup>n</sup>√𝑏 <br><br><sup>3</sup>√(8 × 27) = <sup>3</sup>√8 × <sup>3</sup>√27 <br><br><sup>4</sup>√(16 × 81) = <sup>4</sup>√16 × <sup>4</sup>√81 <br><br>Simplifica: <sup>2</sup>√(16 × 25).',
        options: ['', '', '', ''],
        correctAnswer: '',
        correctGif: "", 
        incorrectGif: ""
      },

    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     correctAnswer: '',
    //     correctGif: "", 
    //     incorrectGif: ""
    //   },
  ];
  
let currentQuestionIndex = 0;
let score = 0;
const scoreIncrement = 0.3125; // Ajusta este valor para cambiar la puntuación por cada respuesta correcta

const questionElement = document.getElementById('question');
const imageElement = document.getElementById('question-image');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const quizContainer = document.getElementById('quiz-container');

//Referencia al elemento donde mostraremos el contador de preguntas
const questionNumberElement = document.getElementById('question-number');

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  //Actualizamos el texto del contador de preguntas (Ej: "Pregunta 1 de 5")
  questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

  questionElement.innerHTML = currentQuestion.question;

  // Manejo de la imagen (mostrar u ocultar)
  if (currentQuestion.image) {
    imageElement.src = currentQuestion.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

  optionsElement.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = option;
    button.onclick = () => handleAnswerSelect(option);
    li.appendChild(button);
    optionsElement.appendChild(li);
  });
}

function handleAnswerSelect(answer) {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';

  if (answer === currentQuestion.correctAnswer) {
    score += scoreIncrement;
    quizContainer.style.backgroundColor = 'green';
    resultElement.textContent = 'Correcto!';
    resultElement.style.color = 'white';

    // Mostrar GIF de respuesta correcta
    imageElement.src = currentQuestion.correctGif;
    imageElement.style.display = 'block';
    questionNumberElement.style.color = 'white';
  } else {
    quizContainer.style.backgroundColor = 'red';
    resultElement.textContent = 'Incorrecto :(';
    resultElement.style.color = 'white';

    // Mostrar GIF de respuesta incorrecta
    imageElement.src = currentQuestion.incorrectGif;
    imageElement.style.display = 'block';
    questionNumberElement.style.color = 'white';
  }
  nextButton.disabled = false;
}

function handleNextQuestion() {
  currentQuestionIndex++;
  quizContainer.style.backgroundColor = '';
  resultElement.textContent = '';
  imageElement.style.display = 'none'; // Ocultar el GIF
  questionElement.style.display = 'block'; // Mostrar la pregunta nuevamente
  optionsElement.style.display = 'block'; // Mostrar las opciones nuevamente

  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.disabled = true;
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = '';
  imageElement.style.display = 'none';
  optionsElement.innerHTML = '';
  nextButton.style.display = 'none';
  resultElement.textContent = 'Quiz complete! Your final score is: ' + score;
  resultElement.style.color = 'black';
}

nextButton.addEventListener('click', handleNextQuestion);

showQuestion();
nextButton.disabled = true;