# Cahier des charges Dylan Schirino

## Application IOS de gestion des dépenses.

### Le contexte
Vous êtes fort dépensier et vous n'arrivez pas à gérer vos dépenses et vos fins de mois et vous avez besoin d'aide? Avec cette application vous pourrez noter en temps réel sur votre téléphone vos dépenses quotidiennes tout en fixant une limite à ne pas dépasser.

### Objectif principal du site
Aider les gens à mieux gérer leurs argents pour les prévenir par le biais de notifications, etc.
### Objectif secondaire
Voir les remboursements d'un prêt immobilier,voiture,hypothèque.

(À MÉDITER) Offrir la possibilité au client d'avoir des bons de réduction dans certains magasins, etc. si le budget restant est satisfaisant et si on remarque une marge de progression chez le client sans lui dire comment on calcule cela bien sûr pour éviter tout excès.  
### La liste des fonctionnalités 

- En mettant un montant maximum à ne pas dépenser chaque mois, chaque semaine, ou même par jour pour que le client se fixe une limite.
- Le client inscrit a chaque fois le montant de ce qu'il vient de dépenser et le nom de ce qu'il vient de dépenser ! Le client pourra faire cela en mode hors ligne et puis synchroniser à la maison par exemple
- Le client est averti par (mail), en notification lorsqu'il arrive presque à échéance 
- Si jamais a la fin du mois le client a plus de X€ il est félicité et on pourrait proposer des cadeaux peut être comme des bons d'achat ou de réduction avec certaines marques, etc.
- Le client peut également économiser de l'argent pour s'offrir quelque chose, une sorte de pense-bête de son compte épargne. Donc s’il met 10€ sur le compte il doit le noter dans cette section
- Possibilité de calculer le temps de remboursement restant en temps réel d'un prêt ou de plusieurs en complétant au préalable les taux d'intérêt de la banque, le temps de remboursement.
- (Possibilité de voir en temps réel combien on épargne sur un compte épargne par mois, par jour par an.) À MÉDITER
- Des sections proposées de style, restaurants, voiture, maison, courses pour faciliter l'ajout d'une nouvelle dépense.

### Technologie utilisée
Cordova donc principalement du node ET prévoir un site vitrine de l'application donc juste un petit one page par exemple où l'on présente l'application avec les liens pour renvoyer vers l'APPSTORE, etc.

### Menu

- Un bouton principal au milieu du menu pour ajouter une dépense, ajouter un prêt, etc.
- Une section qui affiche la liste des dépenses
- Une section qui affiche les prêt et remboursement
- Une section qui affiche ce qu'on a épargné
- Une section de paramètre ???

### Architecture

#### Dépense
- On aura un sous-menu en haut de l'écran pour voir les dépenses du jour / mois / année
- la page se découpera en 3 sections :

1. une section en haut à droite qui affiche le montant dépensé.
2. Une section en haut à gauche qui affichera un tableau, une statistique des dépenses.
3. Une section en dessous qui affichera la liste des 10 dernières dépenses.

#### Ajouter une dépense, un prêt
- Un formulaire rapide qui permet de mettre le nom, le montant et la date d'achat.
- Un formulaire qui permet d'entrer les informations nécessaires sur le prêt.

#### Section des prêts et remboursement
- un sous-menu pour voir le remboursement sur un certain temps.
- Une section qui affiche donc le temps qu'il reste pour rembourser.
- Une section qui affiche le montant restant à rembourser
- Une section qui affiche une image correspondant a ce qu'on veut rembourser? Par exemple si on veut rembourser une voiture on affichera une petite voiture en flat design qui pourra être animée...

#### Section des paramètres 
Avec les paramètres de notifications, etc.





