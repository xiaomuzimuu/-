<!DOCTYPE html>
<html lang="zh - CN">
<head>
    <meta charset="UTF - 8">
    <meta name="viewport" content="width=device - width, initial - scale=1.0">
    <title>两位数加减法教学</title>
</head>
<body>
    <header style="text - align: center;">
        <h1>两位数加减法</h1>
        <p>学科：数学，学段：小学</p>
        <small style="position: absolute; top: 10px; left: 10px;">姓名：[你的姓名]，学号：[你的学号]</small>
    </header>
    <main>
        <p>请计算：<span id="num1"></span> + <span id="num2"></span> = </p>
        <input type="number" id="answer" placeholder="输入答案">
        <button onclick="checkAnswer()">提交答案</button>
        <div id="result"></div>
    </main>
    <script>
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        const answerInput = document.getElementById('answer');
        const resultDiv = document.getElementById('result');
        function generateNumbers() {
            const num1Value = Math.floor(Math.random() * 90) + 10;
            const num2Value = Math.floor(Math.random() * 90) + 10;
            num1.textContent = num1Value;
            num2.textContent = num2Value;
        }
        window.onload = generateNumbers;
        function checkAnswer() {
            const correctAnswer = parseInt(num1.textContent) + parseInt(num2.textContent);
            const userAnswer = parseInt(answerInput.value);
            if (isNaN(userAnswer)) {
                resultDiv.textContent = '请输入有效的数字！';
            } else if (userAnswer === correctAnswer) {
                resultDiv.textContent = '回答正确！';
            } else {
                resultDiv.textContent = `回答错误，正确答案是 ${correctAnswer}。`;
            }
            generateNumbers();
            answerInput.value = '';
        }
    </script>
</body>
</html>
