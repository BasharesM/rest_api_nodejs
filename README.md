# Projet pédagogique 5A EB

## Création d’une API REST pour la gestion d’un portail évènementiel
--------------------------------------------------------------------------------

L’application permettra de référencer, et de s'incrire à différents types d'évènements (conférences, meetups, workshops, ...).

Un *évènement* (Event) est représenté par :
  - un titre (obligatoire),
  - une description (obligatoire),
  - une date (obligatoire),
  - un lieu (obligatoire),
  - u nombre maximum de participants (obligatoire)

Un *évènement* (Event) est lié à :
  - une *catégorie* (Category) (Obligatoire)
  - un *organizateur* (User) (Obligatoire)
  - des *participants* (User) (Obligatoire)

Un *Utilisateur* (User) est représenté par :
  - un prénom,
  - un nom,
  - un email, (Obligatoire)
  - un password, (Obligatoire)

Un *Utilisateur* (User) est lié à :
  - des *évènements* (Event),
  - des *participations* (Event)

Une *Categorie* (Category) est représentée par :
  - un label (Obligatoire)

Une *Categorie* (Category) est lié à :
  - des évènements (Event)

  Fonctionnalités :
  --------------------------------------------------------------------------------
    - CRUD User
    - CRUD Event
    - CRUD Categorie

    - Liste des participant à un Event,
    - Liste des evenements organisés par un user,
    - Liste des évenement auquel on a participté (historique),
    - Liste des évenement auquel on va participer (futur),
    - s'inscrire à un evenement,
    - se désincrire d'un evenement,
    - Liste des évenements à venir,
    - Liste des évènements passés.


## Règles de gestion
--------------------------------------------------------------------------------
  - La création d'évènements ne peut se faire que si un utilisateur est authentifié.
  - S'inscrire à un évènement :
    - ne peut se faire que si l'évènement est à venir,
    - que si l'utilisateur est authentifité
    - le créateur de l'évènement est automatiquement inscrit à l'évenement créé.
  - Un évènement ne peut être supprimer que par le créateur,
  - La ressource Categorie ne sera exposé que sur le GET (list)
  - Deux catégories ne peuvent pas avoir le même label (insensible à la casse)
  - La désinscription à un évènement que par l'utilisateur authentifié ou par l'organisateur
  - L'organisateur ne peut pas se désinscrire de son évènement.
  - Un evenement doit avoir au minimum 10 place disponible
  - Une personne ne peut s'inscrire si l'evenement est plein.


## Notation :
--------------------------------------------------------------------------------
Fonctionnalité: (7 pts),
Respect des règles REST: (7 pts),
Qualité de présentation: ()
#### Happy Coding! © julien-sarazin teaching @esgi 2016-2017
