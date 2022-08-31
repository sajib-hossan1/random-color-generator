let colorCode;

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    colorCode = '#' + randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.getElementById('color-code').innerText = colorCode;
}
document.getElementById('btn').addEventListener('click', getColor);

getColor();

const copyCode = () => {
    console.log(colorCode);
    navigator.clipboard.writeText(colorCode)
    alert("Color Copied" , colorCode);
}

document.getElementById('copy-code').addEventListener('click', copyCode)