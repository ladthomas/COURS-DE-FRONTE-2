
        const loginForm = document.getElementById('loginForm');
        const message = document.getElementById('message');

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nomUtilisateur = document.getElementById('nom_utilisateur').value;
            const motDePasse = document.getElementById('mot_de_passe').value;

            // Votre logique de validation ici (par exemple, vérification des champs)

            if (nomUtilisateur === '' || motDePasse === '') {
                message.textContent = 'Tous les champs sont obligatoires.';
                return;
            }

            // Si la validation réussit, vous pouvez rediriger l'utilisateur ou effectuer d'autres actions
            // Par exemple, vous pouvez envoyer les données au serveur pour une vérification plus approfondie.

            // Effacez le message d'erreur
            message.textContent = '';
            // Soumettez le formulaire ou effectuez d'autres actions, par exemple, une requête Ajax.

            // Exemple : Soumettez le formulaire
            // loginForm.submit();
        });
