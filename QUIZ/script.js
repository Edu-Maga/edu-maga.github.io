const questions = [
    {
        question: "El valor absoluto (o módulo) de un número describen la distancia entre ese número y el cero, sin importar el signo del número. <br><br>Por ejemplo:<br>El valor absoluto de -13 es: 13<br>El valor absoluto de +53 es: 53<br>El valor absoluto de -174 es: 174<br><br>Ahora responde: ¿Cuál es el valor absoluto o módulo del número: -256?",
        options: ['-256', '256', '-13', '0'],
        correctAnswer: '256',
        image: ''
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
  