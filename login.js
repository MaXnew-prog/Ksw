$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})


$(document).ready(function () {
  // Écouter l'événement de soumission du formulaire
  $('form').submit(function (event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupérer les valeurs des champs username et password
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();

    // Appeler la fonction pour vérifier les identifiants
    checkCredentials(username, password);
  });

  // Fonction pour vérifier les identifiants côté client
  function checkCredentials(username, password) {
    // Remplacez cela par une vérification côté serveur dans un environnement de production
    // Pour cet exemple, utilisons des identifiants statiques
    var validUsername = 'utilisateur1';
    var validPassword = 'motdepasse1';

    // Vérifier si les identifiants correspondent
    if (username === validUsername && password === validPassword) {
      // Rediriger vers la page chat.html si les identifiants sont valides
      window.location.href = 'chat.html';
    } else {
      // Afficher un message d'erreur si les identifiants sont invalides
      alert('Identifiants invalides. Veuillez réessayer.');
    }
  }
});