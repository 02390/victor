function compartilharHistoria() {
    // Obtém o texto digitado pelo usuário
    var historia = document.getElementById('historiaUsuario').value;
    
    // Se o texto não estiver vazio, pode adicionar a lógica para compartilhar
    if (historia.trim() !== '') {
        // Aqui você pode adicionar a lógica para compartilhar a história
        
        // Limpa o texto do textarea
        document.getElementById('historiaUsuario').value = '';
        
        ;
    } else {
        // Se o texto estiver vazio, avisa ao usuário
        alert('Por favor, escreva sua história antes de compartilhar.');
    }
}
