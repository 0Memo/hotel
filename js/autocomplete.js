function autocomplete(inp, arr) {
    // l'autocomplete prend 2 arguments, l'input (inp) et le tableau "words" (arr)
    var currentFocus;
    // execute une fonction quand on écrit dans l'input
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        // ferme toutes les listes déjà ouvertes de valeurs auto-complétées
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        // Crée une div qui contient les valeurs
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);
        // on boucle sur le tableau
        for (i = 0; i < arr.length; i++) {
            // vérification si l'item commence par la même lettre que ce qui est écrit dans l'input
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                // Crée une div pour chaque élément qui match
                b = document.createElement("DIV");
                // met les lettres qui match en gras
                b.innerHTML = "<b>" + arr[i].substr(0, val.length) + "</b>";
                b.innerHTML += arr[i].substr(val.length);
                // insère l'élément du tableau  dans l'input
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                // exécute la fonction quand on click sur un des items de suggestion
                b.addEventListener("click", function (e) {
                    // insert la valeur auto-complétée dans le champ texte
                    inp.value = this.getElementsByTagName("input")[0].value;
                    // ferme toute les listes
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    // exécute une fonction quand on appui sur une touche du clavier
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            // si la touche flèche bas est appuyée, le focus change
            currentFocus++;
            // et met l'item courant en valeur
            addActive(x);
        } else if (e.keyCode == 38) { //up
            // si la touche flèche haut est appuyée, le focus change
            currentFocus--;
            // et met l'item courant en valeur
            addActive(x);
        } else if (e.keyCode == 13) {
            // si la touche Entrée est appuyée, le event.preventDefault evite le rechargement de page 
            e.preventDefault();
            if (currentFocus > -1) {
                // simule un click sur l'item sélectionné
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        // permet de mettre la classe 'active' sur l'item
        if (!x) return false;
        // Remove la classe "active" sur tous les items
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        // ajoute la classe "autocomplete-active"
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        // supprime la classe 'autocomplete-active"
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        // Ferme toute la liste, sauf celui passer en argument
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    
    // exécute la function si on clique sur la page en dehord de la liste
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


var words = ["Accueil", "Accès", "Actualités", "Avis", "Avis Chambres", "Avis Hôtel", "Avis Restaurant", "Avis Spa", "Carte Brasserie", "Carte Dégustation", "Carte Restaurant", "Cave à vin", "Chambre Classique", "Chambre Confort", "Chambre Deluxe", "Chambres", "Conditions Générales de Vente", "Contact", "Déjeuner", "Dîner", "Evènements", "Horaires Restaurant", "Horaires Spa", "Mentions Légales", "Panier", "Plan du Site", "Presse", "Recrutement", "Restaurant", "Réservation", "Salon de Thé", "Soin Découverte", "Soin Détente", "Soin Plaisir", "Soin Relaxant", "Soin Évasion", "Spa", "Suite"];


autocomplete(document.getElementById("search"), words);