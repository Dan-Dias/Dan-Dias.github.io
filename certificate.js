document.addEventListener("DOMContentLoaded", function () {
    const rightSection = document.getElementById("right-section");

    function setupCheckbox(checkboxId, imgSelector) {
        const checkbox = document.getElementById(checkboxId);
        const img = document.querySelector(imgSelector);

        if (!checkbox || !img) return;

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                if (window.innerWidth <= 720) {
                    // Telas pequenas → mostra na left-section
                    img.style.display = "block";
                } else {
                    // Telas grandes → adiciona na right-section
                    const clone = img.cloneNode(true);
                    clone.setAttribute("data-cert-id", checkboxId); // marca o certificado
                    clone.style.display = "block";
                    clone.style.maxWidth = "90%";
                    clone.style.margin = "2rem auto";

                    rightSection.appendChild(clone);
                }
            } else {
                if (window.innerWidth <= 720) {
                    img.style.display = "none";
                } else {
                    // remove só o certificado desse checkbox
                    const toRemove = rightSection.querySelector(`[data-cert-id="${checkboxId}"]`);
                    if (toRemove) {
                        rightSection.removeChild(toRemove);
                    }
                }
            }
        });
    }

    /* ========================
       FACULDADE
    ======================== */
    setupCheckbox("award-box-facul-00", "#certificado-facul-00");
    setupCheckbox("award-box-facul-01", "#certificado-facul-01");
    setupCheckbox("award-box-facul-02", "#certificado-facul-02");

    /* ========================
       ALURA
    ======================== */
    setupCheckbox("award-box-alura-logica", "#certificado-logica");
    setupCheckbox("award-box-alura-git", "#certificado-git");
    setupCheckbox("award-box-alura-html", "#certificado-html");
    setupCheckbox("award-box-alura-qa", "#certificado-qa");

    /* ========================
       TÉCNICO
    ======================== */
    setupCheckbox("award-box-eletronica", "#certificado-eletronica");
    setupCheckbox("award-box-eletronica-industrial", "#certificado-eletronica-industrial");
    setupCheckbox("award-box-eletricidade", "#certificado-eletricidade");

    /* ========================
       IDIOMAS
    ======================== */
    setupCheckbox("award-box-espanhol", "#certificado-espanhol");

    /* ========================
       CURSOS EXTRAS
    ======================== */
    setupCheckbox("award-box-design", "#certificado-design");
    setupCheckbox("award-box-micro", "#certificado-micro");
    setupCheckbox("award-box-informatica", "#certificado-informatica");
    setupCheckbox("award-box-jogos", "#certificado-jogos");
    setupCheckbox("award-box-licitante", "#certificado-licitante");
    setupCheckbox("award-box-faturamento", "#certificado-faturamento");

    /* ========================
       UNIVERSIDADE SIMPRESS
    ======================== */
    setupCheckbox("award-box-ppct-associate", "#certificado-ppct-associate");
    setupCheckbox("award-box-ppct-profissional", "#certificado-ppct-profissional");
    setupCheckbox("award-box-NDD", "#certificado-NDD");
    setupCheckbox("award-box-android-profissional", "#certificado-android-profissional");
    setupCheckbox("award-box-android-associate", "#certificado-android-associate");
    setupCheckbox("award-box-aduaneira", "#certificado-aduaneira");
    setupCheckbox("award-box-etica", "#certificado-etica");
    setupCheckbox("award-box-serviço", "#certificado-serviço");
    setupCheckbox("award-box-projeto", "#certificado-projeto");
    setupCheckbox("award-box-carreira", "#certificado-carreira");
    setupCheckbox("award-box-tempo", "#certificado-tempo");
    setupCheckbox("award-box-institucional", "#certificado-institucional");
    setupCheckbox("award-box-lgpd", "#certificado-lgpd");
    setupCheckbox("award-box-diversidade", "#certificado-diversidade");
    setupCheckbox("award-box-conectividade", "#certificado-conectividade");
    setupCheckbox("award-box-soft-skills", "#certificado-soft-skills");
    setupCheckbox("award-box-tecnologia", "#certificado-tecnologia");
    setupCheckbox("award-box-segurança", "#certificado-segurança");
    setupCheckbox("award-box-ofs", "#certificado-ofs");
    setupCheckbox("award-box-desenvolver", "#certificado-desenvolver");

    /* ========================
       PCS / NOTEBOOKS
    ======================== */
    setupCheckbox("award-box-chromebook", "#certificado-chromebook");
    setupCheckbox("award-box-desktop", "#certificado-desktop");
    setupCheckbox("award-box-elite", "#certificado-elite");
    setupCheckbox("award-box-elitebook", "#certificado-elitebook");
    setupCheckbox("award-box-elitedesk", "#certificado-elitedesk");
    setupCheckbox("award-box-fundamentos", "#certificado-fundamentos");
    setupCheckbox("award-box-z8", "#certificado-z8");
    setupCheckbox("award-box-probook", "#certificado-probook");
    setupCheckbox("award-box-segurança_pc", "#certificado-segurança_pc");
    setupCheckbox("award-box-zbook", "#certificado-zbook");

    /* ========================
       IMPRESSORAS
    ======================== */
    setupCheckbox("award-box-4580", "#certificado-4580");
    setupCheckbox("award-box-cor", "#certificado-cor");
    setupCheckbox("award-box-copia", "#certificado-copia");
    setupCheckbox("award-box-fw", "#certificado-fw");
    setupCheckbox("award-box-formater", "#certificado-formater");
    setupCheckbox("award-box-scanjet", "#certificado-scanjet");
    setupCheckbox("award-box-plotter", "#certificado-plotter");
    setupCheckbox("award-box-tonner", "#certificado-tonner");
    setupCheckbox("award-box-7400", "#certificado-7400");
    setupCheckbox("award-box-zebra", "#certificado-zebra");
});
