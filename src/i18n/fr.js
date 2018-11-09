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
      name: "Comptes structures et équipes",
      fields: {
        username: "Login",
        password: "Password",
        name: "Nom",
        firstname: "Prénom",
        phone: "Téléphone",
        mail: "Email",
        dr: "dr",
        primary_institute: "Institut principal",
        institutes: "Institut secondaire",
        primary_unit: "Unité principale",
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
      name: "Comptes individuels FédéInserm",
      fields: {
        uid: "Uid",
        cnrs: "CNRS",
        name: "Nom",
        firstname: "Prénom",
        mail: "Email",
        primary_institute: "Institut Janus",
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
      name: "IT",
      fields: {
        id: "id",
        name: "Nom",
        address: "Adresse",
        phone: "Téléphone",
        mail: "Mail",
        director: "Responsable",
        mail_director: "Mail responsable",
        code: "code"
      }
    },
    teams: {
      name: "Equipes",
      fields: {
        id: "id",
        structure_code: "Structure",
        team_number: "Numéro",
        name: "Nom",
        principal_lastname: "Nom du responsable d'équipe",
        principal_firstname: "Prenom du responsable d'équipe",
        principal_email: "Email du responsable d'équipe",
        principal_it: "Institut du responsable d'équipe",
        total_etp_effectiv: "Nombre d'effectif ETP total",
        nb_researchers_inserm_pp: "Nombres de chercheurs INSERM PP",
        nb_researchers_inserm_etp: "Nombres de chercheurs INSERM ETP",
        nb_researchers_crns_pp: "Nombres de chercheurs CNRS PP",
        nb_researchers_crns_etp: "Nombres de chercheurs CNRS ETP",
        nb_researchers_other_pp: "Nombres de chercheurs autre PP",
        nb_researchers_other_etp: "Nombres de chercheurs autre ETP",
        nb_post_phd_student_pp: "Nombres d'étudiants Post-Doctorants PP",
        nb_post_phd_student_etp: "Nombres d'étudiants Post-Doctorants ETP",
        nb_phd_student_pp: "Nombres d'étudiants Doctorants PP",
        nb_phd_student_etp: "Nombres d'étudiants Doctorants ETP",
        nb_cdi_researchers_pp: "Nombres de chercheurs en CDI PP",
        nb_cdi_researchers_etp: "Nombres de chercheurs en CDI ETP",
        nb_cdd_researchers_pp: "Nombres de chercheurs en CDD PP",
        nb_cdd_researchers_etp: "Nombres de chercheurs en CDD ETP",
        nb_teacher_researchers_pp: "Nombres de chercheurs-professeur PP",
        nb_teacher_researchers_etp: "Nombres de chercheurs-professeur ETP",
        nb_pu_ph_pp: "Nombres de PU PH PP",
        nb_pu_ph_etp: "Nombres de PU PH ETP",
        nb_hosp_others_pp: "Nombres HOSP autres PP",
        nb_hosp_others_etp: "Nombres HOSP autres ETP",
        nb_ir_inserm_pp: "Nombres IR INSERM PP",
        nb_ir_inserm_etp: "Nombres IR INSERM ETP",
        nb_ir_non_inserm_pp: "Nombres IR non INSERM PP",
        nb_ir_non_inserm_etp: "Nombres IR non INSERM ETP",
        nb_ita_others_pp: "Nombres ITA autes PP",
        nb_ita_others_etp: "Nombres ITA autres ETP",
        nb_cdd_ir_pp: "Nombres CDD IR PP",
        nb_cdd_ir_etp: "Nombres CDD IR ETP",
        nb_cdd_others_pp: "Nombres CDD autres PP",
        nb_cdd_others_etp: "Nombres CDD autres ETP",
        nb_admin_pp: "Nombres admin PP",
        nb_admin_etp: "Nombres admin ETP",
        nb_personal_accounts: "Nombres de comptes individuels",
        active: "Actif",
        comment: "Commentaire"
      }
    },
    structures: {
      name: "Structures",
      fields: {
        id: "id",
        structure_type: "Type de structure",
        iunop_code: "Code iunop",
        code: "code",
        name: "nom",
        number_of_certified_team: "Nombres d'équipes labélisé",
        regional_delegation: "Délégation régionale",
        community: "Communauté",
        site: "Site",
        street: "Rue",
        address_supplement: "Supplément d'adresse",
        postal_code: "Code postal",
        city: "Ville",
        country: "Pays",
        director_lastname: "Nom du directeur",
        director_firstname: "Prenom de directeur",
        director_email: "Courriel du directeur",
        email: "Courriel",
        dc_lastname: "Correspondant documentaire nom",
        dc_firstname: "Correspondant documentaire prenom",
        dc_phone: "Correspondant documentaire téléphone",
        dc_email: "Correspondant documentaire courriel",
        mixt_university: "Université de mixité",
        cnrs_mixity: "Mixitié CNRS",
        other_mixity: "Autre mixité",
        principal_it: "Institut du responsable d'équipe",
        secondary_it: "Institut secondaire",
        specialized_commission: "Commission spécialisée",
        total_etp_effectiv: "Nombre d'effectif ETP total",
        nb_researchers_inserm_pp: "Nombres de chercheurs INSERM PP",
        nb_researchers_inserm_etp: "Nombres de chercheurs INSERM ETP",
        nb_researchers_crns_pp: "Nombres de chercheurs CNRS PP",
        nb_researchers_crns_etp: "Nombres de chercheurs CNRS ETP",
        nb_researchers_other_pp: "Nombres de chercheurs autre PP",
        nb_researchers_other_etp: "Nombres de chercheurs autre ETP",
        nb_post_phd_student_pp: "Nombres d'étudiants Post-Doctorants PP",
        nb_post_phd_student_etp: "Nombres d'étudiants Post-Doctorants ETP",
        nb_phd_student_pp: "Nombres d'étudiants Doctorants PP",
        nb_phd_student_etp: "Nombres d'étudiants Doctorants ETP",
        nb_cdi_researchers_pp: "Nombres de chercheurs en CDI PP",
        nb_cdi_researchers_etp: "Nombres de chercheurs en CDI ETP",
        nb_cdd_researchers_pp: "Nombres de chercheurs en CDD PP",
        nb_cdd_researchers_etp: "Nombres de chercheurs en CDD ETP",
        nb_teacher_researchers_pp: "Nombres de chercheurs-professeur PP",
        nb_teacher_researchers_etp: "Nombres de chercheurs-professeur ETP",
        nb_pu_ph_pp: "Nombres de PU PH PP",
        nb_pu_ph_etp: "Nombres de PU PH ETP",
        nb_hosp_others_pp: "Nombres HOSP autres PP",
        nb_hosp_others_etp: "Nombres HOSP autres ETP",
        nb_ir_inserm_pp: "Nombres IR INSERM PP",
        nb_ir_inserm_etp: "Nombres IR INSERM ETP",
        nb_ir_non_inserm_pp: "Nombres IR non INSERM PP",
        nb_ir_non_inserm_etp: "Nombres IR non INSERM ETP",
        nb_ita_others_pp: "Nombres ITA autes PP",
        nb_ita_others_etp: "Nombres ITA autres ETP",
        nb_cdd_ir_pp: "Nombres CDD IR PP",
        nb_cdd_ir_etp: "Nombres CDD IR ETP",
        nb_cdd_others_pp: "Nombres CDD autres PP",
        nb_cdd_others_etp: "Nombres CDD autres ETP",
        nb_admin_pp: "Nombres admin PP",
        nb_admin_etp: "Nombres admin ETP",
        nb_structures_accounts: "Nombres de comptes structures",
        nb_teams_account: "Nombres de comptes équipes",
        nb_personal_accounts: "Nombress de comptes individuel",
        active: "Actif",
        comment: "Commentaire"
      }
    },
    regionals_delegations: {
      name: "Délégations régionales",
      fields: {
        id: "id",
        name: "Nom",
        address: "Adresse",
        phone: "Téléphone",
        mail: "Email",
        director: "Directeur",
        director_mail: "Mail directeur",
        rh: "RH",
        rh_mail: "Mail RH",
        rri: "RRI",
        rri_mail: "Mail RRI",
        website: "Site web",
        code: "code"
      }
    },
    communities: {
      name: "Communautés",
      fields: {
        id: "id",
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
      name: "Commissions spécialisées",
      fields: {
        name: "Nom",
        code: "Code",
        comment: "Commentaire"
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
