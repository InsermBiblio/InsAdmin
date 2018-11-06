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
  SingleFieldList,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceArrayField,
  ChipField,
  BooleanField
} from "react-admin";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";

const TeamsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput source="title" label="resources.revues.fields.title" />
  </Filter>
);

export const TeamsList = ({ ...props }) => (
  <List {...props} filters={<TeamsFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit
        source="structure_type"
        label="resources.teams.fields.structure_type"
      />

      <LinkEdit source="code" label="resources.teams.fields.code" />

      <TextField
        source="id_structure"
        label="resources.structures.fields.id_structure"
      />

      <TextField
        source="iunop_code"
        label="resources.structures.fields.iunop_code"
      />

      <BooleanField
        source="active"
        label="resources.structures.fields.active"
      />

      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const TeamsTitle = ({ record }) => {
  return record.title;
};

export const TeamsEdit = ({ ...props }) => (
  <Edit title={<TeamsTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Rechercher" source="match" alwaysOn />
      <TextInput source="title" label="resources.teams.fields.title" />
      <BooleanInput
        source="active"
        label="resources.structures.fields.active"
      />
      <ReferenceArrayInput
        label="resources.teams.fields.community"
        reference="communities"
        source="communities"
      >
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
      <TextInput source="site" label="resources.teams.fields.site" />
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
      <TextInput source="comment" label="resources.teams.fields.comment" />
    </SimpleForm>
  </Edit>
);

export const TeamsCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput label="Rechercher" source="match" alwaysOn />
      <TextInput source="title" label="resources.teams.name" />
      <BooleanInput source="active" label="resources.teams.fields.active" />
      <ReferenceArrayInput
        label="resources.teams.fields.community"
        reference="communities"
        source="communities"
      >
        <SelectArrayInput>
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
      <TextInput source="site" label="resources.teams.fields.site" />
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
      <TextInput source="comment" label="resources.teams.fields.comment" />
    </SimpleForm>
  </Create>
);
