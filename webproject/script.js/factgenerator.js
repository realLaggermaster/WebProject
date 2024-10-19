// Function that fetches text api
async function GenerateFact() { 
    response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    fact = await response.json();
    output = document.querySelector(".output1");
    output.innerHTML = `<p>${fact.text}</p>`; 
}

document.querySelector("#Generate1").onclick = GenerateFact;