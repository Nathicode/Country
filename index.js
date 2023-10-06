async function dom(){
    let input = document.querySelector('#search').value;
    document.querySelector('.write').innerHTML = "<center><img src='Ellipsis-1s-200px (1).svg' id='loading'></img></center>"
try {
    let data = await fetch(`https://restcountries.com/v3.1/name/${input}`);
let res = await data.json();
let population = res[0].population.toLocaleString();
console.log(res[0].name.nativeName);
let div = `<div class="cards"><p>Flag</p><img src='${res[0].flags.png}' id="flag"><p>Country Name</p><p id='countryname'>${res[0].name.common}</p><p>Continent</p><p id="continent">${res[0].continents[0]}</p>Population<p id='population'>${population}</p></div>`;
document.querySelector('.write').innerHTML = div;
} catch (error) {
    document.querySelector('.write').innerHTML = "<div class='cards'><p id='sorry'>Sorry Bro Try Again</p><p id='err'>404</p></div>";
}


//title.forEach(title => {
  //  console.log(title)
//})


}
window.onbeforeunload = () =>{
   confirm('do you liked our web app');
}
window.manageBackRefresh = () => {
    confirm('do you liked our web app');
}