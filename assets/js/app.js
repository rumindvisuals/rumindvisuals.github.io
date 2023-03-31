const modeButton = document.getElementById("mode");

function toggleMode(modeButton) {
    if (modeButton.classList.contains("dark-mode")) {
        modeButton.classList.remove("dark-mode");
        document.body.style.backgroundColor = "#ece3ce";
        modeButton.firstElementChild.style.opacity = 0;
        modeButton.lastElementChild.style.opacity = 1;
    } else {
        modeButton.classList.add("dark-mode");
        document.body.style.backgroundColor = "#131313";
        modeButton.firstElementChild.style.opacity = 1;
        modeButton.lastElementChild.style.opacity = 0;
    }
}

modeButton.addEventListener("click", function () {
    toggleMode(modeButton);
});

const flagsElement = document.getElementById("languages");

const changeLanguage = async (language) => {
    const requestJson = await fetch("./assets/data/data.json");
    const text = await requestJson.json();
    const profileKey = `profile_${language}`;
    const selectLanguage = text[profileKey];
    const aboutMe = document.getElementById("about-me");
    const nationality = document.getElementById("nationality");
    const certifications = document.getElementById("certifications");
    const technologies = document.getElementById("technologies");
    const advertiser = document.getElementById("advertiser");
    const backendDeveloper = document.getElementById("backend-developer");
    const dataAnalyst = document.getElementById("data-analyst");
    aboutMe.innerHTML = selectLanguage["about_me"];
    nationality.innerText = selectLanguage["nationality"];
    certifications.innerText = selectLanguage["certifications"];
    technologies.innerText = selectLanguage["technologies"];
    advertiser.innerText = selectLanguage["advertiser"];
    backendDeveloper.innerText = selectLanguage["backend_developer"];
    dataAnalyst.innerText = selectLanguage["data_analyst"];
};

flagsElement.addEventListener("click", (e) => {
    const langs = document.getElementsByClassName("langs");
    if (!e.target.innerText.includes("|")) {
        langs[0].firstElementChild.innerText = e.target.innerText;
        changeLanguage(e.target.innerText);
    }
});
