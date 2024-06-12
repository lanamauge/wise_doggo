document.getElementById('enlighten-button').addEventListener('click', async function() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const dogImage = document.getElementById('dog-image');
    dogImage.src = data.message;
});




document.getElementById('enlighten-button').addEventListener('click', async function() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quote = document.getElementById('quote');
    quote.textContent = `"${data.content}" `;
});