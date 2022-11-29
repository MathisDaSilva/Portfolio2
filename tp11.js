function affichage_tableau()
{
   document.write("<table width=30% border=2px;>");
                for(i=0; i<=5; i++)
                {
                    document.write("<tr><td>*</td> <td>*</td> <td>*</td></tr>")
                }
                document.write("</table>");
}

function affichage_tableau2()
{
    var ligne = prompt("donner le nombre de ligne a afficher");
    
    document.write("<table width=30% border=2px;>");
                for(i=0; i<ligne; i++)
                {
                    document.write("<tr><td>"+i+"</td> <td>A</td> <td>B</td></tr>")
                }
                document.write("</table>");
}

function connexion()
{


   var id = prompt("Donnez votre identifiant");
   var mdp = prompt("Donnez votre mot de passe");

   if (id =="admin" && mdp =="admin")
   {
       document.write("Bienvenue:    "+ id);
   }

   else
   {
   alert("Accès refusé");
   }
}


function connexion2()
{   var i=0;
   do {


   var id = prompt("Donnez votre identifiant");
   var mdp = prompt("Donnez votre mot de passe");

   if (id =="admin" && mdp =="admin")
   {
       document.write("Bienvenue:    "+ id);
       break;
   }

   else
   {
   alert("Accès refusé");
   }

   i += 1;
   
    } while (i < 3);

    if (i==3)
    alert("délai dépassé")
}

function fun_switch()
{
    var color = prompt("entrez une couleur");

    switch(color)
    {
        case "vert": document.body.style.background = "green";;
        break;
        case "VERT": document.body.style.background = "green";;
        break;
        case "bleu": document.body.style.background = "blue";;
        break;
        case "BLEU": document.body.style.background = "blue";;
        break;
            default: alert("couleur non définie");
    }
}

function chaine_caractere()
{
    var chaine= prompt("donnez un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient " +chaine.length+" caractères <br>");
    document.write("ma première lettre est "+chaine.substr(0,1)+"<br>");
}

function chaine_caractere2()
{
    var chaine= prompt("donnez un mot")
    document.write("<b> Le mot saisie est: "+chaine+"</b> <br>");
    document.write("la première lettre est: "+chaine.substr(0,1)+"<br>");
    document.write("la chaine contient: " +chaine.length+" caractères <br>");
    document.write("la dernière lettre est: "+chaine.substr(-1)+"<br>");
}

var nbClic=0;

function clic() {
nbClic++; //incrémentation nbClic de 1
if (nbClic>=3)
alert('perdu :)\nvous avez cliqué '+nbClic+' fois');

}

function raz() {
    nbClic=0;
}