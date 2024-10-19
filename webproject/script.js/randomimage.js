// Function that fetches image 
async function imageGenerator() {
    response = await fetch("https://cataas.com/cat");
    imageURL = response.url; 
    output = document.querySelector(".output2");
    output.innerHTML = `<img src="${imageURL}" alt="Random Cat"/>`;
}

document.querySelector("#Generate2").onclick = imageGenerator;
