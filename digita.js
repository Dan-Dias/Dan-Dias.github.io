    // Funções digitação

    const name = document.querySelector('.name');
    const profession = document.querySelector('.profession');

    function typeWriter (elemento,delay=0) {
        const textoarray = elemento.innerHTML.split('');
        elemento.innerHTML= ''; 

        setTimeout(() => {
            textoarray.forEach((value, i) => {
                setTimeout(() => {
                    elemento.innerHTML += value
                },90* i)
            })}, delay)}

    typeWriter(name);
    typeWriter(profession, 1100);
    
    