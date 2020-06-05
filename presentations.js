function createPresentations() {
    var numberOfPresentations = 2;
    for (let i = 0; i < numberOfPresentations; i++) {
        var presentation = document.createElement('div');
        presentation.classList.add('presentation');
        presentation.id = i + 1;
        // presentation.addEventListener('click', toPresentation(this));
        presentation.innerHTML = `<img src="presentations/presentation_${i + 1}/preview.png" height="200px" alt="">
        <p>Презентация ${i + 1}</p>`;
        document.getElementById('main').append(presentation);
    }
}

function toPresentation(element) {
    let num = element.id;
    window.location = `presentations/presentation_${num}/presentation.html`;
}

// function test() {
//     console.log("HELLOs")
// }