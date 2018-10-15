import frenchMessages from "ra-language-french";

export default {
  ...frenchMessages,
  "Not Found": "Contenu non trouvé",
  Unauthorized: "Accès non autorisé",
  "Internal Server Error": "Erreur interne",
  "Failed to fetch": "Impossible de récupérer les données",
  pos: {
    search: "Rechercher",
    configuration: "Configuration",
    language: "Langue",
    theme: {
      name: "Theme",
      light: "Clair",
      dark: "Obscur"
    }
  },
  resources: {
    adminUsers: {
      name: "Administrateurs",
      fields: {
        id: "id",
        login: "login",
        comment: "Commentaire"
      }
    },
    inistAccounts: {
      name: "Comptes INIST",
      fields: {
        username: "Login",
        password: "Password",
        name: "Nom",
        firstname: "Prénom",
        phone: "Téléphone",
        mail: "Email",
        dr: "dr",
        main_institute: "Institut principal",
        institutes: "Institut secondaire",
        main_unit: "Unité principale",
        units: "Unités secondaires",
        communities: "Communautés propres",
        all_communities: "Toutes les communautés",
        subscription_date: "Date d'inscription",
        subscription_date_before: "Date d'inscription avant",
        subscription_date_after: "Date d'inscription après",
        expiration_date: "Date d'expiration",
        expiration_date_before: "Date d'expiration avant",
        expiration_date_after: "Date d'expiration après",
        active: "active",
        comment: "Commentaire"
      }
    },
    janusAccounts: {
      name: "Comptes Janus",
      fields: {
        uid: "Uid",
        cnrs: "CNRS",
        name: "Nom",
        firstname: "Prénom",
        mail: "Email",
        main_institute: "Institut Janus",
        additional_institutes: "Institut secondaire",
        primary_unit: "Unité Janus",
        additional_units: "Unités secondaires",
        communities: "Communautés propres",
        all_communities: "Toutes les communautés",
        last_connexion: "Dernière connexion",
        last_connexion_before: "Dernière connexion avant",
        last_connexion_after: "Dernière connexion après",
        first_connexion: "Première connexion",
        first_connexion_before: "Première connexion avant",
        first_connexion_after: "Première connexion après",
        active: "active",
        comment: "Commentaire"
      }
    },
    institutes: {
      name: "Instituts",
      fields: {
        id: "id",
        code: "Code",
        name: "Nom",
        communities: "Communautés"
      }
    },
    units: {
      name: "Unités",
      fields: {
        code: "Code",
        name: "Nom",
        implantation: "Implantation",
        body: "Corps de rattachement",
        building: "Bâtiment",
        street: "Rue",
        post_office_box: "Boîte postal",
        postal_code: "Code postal",
        town: "Ville",
        country: "Pays",
        unit_dr: "Délégation régionale d'appartenance",
        nb_researcher_cnrs: "Nombre de chercheur CNRS",
        nb_researcher_nocnrs: "Nombre de chercheur non CNRS",
        nb_doctorant: "Nombre de doctorant",
        nb_post_doctorant: "Nombre de post-doctorant",
        director_name: "Nom du directeur",
        director_firstname: "Prénom du directeur",
        director_mail: "Email du directeur",
        correspondant_documentaire: "Correspondant documentaire",
        cd_phone: "Téléphone correspondant documentaire",
        cd_mail: "Email correspondant documentaire",
        correspondant_informatique: "Autre correspondant",
        ci_phone: "Téléphone autre correspondant",
        ci_mail: "Email autre correspondant",
        main_institute: "Institut principal",
        institutes: "Institut secondaire",
        nb_inist_account: "Nombre de compte Inist",
        nb_janus_account: "Nombre de compte Janus",
        communities: "Communautés",
        section_cn: "Sections",
        active: "active",
        comment: "Commentaire"
      }
    },
    communities: {
      name: "Communautés",
      fields: {
        name: "Nom",
        gate: "Portail ezproxy",
        user_id: "User Id",
        password: "Password",
        profile: "Profil",
        ebsco: "Ebsco"
      }
    },
    databases: {
      name: "Base de données",
      fields: {
        name_fr: "Nom (fr)",
        name_en: "Nom (en)",
        url_fr: "Url (fr)",
        url_en: "Url (en)",
        text_fr: "Description (fr)",
        text_en: "Description (en)",
        image: "Image",
        communities: "Communautés",
        active: "Active"
      }
    },
    section_cn: {
      name: "Sections du comité national",
      fields: {
        name: "Nom",
        code: "Code",
        comment: "Commentaire",
        primary_institutes: "Instituts principaux",
        secondary_institutes: "Instituts secondaires"
      }
    },
    revues: {
      name: "Ressources favorites",
      fields: {
        title: "Titre",
        communities: "Communautés",
        domains: "Domaines",
        gates: "Portails",
        url: "Url"
      }
    },
    notification: {
      approved_success: "Commentaire approuvé",
      approved_error: "Erreur: Commentaire non approuvé",
      rejected_success: "Commentaire rejeté",
      rejected_error: "Erreur: Commentaire non rejeté"
    }
  }
};
