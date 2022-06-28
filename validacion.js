//Haz tú validación en javascript acá
$('.pdf-view').hide()
$('#CV-pdf').click(()=>{
    $('.pdf-view').show()
})
$('#cerrar').click(()=>{
    $('.pdf-view').hide()
})
$('.formcontato__botao').click(()=>{
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const nom=document.getElementById('nom').value
    const email=document.getElementById('email').value
    const asunto=document.getElementById('asunto').value
    const mensagem=$('#mensagem').val()
    if(nom.length>0 & email.length>0 & asunto.length>0 & mensagem.length>0 && emailRegex.test(email)){
        Swal.fire({
            icon: 'success',
            title: 'Listo',
            showConfirmButton: false,
            timer: 1500
          })
    }
})