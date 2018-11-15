import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextField,
  ReferenceField,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanField
} from "react-admin";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import {
  UrlSearchStructures,
  UrlSearchTeams,
  UrlSearchFedeInserm
} from "../components/LinkAccount";

const TeamsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />

    <ReferenceInput
      label="resources.teams.fields.structure_code"
      source="teams.structure_code"
      reference="structures"
      allowEmpty={true}
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <TextInput
      source="like_teams.team_number"
      label="resources.teams.fields.team_number"
    />
    <TextInput source="like_teams.name" label="resources.teams.fields.name" />
    <TextInput
      source="like_teams.principal_lastname"
      label="resources.teams.fields.principal_lastname"
    />

    <ReferenceInput
      label="resources.teams.fields.principal_it"
      source="teams.principal_it"
      reference="institutes"
      allowEmpty={true}
    >
      <AutocompleteInput source="name" />
    </ReferenceInput>

    <ReferenceInput
      label="resources.teams.fields.specialized_commission"
      source="teams.specialized_commission"
      reference="section_cn"
      allowEmpty={true}
    >
      <AutocompleteInput source="name" />
    </ReferenceInput>

    <TextInput
      source="like_structures.site"
      label="resources.teams.fields.site"
    />
    <TextInput
      source="like_structures.city"
      label="resources.teams.fields.city"
    />

    <ReferenceInput
      label="resources.teams.fields.regional_delegation"
      source="teams.regional_delegation"
      reference="regionals_delegations"
      allowEmpty={true}
    >
      <AutocompleteInput source="name" />
    </ReferenceInput>
    <TextInput
      source="like_teams.mixt_university"
      label="resources.teams.fields.mixt_university"
    />
    <TextInput
      source="like_teams.cnrs_mixity"
      label="resources.teams.fields.cnrs_mixity"
    />
    <TextInput
      source="like_teams.other_mixity"
      label="resources.teams.fields.other_mixity"
    />
    <BooleanInput source="teams.active" label="resources.teams.fields.active" />
  </Filter>
);

export const TeamsList = ({ ...props }) => (
  <List {...props} filters={<TeamsFilter />} perPage={10}>
    <Datagrid>
      <ReferenceField
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>

      <LinkEdit
        source="team_number"
        label="resources.teams.fields.team_number"
      />
      <LinkEdit source="name" label="resources.teams.fields.name" />

      <ReferenceField
        label="resources.teams.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
      >
        <TextField source="code" />
      </ReferenceField>

      <TextField source="site" label="resources.teams.fields.site" />
      <TextField source="city" label="resources.teams.fields.city" />
      <TextField
        source="mixt_university"
        label="resources.teams.fields.mixt_university"
      />
      <TextField
        source="cnrs_mixity"
        label="resources.teams.fields.cnrs_mixity"
      />
      <TextField
        source="other_mixity"
        label="resources.teams.fields.other_mixity"
      />
      <TextField
        source="total_etp_effectiv"
        label="resources.teams.fields.total_etp_effectiv"
      />
      <UrlSearchStructures
        source="nb_structure_account"
        label="resources.structures.fields.nb_structure_account"
      />
      <UrlSearchTeams
        source="nb_team_account"
        label="resources.structures.fields.nb_team_account"
      />
      <UrlSearchFedeInserm
        source="nb_individual_account"
        label="resources.structures.fields.nb_individual_account"
      />
      <BooleanField source="active" label="resources.teams.fields.active" />

      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const TeamsTitle = ({ record }) => {
  return record.name;
};

export const TeamsEdit = ({ ...props }) => (
  <Edit title={<TeamsTitle />} {...props}>
    <SimpleForm>
      <TextField
        source="structure_type"
        label="resources.teams.fields.structure_type"
      />

      <TextField
        source="iunop_code"
        label="resources.teams.fields.iunop_code"
      />
      <TextField source="code" label="resources.teams.fields.code" />

      <ReferenceField
        label="resources.teams.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>

      <TextField source="site" label="resources.teams.fields.site" />
      <TextField source="city" label="resources.teams.fields.city" />
      <TextField
        source="dc_lastname"
        label="resources.teams.fields.dc_lastname"
      />
      <TextField
        source="dc_firstname"
        label="resources.teams.fields.dc_firstname"
      />
      <TextField source="dc_phone" label="resources.teams.fields.dc_phone" />
      <TextField source="dc_email" label="resources.teams.fields.dc_email" />

      <TextInput
        source="team_number"
        label="resources.teams.fields.team_number"
      />
      <TextInput source="name" label="resources.teams.fields.name" />

      <ReferenceInput
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="code" />
      </ReferenceInput>

      <TextInput
        source="principal_lastname"
        label="resources.teams.fields.principal_lastname"
      />
      <TextInput
        source="principal_firstname"
        label="resources.teams.fields.principal_firstname"
      />
      <TextInput
        source="principal_email"
        label="resources.teams.fields.principal_email"
      />

      <ReferenceInput
        label="resources.teams.fields.principal_it"
        source="principal_it"
        reference="institutes"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="code" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <TextInput
        source="total_etp_effectiv"
        label="resources.teams.fields.total_etp_effectiv"
      />
      <TextInput
        source="nb_researchers_inserm_pp"
        label="resources.teams.fields.nb_researchers_inserm_pp"
      />
      <TextInput
        source="nb_researchers_inserm_etp"
        label="resources.teams.fields.nb_researchers_inserm_etp"
      />
      <TextInput
        source="nb_researchers_crns_pp"
        label="resources.teams.fields.nb_researchers_crns_pp"
      />
      <TextInput
        source="nb_researchers_crns_etp"
        label="resources.teams.fields.nb_researchers_crns_etp"
      />
      <TextInput
        source="nb_researchers_other_pp"
        label="resources.teams.fields.nb_researchers_other_pp"
      />
      <TextInput
        source="nb_researchers_other_etp"
        label="resources.teams.fields.nb_researchers_other_etp"
      />
      <TextInput
        source="nb_post_phd_student_pp"
        label="resources.teams.fields.nb_post_phd_student_pp"
      />
      <TextInput
        source="nb_post_phd_student_etp"
        label="resources.teams.fields.nb_post_phd_student_etp"
      />
      <TextInput
        source="nb_phd_student_pp"
        label="resources.teams.fields.nb_phd_student_pp"
      />
      <TextInput
        source="nb_phd_student_etp"
        label="resources.teams.fields.nb_phd_student_etp"
      />
      <TextInput
        source="nb_cdi_researchers_pp"
        label="resources.teams.fields.nb_cdi_researchers_pp"
      />
      <TextInput
        source="nb_cdi_researchers_etp"
        label="resources.teams.fields.nb_cdi_researchers_etp"
      />
      <TextInput
        source="nb_cdd_researchers_pp"
        label="resources.teams.fields.nb_cdd_researchers_pp"
      />
      <TextInput
        source="nb_cdd_researchers_etp"
        label="resources.teams.fields.nb_cdd_researchers_etp"
      />
      <TextInput
        source="nb_teacher_researchers_pp"
        label="resources.teams.fields.nb_teacher_researchers_pp"
      />
      <TextInput
        source="nb_teacher_researchers_etp"
        label="resources.teams.fields.nb_teacher_researchers_etp"
      />
      <TextInput
        source="nb_pu_ph_pp"
        label="resources.teams.fields.nb_pu_ph_pp"
      />
      <TextInput
        source="nb_pu_ph_etp"
        label="resources.teams.fields.nb_pu_ph_etp"
      />
      <TextInput
        source="nb_hosp_others_pp"
        label="resources.teams.fields.nb_hosp_others_pp"
      />
      <TextInput
        source="nb_hosp_others_etp"
        label="resources.teams.fields.nb_hosp_others_etp"
      />
      <TextInput
        source="nb_ir_inserm_pp"
        label="resources.teams.fields.nb_ir_inserm_pp"
      />
      <TextInput
        source="nb_ir_inserm_etp"
        label="resources.teams.fields.nb_ir_inserm_etp"
      />
      <TextInput
        source="nb_ir_non_inserm_pp"
        label="resources.teams.fields.nb_ir_non_inserm_pp"
      />
      <TextInput
        source="nb_ir_non_inserm_etp"
        label="resources.teams.fields.nb_ir_non_inserm_etp"
      />
      <TextInput
        source="nb_ita_others_pp"
        label="resources.teams.fields.nb_ita_others_pp"
      />
      <TextInput
        source="nb_ita_others_etp"
        label="resources.teams.fields.nb_ita_others_etp"
      />
      <TextInput
        source="nb_cdd_ir_pp"
        label="resources.teams.fields.nb_cdd_ir_pp"
      />
      <TextInput
        source="nb_cdd_ir_etp"
        label="resources.teams.fields.nb_cdd_ir_etp"
      />
      <TextInput
        source="nb_cdd_others_pp"
        label="resources.teams.fields.nb_cdd_others_pp"
      />
      <TextInput
        source="nb_cdd_others_etp"
        label="resources.teams.fields.nb_cdd_others_etp"
      />
      <TextInput
        source="nb_admin_pp"
        label="resources.teams.fields.nb_admin_pp"
      />
      <TextInput
        source="nb_admin_etp"
        label="resources.teams.fields.nb_admin_etp"
      />
      <UrlSearchStructures
        source="nb_structure_account"
        label="resources.structures.fields.nb_structure_account"
      />
      <UrlSearchTeams
        source="nb_team_account"
        label="resources.structures.fields.nb_team_account"
      />
      <UrlSearchFedeInserm
        source="nb_individual_account"
        label="resources.structures.fields.nb_individual_account"
      />
      <BooleanInput source="active" label="resources.teams.fields.active" />
      <TextInput source="comment" label="resources.teams.fields.comment" />
    </SimpleForm>
  </Edit>
);

export const TeamsCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" label="resources.teams.fields.name" />

      <ReferenceInput
        label="resources.teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <TextInput
        source="team_number"
        label="resources.teams.fields.team_number"
      />

      <TextInput
        source="principal_lastname"
        label="resources.teams.fields.principal_lastname"
      />
      <TextInput
        source="principal_firstname"
        label="resources.teams.fields.principal_firstname"
      />
      <TextInput
        source="principal_email"
        label="resources.teams.fields.principal_email"
      />

      <ReferenceInput
        label="resources.structures.fields.principal_it"
        source="principal_it"
        reference="institutes"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="code" />
      </ReferenceInput>

      <TextInput
        source="total_etp_effectiv"
        label="resources.teams.fields.total_etp_effectiv"
      />
      <TextInput
        source="nb_researchers_inserm_pp"
        label="resources.teams.fields.nb_researchers_inserm_pp"
      />
      <TextInput
        source="nb_researchers_inserm_etp"
        label="resources.teams.fields.nb_researchers_inserm_etp"
      />
      <TextInput
        source="nb_researchers_crns_pp"
        label="resources.teams.fields.nb_researchers_crns_pp"
      />
      <TextInput
        source="nb_researchers_crns_etp"
        label="resources.teams.fields.nb_researchers_crns_etp"
      />
      <TextInput
        source="nb_researchers_other_pp"
        label="resources.teams.fields.nb_researchers_other_pp"
      />
      <TextInput
        source="nb_researchers_other_etp"
        label="resources.teams.fields.nb_researchers_other_etp"
      />
      <TextInput
        source="nb_post_phd_student_pp"
        label="resources.teams.fields.nb_post_phd_student_pp"
      />
      <TextInput
        source="nb_post_phd_student_etp"
        label="resources.teams.fields.nb_post_phd_student_etp"
      />
      <TextInput
        source="nb_phd_student_pp"
        label="resources.teams.fields.nb_phd_student_pp"
      />
      <TextInput
        source="nb_phd_student_etp"
        label="resources.teams.fields.nb_phd_student_etp"
      />
      <TextInput
        source="nb_cdi_researchers_pp"
        label="resources.teams.fields.nb_cdi_researchers_pp"
      />
      <TextInput
        source="nb_cdi_researchers_etp"
        label="resources.teams.fields.nb_cdi_researchers_etp"
      />
      <TextInput
        source="nb_cdd_researchers_pp"
        label="resources.teams.fields.nb_cdd_researchers_pp"
      />
      <TextInput
        source="nb_cdd_researchers_etp"
        label="resources.teams.fields.nb_cdd_researchers_etp"
      />
      <TextInput
        source="nb_teacher_researchers_pp"
        label="resources.teams.fields.nb_teacher_researchers_pp"
      />
      <TextInput
        source="nb_teacher_researchers_etp"
        label="resources.teams.fields.nb_teacher_researchers_etp"
      />
      <TextInput
        source="nb_pu_ph_pp"
        label="resources.teams.fields.nb_pu_ph_pp"
      />
      <TextInput
        source="nb_pu_ph_etp"
        label="resources.teams.fields.nb_pu_ph_etp"
      />
      <TextInput
        source="nb_hosp_others_pp"
        label="resources.teams.fields.nb_hosp_others_pp"
      />
      <TextInput
        source="nb_hosp_others_etp"
        label="resources.teams.fields.nb_hosp_others_etp"
      />
      <TextInput
        source="nb_ir_inserm_pp"
        label="resources.teams.fields.nb_ir_inserm_pp"
      />
      <TextInput
        source="nb_ir_inserm_etp"
        label="resources.teams.fields.nb_ir_inserm_etp"
      />
      <TextInput
        source="nb_ir_non_inserm_pp"
        label="resources.teams.fields.nb_ir_non_inserm_pp"
      />
      <TextInput
        source="nb_ir_non_inserm_etp"
        label="resources.teams.fields.nb_ir_non_inserm_etp"
      />
      <TextInput
        source="nb_ita_others_pp"
        label="resources.teams.fields.nb_ita_others_pp"
      />
      <TextInput
        source="nb_ita_others_etp"
        label="resources.teams.fields.nb_ita_others_etp"
      />
      <TextInput
        source="nb_cdd_ir_pp"
        label="resources.teams.fields.nb_cdd_ir_pp"
      />
      <TextInput
        source="nb_cdd_ir_etp"
        label="resources.teams.fields.nb_cdd_ir_etp"
      />
      <TextInput
        source="nb_cdd_others_pp"
        label="resources.teams.fields.nb_cdd_others_pp"
      />
      <TextInput
        source="nb_cdd_others_etp"
        label="resources.teams.fields.nb_cdd_others_etp"
      />
      <TextInput
        source="nb_admin_pp"
        label="resources.teams.fields.nb_admin_pp"
      />
      <TextInput
        source="nb_admin_etp"
        label="resources.teams.fields.nb_admin_etp"
      />
      <BooleanInput source="active" label="resources.teams.fields.active" />
      <TextInput source="comment" label="resources.teams.fields.comment" />
      <ReferenceField
        label="resources.structures.fields.community"
        reference="communities"
        source="communities"
        allowEmpty={true}
      >
        <TextField source="name" />
      </ReferenceField>
    </SimpleForm>
  </Create>
);
