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

const TeamsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput source="like_teams.name" label="resources.teams.fields.name" />
    <TextInput
      source="like_teams.team_number"
      label="resources.teams.fields.team_number"
    />
  </Filter>
);

/*const LinkForStructure = ({ record }) => {
  const link = `#/structures/${record.structure_code}/show`;
  return <a href={link}>{record.structure_code}</a>;
};
LinkForStructure.defaultProps = {
  label: "resources.teams.fields.structure_code"
};
const LinkForRegionalsDelegations = ({ record }) => {
  const link = `#/section_cn/${record.regional_delegation}`;
  return <a href={link}>{record.regional_delegation}</a>;
};
LinkForStructure.defaultProps = {
  label: "resources.teams.fields.regional_delegation"
};*/

export const TeamsList = ({ ...props }) => (
  <List {...props} filters={<TeamsFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit source="id" label="resources.teams.fields.id" />
      <ReferenceField
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        linkType="show"
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
      <TextField
        source="nb_structures_accounts"
        label="resources.teams.fields.nb_structures_accounts"
      />
      <TextField
        source="nb_teams_account"
        label="resources.teams.fields.nb_teams_account"
      />
      <TextField
        source="nb_personal_accounts"
        label="resources.teams.fields.nb_personal_accounts"
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
      <TextInput source="name" label="resources.teams.fields.name" />

      <ReferenceInput
        label="resources.teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
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
      <TextInput
        source="nb_personal_accounts"
        label="resources.teams.fields.nb_personal_accounts"
      />
      <BooleanInput source="active" label="resources.teams.fields.active" />
      <TextInput source="comment" label="resources.teams.fields.comment" />
    </SimpleForm>
  </Edit>
);

export const TeamsCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="resources.teams.fields.name" />

      <ReferenceInput
        label="resources.teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
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
      <TextInput
        source="nb_personal_accounts"
        label="resources.teams.fields.nb_personal_accounts"
      />
      <BooleanInput source="active" label="resources.teams.fields.active" />
      <TextInput source="comment" label="resources.teams.fields.comment" />
    </SimpleForm>
  </Create>
);
