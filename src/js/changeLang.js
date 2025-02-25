document.addEventListener("DOMContentLoaded", () => {
  const dropdownOptions = document.querySelectorAll(".dropdownOption");
  const buttonChange = document.getElementById("languageButton");

  let currentLanguage = localStorage.getItem("selectedLanguage") || "br";
  loadTranslation(currentLanguage);

  dropdownOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const newLanguage = option.getAttribute("data-lang");
      if (newLanguage !== currentLanguage) {
        currentLanguage = newLanguage;
        localStorage.setItem("selectedLanguage", currentLanguage);
        loadTranslation(currentLanguage);

        if (currentLanguage == "en") {
          buttonChange.querySelector(".idiomFlag").src =
            "./src/svg/usaFlag.svg";
          buttonChange.querySelector("#selectedLanguage").textContent = "EN";
        } else if (currentLanguage == "br") {
          buttonChange.querySelector(".idiomFlag").src =
            "./src/svg/brazilFlag.svg";
          buttonChange.querySelector("#selectedLanguage").textContent = "BR";
        }
      }
    });
  });

  function loadTranslation(lang) {
    fetch("../../lang.json")
      .then((response) => response.json())
      .then((translations) => {
        /* Translate section navbar*/

        document.getElementById("heroNav").innerText =
          translations[lang].heroNav;
        document.getElementById("aboutNav").innerText =
          translations[lang].aboutNav;
        document.getElementById("projectsNav").innerText =
          translations[lang].projectsNav;
        document.getElementById("skillsNav").innerText =
          translations[lang].skillsNav;
        document.getElementById("certificateNav").innerText =
          translations[lang].certificateNav;
        document.getElementById("contactNav").innerText =
          translations[lang].contactNav;
        document.getElementById("heroSubtitle").innerText =
          translations[lang].heroSubtitle;

        /* Translate section about*/

        document.getElementById("aboutTitle").innerText =
          translations[lang].aboutTitle;
        document.getElementById("aboutSubtitle").innerText =
          translations[lang].aboutSubtitle;
        document.getElementById("aboutCardTitle1").innerText =
          translations[lang].aboutCardTitle1;
        document.getElementById("aboutCardTitle2").innerText =
          translations[lang].aboutCardTitle2;
        document.getElementById("aboutCardTitle3").innerText =
          translations[lang].aboutCardTitle3;
        document.getElementById("aboutCardTitle4").innerText =
          translations[lang].aboutCardTitle4;
        document.getElementById("aboutText1").innerText =
          translations[lang].aboutText1;
        document.getElementById("aboutText2").innerText =
          translations[lang].aboutText2;

        /* Translate section projects*/

        document.getElementById("projectTitle").innerText =
          translations[lang].projectTitle;
        document.getElementById("projectCardTitle1").innerText =
          translations[lang].projectCardTitle1;
        document.getElementById("projectCardTitle2").innerText =
          translations[lang].projectCardTitle2;
        document.getElementById("projectCardTitle3").innerText =
          translations[lang].projectCardTitle3;
        document.getElementById("projectCardTitle4").innerText =
          translations[lang].projectCardTitle4;
        document.getElementById("projectCardTitle5").innerText =
          translations[lang].projectCardTitle5;
        document.getElementById("projectCardTitle6").innerText =
          translations[lang].projectCardTitle6;

        /* Translate section projects dialog*/

        document.getElementById("projectDialogTitle1").innerText =
          translations[lang].projectDialogTitle1;
        document.getElementById("project1DialogDescription1").innerText =
          translations[lang].project1DialogDescription1;
        document.getElementById("project1DialogDescription2").innerText =
          translations[lang].project1DialogDescription2;
        document.getElementById("project1DialogOption1").innerText =
          translations[lang].project1DialogOption1;
        document.getElementById("project1DialogOption2").innerText =
          translations[lang].project1DialogOption2;

        document.getElementById("projectDialogTitle2").innerText =
          translations[lang].projectDialogTitle2;
        document.getElementById("project2DialogDescription1").innerText =
          translations[lang].project2DialogDescription1;
        document.getElementById("project2DialogDescription2").innerText =
          translations[lang].project2DialogDescription2;
        document.getElementById("project2DialogOption1").innerText =
          translations[lang].project2DialogOption1;
        document.getElementById("project2DialogOption2").innerText =
          translations[lang].project2DialogOption2;

        document.getElementById("projectDialogTitle3").innerText =
          translations[lang].projectDialogTitle3;
        document.getElementById("project3DialogDescription1").innerText =
          translations[lang].project3DialogDescription1;
        document.getElementById("project3DialogDescription2").innerText =
          translations[lang].project3DialogDescription2;
        document.getElementById("project3DialogOption1").innerText =
          translations[lang].project3DialogOption1;
        document.getElementById("project3DialogOption2").innerText =
          translations[lang].project3DialogOption2;

        document.getElementById("projectDialogTitle4").innerText =
          translations[lang].projectDialogTitle4;
        document.getElementById("project4DialogDescription1").innerText =
          translations[lang].project4DialogDescription1;
        document.getElementById("project4DialogDescription2").innerText =
          translations[lang].project4DialogDescription2;
        document.getElementById("project4DialogOption1").innerText =
          translations[lang].project4DialogOption1;
        document.getElementById("project4DialogOption2").innerText =
          translations[lang].project4DialogOption2;

        document.getElementById("projectDialogTitle5").innerText =
          translations[lang].projectDialogTitle5;
        document.getElementById("project5DialogDescription1").innerText =
          translations[lang].project5DialogDescription1;
        document.getElementById("project5DialogDescription2").innerText =
          translations[lang].project5DialogDescription2;
        document.getElementById("project5DialogOption1").innerText =
          translations[lang].project5DialogOption1;
        document.getElementById("project5DialogOption2").innerText =
          translations[lang].project5DialogOption2;

        document.getElementById("projectDialogTitle6").innerText =
          translations[lang].projectDialogTitle6;
        document.getElementById("project6DialogDescription1").innerText =
          translations[lang].project6DialogDescription1;
        document.getElementById("project6DialogDescription2").innerText =
          translations[lang].project6DialogDescription2;
        document.getElementById("project6DialogOption2").innerText =
          translations[lang].project6DialogOption2;

        /* Translate section contact*/

        document.getElementById("skillsTitle").innerText =
          translations[lang].skillsTitle;

        document.getElementById("certificateTitle").innerText =
          translations[lang].certificateTitle;
        document.getElementById("certification1Title").innerText =
          translations[lang].certification1Title;
        document.getElementById("certification1Text1").innerText =
          translations[lang].certification1Text1;
        document.getElementById("certification1Text2").innerText =
          translations[lang].certification1Text2;
        document.getElementById("certification1Text3").innerText =
          translations[lang].certification1Text3;

        document.getElementById("certification2Title").innerText =
          translations[lang].certification2Title;
        document.getElementById("certification2Text1").innerText =
          translations[lang].certification2Text1;
        document.getElementById("certification2Text2").innerText =
          translations[lang].certification2Text2;
        document.getElementById("certification2Text3").innerText =
          translations[lang].certification2Text3;

        document.getElementById("certification3Title").innerText =
          translations[lang].certification3Title;
        document.getElementById("certification3Text1").innerText =
          translations[lang].certification3Text1;
        document.getElementById("certification3Text2").innerText =
          translations[lang].certification3Text2;
        document.getElementById("certification3Text3").innerText =
          translations[lang].certification3Text3;

        document.getElementById("certification4Title").innerText =
          translations[lang].certification4Title;
        document.getElementById("certification4Text1").innerText =
          translations[lang].certification4Text1;
        document.getElementById("certification4Text2").innerText =
          translations[lang].certification4Text2;
        document.getElementById("certification4Text3").innerText =
          translations[lang].certification4Text3;

        /* Translate section contact*/

        document.getElementById("contactTitle").innerText =
          translations[lang].contactTitle;

        document.getElementById("inputPlaceholderName").placeholder =
          translations[lang].inputPlaceholderName;
        document.getElementById("inputPlaceholderEmail").placeholder =
          translations[lang].inputPlaceholderEmail;
        document.getElementById("inputPlaceholderText1").placeholder =
          translations[lang].inputPlaceholderText1;
        document.getElementById("messageForm").placeholder =
          translations[lang].messageForm;
        document.getElementById("buttonForm").value =
          translations[lang].buttonForm;

        /* Translate section footer*/

        document.getElementById("footerText").innerText =
          translations[lang].footerText;
      })
      .catch((error) => console.error("Erro ao carregar as traduções:", error));
  }
});
