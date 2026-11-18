console.log("----Exercice 5----");
const resultats = [
{ joueur: "Sarra", score: 7 },
{ joueur: "Ali", score: 10 },
{ joueur: "Yasmine", score: 4 },
{ joueur: "Mohamed", score: 8 },
{ joueur: "Ines", score: 5 }
];
resultats.forEach((r) => {
    r["% sur 10"] = (r.score / 10) * 100;
});
console.table(resultats);
resultats.sort((a, b) => b.score - a.score);
console.log("--- Palmarès ---");
resultats.forEach((r, i) => {
    console.log((i + 1) + ". " + r.joueur + " - " + r.score + " / 10 (" + r["% sur 10"] + " %)");
});
console.log(resultats.every((r) => r.score >= 3));
console.log(resultats.some((r) => r.score === 10));
const repasser = resultats.find((r) => r.score < 5);
console.log(repasser.joueur);
const inferieur = resultats.find((r) => r.score < 5);
console.log(inferieur.score);
const nbjoueurs = resultats.length;
const somme = resultats.reduce((acc, r) => acc + r.score, 0);
const moyenne = somme / nbjoueurs;
const moyenne2 = Math.round(moyenne * 10) / 10;
const meilleur = resultats[0];
const prochainereunion = new Date(2026,11,15,14,30);
const aujourdhui = new Date();
const diff =  prochainereunion - aujourdhui;
const joursrestants = Math.ceil(diff / (1000 * 60 * 60 * 24));
const stat = {
    nbjoueurs: nbjoueurs,
    moyenne: moyenne2,
    meilleur: meilleur,
    prochaine_reunion: prochainereunion,
    jours_restants: joursrestants,
    afficher(){
        console.log("Nombre de joueurs : " + this.nbjoueurs);
        console.log("Moyenne des scores : " + this.moyenne);
        console.log("Meilleur joueur : " + this.meilleur.joueur);
        console.log("Prochaine réunion : " + this.prochaine_reunion);
        console.log("Jours restants avant la prochaine réunion : " + this.jours_restants);
    }

}
stat.afficher();