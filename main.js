
// var contactContent = document.getElementById('contact_content');
// var githubContent = document.getElementById('github_content');
// var aboutContent = document.getElementById('about_content');


// function showAbout() {
//         contactContent.classList.add('hidden');
//         githubContent.classList.add('hidden');
//         aboutContent.classList.remove('hidden');
// }
// function showContact() {
//         aboutContent.classList.add('hidden');
//         githubContent.classList.add('hidden');
//         contactContent.classList.remove('hidden');
//     }

// function showGithub() {
//         // contactContent.classList.add('hidden');
//         // aboutContent.classList.add('hidden');
//         // githubContent.classList.remove('hidden');
//         window.open("https://github.com/ksrisahithi", '_blank');
//     }

const text = document.querySelector(".heading");
const strtext = text.textContent;
const splitText = strtext.split("");
text.textContent = "";

for(let i = 0; i < strtext.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char++;
    if (char === strtext.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}