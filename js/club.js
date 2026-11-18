console.log("----Exercice 1----");
const cotisation = 25.5;
const cotisationReduite = cotisation * 0.75;
console.log("La cotisation est de : " + cotisation + " DT");
console.log("La cotisation reduite est de : " + cotisationReduite + " DT");
console.log("La cotisation reduite est de : " + cotisationReduite.toFixed(2) + " DT");
let prenom = prompt("Votre prénom ?");
prenom = prenom.trim();
let prenompropre = prenom[0].toUpperCase() + prenom.slice(1).toLowerCase();
console.log("Prenom :" + prenompropre);
let email='${prenompropre}@club.tn'.toLowerCase();
console.log("Email :" + email);
let ok=email.includes('@');
console.log("Email valide ? " + ok);
console.log("----Exercice 2----");
const aujourdhui =new Date();
const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
const ch="Nous somme le";
console.log(ch + " " + jours[aujourdhui.getDay()] + " " + aujourdhui.getDate() + " " + mois[aujourdhui.getMonth()] + " " + aujourdhui.getFullYear());
console.log("----Exercice 3----");
const ateliers = ["HTML", "CSS", "JavaScript", "Git"];
let l=ateliers.length;
console.log("La longueur du tableau est : " + l);
console.log("Le premier element est : " + ateliers[0]);
console.log("Le dernier element est : " + ateliers[l-1]);
console.log(ateliers.push("Bootstrap"));
console.log(ateliers.pop());
console.log(ateliers.includes("PHP"));
for (let i=0; i<l; i++){
    console.log(i+1+"."+ateliers[i]);
}
console.table(ateliers);
const notes = [12, 8, 15, 10, 17, 6, 2];
console.log(notes.sort());
notes.sort((a,b) => a-b);
console.log(notes.join(" - "));
console.log("Admises :", notes.filter(note => note >= 10));
console.log("Sur 100 :", notes.map(note => note * 5));
console.log("Somme :", notes.reduce((x, note) => x + note, 0));
console.log("Moyenne :", (notes.reduce((x, note) => x + note, 0) / notes.length).toFixed(2));
console.log("----Exercice 4----");
const membre = {
  prenom: "Sarra",
  age: 19,
  ateliers: ["HTML", "CSS", "JS"],
  cotisationPayee: false,
  sePresenter() {
    return "Je suis " + this.prenom + ", " + this.age + " ans, inscrite à " + this.ateliers.length + " ateliers : " + this.ateliers.join(",") + ".";
  }
};
console.log("Le prenom  : " + membre.prenom);
console.log("age  : " + membre["age"]);
membre.email=membre.prenom+"@club.tn";
/*
const cles=Object.keys(membre);
for (let i=0; i<cles.length; i++){
    console.log(cles[i] + " : " + membre[cles[i]]);
}*/
for(i in membre){
    if(typeof membre[i] !== "function"){
        console.log(i + " : " + membre[i]);
    }
}
console.log(membre.sePresenter());
const membres = [
    { prenom: "Sarra", age: 19, cotisationPayee: true },
    { prenom: "Ali", age: 22, cotisationPayee: false },
    { prenom: "Yasmine", age: 18, cotisationPayee: true }
];
console.log(membres.map(m => m.prenom));
console.log(membres.filter(m => !m.cotisationPayee).map(m => m.prenom));
const yasmine = membres.find(m => m.prenom === "Yasmine");
console.log(yasmine);
console.log(yasmine ? yasmine.age : "Non trouvé");
console.table(membres);