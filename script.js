document.getElementById('preinscription-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let session = document.getElementById('session').value;
  let price = document.querySelector('input[name="price"]:checked').value;
  let payment = document.getElementById('payment').value;
  let message = `Préinscription à la session : ${session}\nPrix : ${price} FCFA\nMoyen de paiement : ${payment}`;
  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = `https://api.whatsapp.com/send?phone=+22601468949&text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
});
