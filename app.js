const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function () {
    const generate = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generate-input').value = generate;
});