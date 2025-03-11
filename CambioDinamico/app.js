const cambiar = document.querySelector('button');
let texto = document.getElementsByClassName('texto');

function cambio_parrafo() {
    let parrafos = [];
    
    parrafos[0] = 'El mundo está en constante evolución, y la capacidad de adaptarse a los cambios es clave para el éxito. Cada día surgen nuevas tecnologías y tendencias que transforman la manera en que interactuamos con nuestro entorno. Adoptar una mentalidad flexible permite aprovechar oportunidades y enfrentar desafíos con creatividad y determinación.';
    parrafos[1] = 'La digitalización ha revolucionado la forma en que vivimos y trabajamos. Desde la automatización de procesos hasta la inteligencia artificial, las empresas y las personas deben actualizarse constantemente para mantenerse competitivas. La clave está en comprender cómo estas herramientas pueden mejorar la eficiencia y optimizar el rendimiento.'; 
    parrafos[2] = 'El cambio no solo ocurre en el ámbito tecnológico o empresarial, sino también en el desarrollo individual. Aprender nuevas habilidades, mejorar hábitos y salir de la zona de confort son pasos esenciales para el crecimiento. Cada experiencia trae consigo una oportunidad de aprendizaje que nos permite evolucionar y alcanzar nuevas metas.';
    parrafos[3] = 'En un mundo donde los recursos son limitados, es fundamental adoptar prácticas sostenibles. Desde el consumo responsable hasta la implementación de energías renovables, cada acción cuenta. Las empresas y las comunidades están transformando sus modelos de negocio para minimizar el impacto ambiental y crear un futuro más equilibrado.';
    parrafos[4] = 'Aceptar el cambio como una constante nos permite fluir con la vida en lugar de resistirnos a ella. Cada transformación, por pequeña que sea, contribuye a un proceso de mejora continua. La clave está en mantener una actitud abierta, resiliente y proactiva para aprovechar al máximo cada nueva oportunidad que se presente.';

    let i = Math.floor(Math.random() * parrafos.length);
    texto[0].innerHTML = parrafos[i];
}

cambiar.addEventListener('click', () => {
    cambio_parrafo();
});