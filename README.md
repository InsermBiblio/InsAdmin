# BibAdmin

Admin for InsApi

Interface d'administration pour [InsApi](https://github.com/InsermBiblio/InsApi).
Elle utilise l'outil [react-admin](https://github.com/marmelab/react-admin).

Elle permet de gérer les droits d'accès par institut, unité, individu aux ressources documentaires exposées à travers [InsEzProxy](https://github.com/InsermBiblio/InsEzProxy).

## Installation

```bash
make install
```

## Développement

Pré-requis : lancer InsApi

Ensuite démarrer InsAdmin : `make run-dev`

Ensuite rendez vous sur http://localhost:3011/public pour l'accès à l'interface Web de InsAdmin.
Logguez vous avec le login/mdp administrateur défini au moment de l'installation de InsApi.
