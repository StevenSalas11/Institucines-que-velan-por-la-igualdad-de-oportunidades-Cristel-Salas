function scrollToInstituciones() {
    document.getElementById('instituciones').scrollIntoView({ behavior: 'smooth' });
}

function mostrarInfo(institucion) {
    const infoContent = document.getElementById('info-content');
    const infoSection = document.getElementById('info');

    let content = '';

    switch (institucion) {
        case 'onu':
            content = `
                <h2>ONU - Organización de las Naciones Unidas</h2>
                <p>La ONU busca garantizar los derechos humanos y promover la igualdad de oportunidades en todo el mundo, trabajando en áreas como el acceso a la educación, igualdad de género, reducción de la pobreza y paz mundial.</p>
                <p><strong>Importancia:</strong> Impulsa proyectos de equidad a nivel mundial.</p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                    <li>Declaración Universal de los Derechos Humanos</li>
                    <li>Objetivos de Desarrollo Sostenible (ODS)</li>
                </ul>
            `;
            break;
        case 'unesco':
            content = `
                <h2>UNESCO - Educación, Ciencia y Cultura</h2>
                <p>Promueve el acceso universal a educación de calidad, ciencia, cultura e información, eliminando barreras de discriminación.</p>
                <p><strong>Importancia:</strong> Lucha por la diversidad cultural y la educación equitativa.</p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                    <li>Programa Educación para Todos</li>
                    <li>Convención sobre la Protección de la Diversidad Cultural</li>
                </ul>
            `;
            break;
        case 'unicef':
            content = `
                <h2>UNICEF - Fondo para la Infancia</h2>
                <p>Trabaja en todo el mundo para proteger a los niños vulnerables, garantizando su acceso a salud, educación y seguridad.</p>
                <p><strong>Importancia:</strong> Ayuda a eliminar las desigualdades entre los niños.</p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                    <li>Campaña Escuelas para África</li>
                    <li>Programas contra el trabajo infantil</li>
                </ul>
            `;
            break;
        case 'oit':
            content = `
                <h2>OIT - Organización Internacional del Trabajo</h2>
                <p>Promueve el trabajo decente y políticas laborales inclusivas que respeten los derechos de todos los trabajadores.</p>
                <p><strong>Importancia:</strong> Combate la discriminación en el empleo.</p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                    <li>Convenio sobre Igualdad de Remuneración</li>
                    <li>Programas contra el trabajo forzoso y la discriminación laboral</li>
                </ul>
            `;
            break;
    }

    infoContent.innerHTML = content;
    infoSection.classList.remove('hidden');
    infoSection.scrollIntoView({ behavior: 'smooth' });
}

function cerrarInfo() {
    document.getElementById('info').classList.add('hidden');
}

// ----- Barra de progreso -----
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});

// ----- Modo oscuro -----
document.getElementById('toggle-darkmode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});