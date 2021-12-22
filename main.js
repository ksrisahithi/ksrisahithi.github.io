
var contactContent = document.getElementById('contact_content');
var githubContent = document.getElementById('github_content');
var aboutContent = document.getElementById('about_content');


function showAbout() {
        contactContent.classList.add('hidden');
        githubContent.classList.add('hidden');
        aboutContent.classList.remove('hidden');
}
function showContact() {
        aboutContent.classList.add('hidden');
        githubContent.classList.add('hidden');
        contactContent.classList.remove('hidden');
    }

function showGithub() {
        // contactContent.classList.add('hidden');
        // aboutContent.classList.add('hidden');
        // githubContent.classList.remove('hidden');
        window.open("https://github.com/ksrisahithi", '_blank');
    }
