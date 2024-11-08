const questions = [
    {
        question: "El valor absoluto (o módulo) de un número describen la distancia entre ese número y el cero, sin importar el signo del número. <br><br>Por ejemplo:<br>El valor absoluto de -13 es: 13<br>El valor absoluto de +53 es: 53<br>El valor absoluto de -174 es: 174<br><br>Ahora responde: ¿Cuál es el valor absoluto o módulo del número: -256?",
        options: ['-256', '256', '-13', '0'],
        correctAnswer: '256',
        image: ''
      },

    {
        question: '¿Cuál es el valor absoluto (o módulo) del número: +36?',
        options: ['-36', '36', '+36', '0'],
        correctAnswer: '36',
        image: '' // Imagen opcional
      },

    {
        question: '¿Cuál es el valor absoluto (o módulo) del número: -878?',
        options: ['-878', '+878', '0', '878'],
        correctAnswer: '878',
        image: '' // Imagen opcional
      },

        {
        question: 'Al SUMAR (+) dos números que tienen el mismo signo, primero se deben sumar sus valores absolutos y luego al resultado se le agrega el mismo signo de los números.<br><br>Por ejemplo:<br> (+3) + (+2) = +5 (Es positivo porque los dos numeros de la suma son positivos) <br> -4 + (-1) = -5 (Es negativo porque los dos numeros de la suma son negativos) <br><br>Ahora responde: ¿Cuál es el resultado de sumar: (+12) + (+5)?',
        options: ['+17', '-17', '+15', '-15'],
        correctAnswer: '+17',
        image: '' // Imagen opcional
      },

          {
        question: '¿Cuál es el resultado de sumar: (-74) + (-6)',
        options: ['+79', '-76', '-80', '+80'],
        correctAnswer: '-80',
        image: '' // Imagen opcional
      },
      
          {
        question: '¿Cuál es el resultado de sumar: (-25) + (-15)',
        options: ['+35', '-40', '+45', '-50'],
        correctAnswer: '-40',
        image: '' // Imagen opcional
      },

    {
        question: 'Para SUMAR dos números con signos DIFERENTES, primero se toman sus valores absolutos y se resta el menor del mayor. Luego, se asigna al resultado el signo del número que tenga el valor absoluto más grande.<br><br>Por ejemplo:<br><br>(+5) + (-6)<br>Identificar los valores absolutos:<br>El valor absoluto de +5 es 5.<br>El valor absoluto de −6 es 6.<br>Restar los valores absolutos:<br>Se resta el menor del mayor: 6−5=1.<br>Colocar el signo del número con mayor valor absoluto:<br>El número con mayor valor absoluto es −6, por lo que el resultado tendrá un signo negativo.<br><br>Resultado: +5 + (−6) = −1<br><br>Ahora responde:<br><br>+23 + (-31) =',
        options: ['-7', '+7', '-8', '+8'],
        correctAnswer: '-8',
        image: '' // Imagen opcional
      },

      
    {
        question: '¿Cuál es el resultado de sumar: (-14) + (+18)?',
        options: ['-4', '-6', '+6', '+4'],
        correctAnswer: '+4',
        image: '' // Imagen opcional
      },

    
    {
        question: '¿Cuál es el resultado de sumar: (-25) + (+30)?',
        options: ['+5', '-15', '+15', '-5'],
        correctAnswer: '+5',
        image: '' // Imagen opcional
      },

          {
        question: '¿Cuál es el resultado de sumar: (+45) + (-20)?',
        options: ['-25', '+15', '+25', '-15'],
        correctAnswer: '+25',
        image: '' // Imagen opcional
      },

          {
        question: 'Al MULTIPLICAR dos números con el MISMO signo, el producto siempre será POSITIVO. <br>Esto se debe a que cuando ambos números tienen el mismo signo, su multiplicación da como resultado un número positivo.<br>+ x + = + <br> - x - = + <br><br>Por ejemplo:<br><br>(+4) × (+3)<br>Multiplicamos los valores absolutos:<br>4 × 3 = 12.<br>Como ambos números tienen signo positivo, el producto será positivo.<br><br>Resultado: (+4) × (+3) = +12<br><br>Ahora responde:<br><br>(-6) × (-2) =',
        options: ['-12', '-4', '+21', '+12'],
        correctAnswer: '+12',
        image: '' // Imagen opcional
      },

          {
        question: '¿Cuál es el resultado de multiplicar: (+6) × (+4) ?',
        options: ['+24', '+42', '-12', '+16'],
        correctAnswer: '+24',
        image: '' // Imagen opcional
      },

    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     correctAnswer: '',
    //     image: '' // Imagen opcional
    //   },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const scoreIncrement = 1; // Ajusta este valor para cambiar la puntuación por cada respuesta correcta
  
  const questionElement = document.getElementById('question');
  const imageElement = document.getElementById('question-image');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const resultElement = document.getElementById('result');
  const quizContainer = document.getElementById('quiz-container');
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
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
      button.textContent = option;
      button.onclick = () => handleAnswerSelect(option);
      li.appendChild(button);
      optionsElement.appendChild(li);
    });
  }
  
  function handleAnswerSelect(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      score += scoreIncrement; // Incrementar el score según el valor definido
      quizContainer.style.backgroundColor = 'green';
      resultElement.textContent = 'Correcto!';
      resultElement.style.color = 'white';
    } else {
      quizContainer.style.backgroundColor = 'red';
      resultElement.textContent = 'Incorrecto :(';
      resultElement.style.color = 'white';
    }
    nextButton.disabled = false;
  }
  
  function handleNextQuestion() {
    currentQuestionIndex++;
    quizContainer.style.backgroundColor = ''; 
    resultElement.textContent = ''; 
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
  