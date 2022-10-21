const monthComponent = function(nth, name, days) {
    let daysHtml = "";

    for(let i = 1; i <=days; i++){
        daysHtml += dayComponent(i);
    }

    return `
    <section id="${nth}" class="${name}" >
        <h2>${name}</h2>
        ${daysHtml}
    </section>
    `
}

const dayComponent = function (dayCount) {
    return `
    <div class="day">${dayCount}</div>
    `
}

const rootElement = document.querySelector("#root");

// rootElement.insertAdjacentHTML("beforeend","<button>Show Calendar</button>");
// const buttonElement = rootElement.querySelector("button");
// buttonElement.addEventListener("click", function(){
// })

rootElement.insertAdjacentHTML("beforeend", monthComponent(01, "january", 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(02, "february", 28));
rootElement.insertAdjacentHTML("beforeend", monthComponent(03, "march", 31));