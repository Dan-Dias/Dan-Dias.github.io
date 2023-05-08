//alura cursos
var btn_logica = document.querySelector('#award-box-alura-logica')
var btn_git = document.querySelector('#award-box-alura-git')
var btn_html = document.querySelector('#award-box-alura-html')
var btn_qa = document.querySelector('#award-box-alura-qa')

var alura1_1 =document.querySelector('.alura1_1')
var alura2_1 =document.querySelector('.alura2_1')
var alura3_1 =document.querySelector('.alura3_1')
var qa_1 =document.querySelector('.qa_1')

//faculdade
var btn_facul01 = document.querySelector('#award-box-facul-01')
var btn_facul02 = document.querySelector('#award-box-facul-02')

var facul1_1 =document.querySelector('.facul1_1')
var facul2_1 =document.querySelector('.facul2_1')

//universidade simpress
var btn_aduaneira = document.querySelector('#award-box-aduaneira')
var btn_etica = document.querySelector('#award-box-etica')
var btn_serviço = document.querySelector('#award-box-serviço')
var btn_projeto = document.querySelector('#award-box-projeto')
var btn_carreira = document.querySelector('#award-box-carreira')
var btn_tempo = document.querySelector('#award-box-tempo')
var btn_institucional = document.querySelector('#award-box-institucional')
var btn_lgpd = document.querySelector('#award-box-lgpd')
var btn_diversidade = document.querySelector('#award-box-diversidade')
var btn_conectividade = document.querySelector('#award-box-conectividade')
var btn_soft_skills = document.querySelector('#award-box-soft-skills')
var btn_tecnologia = document.querySelector('#award-box-tecnologia')
var btn_segurança_pc = document.querySelector('#award-box-segurança_pc')
var btn_ofs = document.querySelector('#award-box-ofs')
var btn_desenvolver = document.querySelector('#award-box-desenvolver')

var aduaneira_1 =document.querySelector('.aduaneira_1')
var etica_1 =document.querySelector('.etica_1')
var serviço_1 =document.querySelector('.serviço_1')
var projeto_1 =document.querySelector('.projeto_1')
var carreira_1 =document.querySelector('.carreira_1')
var tempo_1 =document.querySelector('.tempo_1')
var institucional_1 =document.querySelector('.institucional_1')
var lgpd_1 =document.querySelector('.lgpd_1')
var diversidade_1 =document.querySelector('.diversidade_1')
var conectividade_1 =document.querySelector('.conectividade_1')
var soft_skills_1 =document.querySelector('.soft-skills_1')
var tecnologia_1 =document.querySelector('.tecnologia_1')
var segurança_pc_1 =document.querySelector('.segurança_pc_1')
var ofs_1 =document.querySelector('.ofs_1')
var desenvolver_1 =document.querySelector('.desenvolver_1')

//simpress pcs
var btn_chromebook = document.querySelector('#award-box-chromebook')
var btn_desktop = document.querySelector('#award-box-desktop')
var btn_elite = document.querySelector('#award-box-elite')
var btn_elitebook = document.querySelector('#award-box-elitebook')
var btn_elitedesk = document.querySelector('#award-box-elitedesk')
var btn_fundamentos = document.querySelector('#award-box-fundamentos')
var btn_z8 = document.querySelector('#award-box-z8')
var btn_probook = document.querySelector('#award-box-probook')
var btn_segurança = document.querySelector('#award-box-segurança')
var btn_zbook = document.querySelector('#award-box-zbook')

var chromebook_1 =document.querySelector('.chromebook_1')
var desktop_1 =document.querySelector('.desktop_1')
var elite_1 =document.querySelector('.elite_1')
var elitebook_1 =document.querySelector('.elitebook_1')
var elitedesk_1 =document.querySelector('.elitedesk_1')
var fundamentos_1 =document.querySelector('.fundamentos_1')
var z8_1 =document.querySelector('.z8_1')
var probook_1 =document.querySelector('.probook_1')
var segurança_1 =document.querySelector('.segurança_1')
var zbook_1 =document.querySelector('.zbook_1')

//simpress impressoras

var btn_4580 = document.querySelector('#award-box-4580')
var btn_cor = document.querySelector('#award-box-cor')
var btn_copia = document.querySelector('#award-box-copia')
var btn_fw = document.querySelector('#award-box-fw')
var btn_formater = document.querySelector('#award-box-formater')
var btn_scanjet = document.querySelector('#award-box-scanjet')
var btn_plotter = document.querySelector('#award-box-plotter')
var btn_tonner = document.querySelector('#award-box-tonner')
var btn_7400 = document.querySelector('#award-box-7400')
var btn_zebra = document.querySelector('#award-box-zebra')

var hp_4580_1 =document.querySelector('.hp-4580_1')
var cor_1 =document.querySelector('.cor_1')
var copia_1 =document.querySelector('.copia_1')
var fw_1 =document.querySelector('.fw_1')
var formater_1 =document.querySelector('.formater_1')
var scanjet_1 =document.querySelector('.scanjet_1')
var plotter_1 =document.querySelector('.plotter_1')
var tonner_1 =document.querySelector('.tonner_1')
var x7400_1 =document.querySelector('.x7400_1')
var zebra_1 =document.querySelector('.zebra_1')

//cursos livres

var btn_jogos =document.querySelector('#award-box-jogos')
var btn_design =document.querySelector('#award-box-design')
var btn_informatica =document.querySelector('#award-box-informatica')
var btn_micro =document.querySelector('#award-box-micro')

var jogos_1 =document.querySelector('.jogos_1')
var design_1 =document.querySelector('.design_1')
var informatica_1 =document.querySelector('.informatica_1')
var micro_1 =document.querySelector('.micro_1')

//Tecnicos
var btn_eletronica =document.querySelector('#award-box-eletronica')
var btn_eletricidade =document.querySelector('#award-box-eletricidade')
var btn_eletronica_industrial =document.querySelector('#award-box-eletronica-industrial')

var eletronica_1 =document.querySelector('.eletronica_1')
var eletricidade_1 =document.querySelector('.eletricidade_1')
var eletronica_industrial_1 =document.querySelector('.eletronica-industrial_1')
//Idiomas

var btn_espanhol =document.querySelector('#award-box-espanhol')

var espanhol_1 =document.querySelector('.espanhol_1')

//funções da faculdade

btn_facul01.addEventListener('click', function() {

    if(facul1_1.style.display === 'block') {
        facul1_1.style.display = 'none';
    } else {
        facul1_1.style.display = 'block';
    }});

btn_facul02.addEventListener('click', function() {

    if(facul2_1.style.display === 'block') {
        facul2_1.style.display = 'none';
    } else {
        facul2_1.style.display = 'block';
    }});

//Alura Cursos

btn_logica.addEventListener('click', function() {

    if(alura1_1.style.display === 'block') {
        alura1_1.style.display = 'none';
    } else {
        alura1_1.style.display = 'block';
    }});

btn_git.addEventListener('click', function() {

    if(alura2_1.style.display === 'block') {
        alura2_1.style.display = 'none';
    } else {
        alura2_1.style.display = 'block';
    }});

btn_html.addEventListener('click', function() {

    if(alura3_1.style.display === 'block') {
        alura3_1.style.display = 'none';
    } else {
        alura3_1.style.display = 'block';
    }});

btn_qa.addEventListener('click', function() {

    if(qa_1.style.display === 'block') {
        qa_1.style.display = 'none';
    } else {
        qa_1.style.display = 'block';
    }});

//Curso extra

btn_jogos.addEventListener('click', function() {

    if(jogos_1.style.display === 'block') {
        jogos_1.style.display = 'none';
    } else {
        jogos_1.style.display = 'block';
    }});

btn_design.addEventListener('click', function() {
    if(design_1.style.display === 'block') {
        design_1.style.display = 'none';
    } else {
        design_1.style.display = 'block';
    }});

btn_informatica.addEventListener('click', function() {
    if(informatica_1.style.display === 'block') {
        informatica_1.style.display = 'none';
    } else {
        informatica_1.style.display = 'block';
    }});

btn_micro.addEventListener('click', function() {
    if(micro_1.style.display === 'block') {
        micro_1.style.display = 'none';
    } else {
        micro_1.style.display = 'block';
    }});

//idioma

btn_espanhol.addEventListener('click', function() {
    if(espanhol_1.style.display === 'block') {
        espanhol_1.style.display = 'none';
    } else {
        espanhol_1.style.display = 'block';
    }});

//Cursos tenicos

btn_eletronica.addEventListener('click', function() {
    if(eletronica_1.style.display === 'block') {
        eletronica_1.style.display = 'none';
    } else {
        eletronica_1.style.display = 'block';
    }});

btn_eletricidade.addEventListener('click', function() {
    if(eletricidade_1.style.display === 'block') {
        eletricidade_1.style.display = 'none';
    } else {
        eletricidade_1.style.display = 'block';
    }});

btn_eletronica_industrial.addEventListener('click', function() {
    if(eletronica_industrial_1.style.display === 'block') {
        eletronica_industrial_1.style.display = 'none';
    } else {
        eletronica_industrial_1.style.display = 'block';
    }});

//Universidade simpress

btn_aduaneira.addEventListener('click', function() {

    if(aduaneira_1.style.display === 'block') {
        aduaneira_1.style.display = 'none';
    } else {
        aduaneira_1.style.display = 'block';
    }});

btn_etica.addEventListener('click', function() {

    if(etica_1.style.display === 'block') {
        etica_1.style.display = 'none';
    } else {
        etica_1.style.display = 'block';
    }});

btn_serviço.addEventListener('click', function() {

    if(serviço_1.style.display === 'block') {
        serviço_1.style.display = 'none';
    } else {
        serviço_1.style.display = 'block';
    }});

btn_projeto.addEventListener('click', function() {

    if(projeto_1.style.display === 'block') {
        projeto_1.style.display = 'none';
    } else {
        projeto_1.style.display = 'block';
    }});

btn_carreira.addEventListener('click', function() {

    if(carreira_1.style.display === 'block') {
        carreira_1.style.display = 'none';
    } else {
        carreira_1.style.display = 'block';
    }});

btn_tempo.addEventListener('click', function() {

    if(tempo_1.style.display === 'block') {
        tempo_1.style.display = 'none';
    } else {
        tempo_1.style.display = 'block';
    }});

btn_institucional.addEventListener('click', function() {

    if(institucional_1.style.display === 'block') {
        institucional_1.style.display = 'none';
    } else {
        institucional_1.style.display = 'block';
    }});

btn_lgpd.addEventListener('click', function() {

    if(lgpd_1.style.display === 'block') {
        lgpd_1.style.display = 'none';
    } else {
        lgpd_1.style.display = 'block';
    }});

btn_diversidade.addEventListener('click', function() {

    if(diversidade_1.style.display === 'block') {
        diversidade_1.style.display = 'none';
    } else {
        diversidade_1.style.display = 'block';
    }});

btn_conectividade.addEventListener('click', function() {

    if(conectividade_1.style.display === 'block') {
        conectividade_1.style.display = 'none';
    } else {
        conectividade_1.style.display = 'block';
    }});

btn_soft_skills.addEventListener('click', function() {

    if(soft_skills_1.style.display === 'block') {
        soft_skills_1.style.display = 'none';
    } else {
        soft_skills_1.style.display = 'block';
    }});

btn_tecnologia.addEventListener('click', function() {

    if(tecnologia_1.style.display === 'block') {
        tecnologia_1.style.display = 'none';
    } else {
        tecnologia_1.style.display = 'block';
    }});

btn_segurança.addEventListener('click', function() {

    if(segurança_1.style.display === 'block') {
        segurança_1.style.display = 'none';
    } else {
        segurança_1.style.display = 'block';
    }});

btn_ofs.addEventListener('click', function() {

    if(ofs_1.style.display === 'block') {
        ofs_1.style.display = 'none';
    } else {
        ofs_1.style.display = 'block';
    }});

btn_desenvolver.addEventListener('click', function() {

    if(desenvolver_1.style.display === 'block') {
        desenvolver_1.style.display = 'none';
    } else {
        desenvolver_1.style.display = 'block';
    }});

btn_chromebook.addEventListener('click', function() {

    if(chromebook_1.style.display === 'block') {
        chromebook_1.style.display = 'none';
    } else {
        chromebook_1.style.display = 'block';
    }});

btn_desktop.addEventListener('click', function() {

    if(desktop_1.style.display === 'block') {
        desktop_1.style.display = 'none';
    } else {
        desktop_1.style.display = 'block';
    }});

btn_elite.addEventListener('click', function() {

    if(elite_1.style.display === 'block') {
        elite_1.style.display = 'none';
    } else {
        elite_1.style.display = 'block';
    }});

btn_elitebook.addEventListener('click', function() {

    if(elitebook_1.style.display === 'block') {
        elitebook_1.style.display = 'none';
    } else {
        elitebook_1.style.display = 'block';
    }});

btn_elitedesk.addEventListener('click', function() {

    if(elitedesk_1.style.display === 'block') {
        elitedesk_1.style.display = 'none';
    } else {
        elitedesk_1.style.display = 'block';
    }});

btn_fundamentos.addEventListener('click', function() {

    if(fundamentos_1.style.display === 'block') {
        fundamentos_1.style.display = 'none';
    } else {
        fundamentos_1.style.display = 'block';
    }});

btn_z8.addEventListener('click', function() {

    if(z8_1.style.display === 'block') {
        z8_1.style.display = 'none';
    } else {
        z8_1.style.display = 'block';
    }});

btn_probook.addEventListener('click', function() {

    if(probook_1.style.display === 'block') {
        probook_1.style.display = 'none';
    } else {
        probook_1.style.display = 'block';
    }});

btn_segurança_pc.addEventListener('click', function() {

    if(segurança_pc_1.style.display === 'block') {
        segurança_pc_1.style.display = 'none';
    } else {
        segurança_pc_1.style.display = 'block';
    }});

btn_zbook.addEventListener('click', function() {

    if(zbook_1.style.display === 'block') {
        zbook_1.style.display = 'none';
    } else {
        zbook_1.style.display = 'block';
    }});

btn_4580.addEventListener('click', function() {

    if(hp_4580_1.style.display === 'block') {
        hp_4580_1.style.display = 'none';
    } else {
        hp_4580_1.style.display = 'block';
    }});

btn_cor.addEventListener('click', function() {

    if(cor_1.style.display === 'block') {
        cor_1.style.display = 'none';
    } else {
        cor_1.style.display = 'block';
    }});   

btn_copia.addEventListener('click', function() {

    if(copia_1.style.display === 'block') {
        copia_1.style.display = 'none';
    } else {
        copia_1.style.display = 'block';
    }});  

btn_fw.addEventListener('click', function() {

    if(fw_1.style.display === 'block') {
        fw_1.style.display = 'none';
    } else {
        fw_1.style.display = 'block';
    }});

btn_formater.addEventListener('click', function() {

    if(formater_1.style.display === 'block') {
        formater_1.style.display = 'none';
    } else {
        formater_1.style.display = 'block';
    }});

btn_scanjet.addEventListener('click', function() {

    if(scanjet_1.style.display === 'block') {
        scanjet_1.style.display = 'none';
    } else {
        scanjet_1.style.display = 'block';
    }});

btn_plotter.addEventListener('click', function() {

    if(plotter_1.style.display === 'block') {
        plotter_1.style.display = 'none';
    } else {
        plotter_1.style.display = 'block';
    }});

btn_tonner.addEventListener('click', function() {

    if(tonner_1.style.display === 'block') {
        tonner_1.style.display = 'none';
    } else {
        tonner_1.style.display = 'block';
    }});

btn_7400.addEventListener('click', function() {

    if(x7400_1.style.display === 'block') {
        x7400_1.style.display = 'none';
    } else {
        x7400_1.style.display = 'block';
    }});

btn_zebra.addEventListener('click', function() {

    if(zebra_1.style.display === 'block') {
        zebra_1.style.display = 'none';
    } else {
        zebra_1.style.display = 'block';
    }});

       // Funções digitação

       const left_title = document.querySelector('.left-title');
   
       function typeWriter (elemento,delay=0) {
           const textoarray = elemento.innerHTML.split('');
           elemento.innerHTML= ''; 
   
           setTimeout(() => {
               textoarray.forEach((value, i) => {
                   setTimeout(() => {
                       elemento.innerHTML += value
                   },90* i)
               })}, delay)}
   
       typeWriter(left_title);