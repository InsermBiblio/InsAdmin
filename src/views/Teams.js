import React, { Fragment } from "react";
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
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  TextInput,
  BooleanInput,
  BooleanField,
  downloadCSV,
  required,
  SaveButton,
  Toolbar
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import LinkRelational from "../components/LinkRelational";
import {
  UrlSearchStructures,
  UrlSearchTeams,
  UrlSearchFedeInserm
} from "../components/LinkAccount";
import { renameKeys } from "../utils/utils";
import AutoCompleteInput from "../components/AutoCompleteInput";

const TeamsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />

    <AutoCompleteInput
      label="resources.teams.fields.structure_code"
      source="structure_code"
      reference="structures"
      field="teams"
      optionText="code"
      filter="teams.structure_code"
    />

    <SelectInput
      source="structures.structure_type"
      label="resources.teams.fields.structure_type"
      choices={[
        { id: "CIC", name: "CIC" },
        { id: "IFR", name: "IFR" },
        { id: "U", name: "U" },
        { id: "US", name: "US" },
        { id: "ADR", name: "ADR" },
        { id: "DEP", name: "DEP" },
        { id: "ITMO", name: "ITMO" }
      ]}
    />

    <TextInput source="like_teams.name" label="resources.teams.fields.name" />
    <TextInput
      source="like_teams.principal_lastname"
      label="resources.teams.fields.principal_lastname"
    />

    <AutoCompleteInput
      label="resources.teams.fields.principal_it"
      source="principal_it"
      reference="institutes"
      field="institutes"
      filter="teams.principal_it"
    />

    <ReferenceInput
      label="resources.teams.fields.specialized_commission"
      source="specialized_commission"
      reference="section_cn"
    >
      <AutocompleteInput optionText="name" />
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
      label="resources.structures.fields.regional_delegation"
      source="structures.regional_delegation"
      reference="regionals_delegations"
      allowEmpty={true}
    >
      <AutocompleteInput optionText="code" />
    </ReferenceInput>

    <TextInput
      source="like_structures.mixt_university"
      label="resources.teams.fields.mixt_university"
    />
    <TextInput
      source="like_structures.cnrs_mixity"
      label="resources.teams.fields.cnrs_mixity"
    />
    <TextInput
      source="like_structures.other_mixity"
      label="resources.teams.fields.other_mixity"
    />
    <BooleanInput source="teams.active" label="resources.teams.fields.active" />
  </Filter>
);

const exporter = async (records, fetchRelatedRecords) => {
  const listSpecializedCommission = await fetchRelatedRecords(
    records,
    "specialized_commission",
    "section_cn"
  );
  const listStructures = await fetchRelatedRecords(
    records,
    "structure_code",
    "structures"
  );
  const listPrincipalIt = await fetchRelatedRecords(
    records,
    "principal_it",
    "institutes"
  );
  const listRegionalDelegation = await fetchRelatedRecords(
    records,
    "regional_delegation",
    "regionals_delegations"
  );
  const dataWithRelation = records.map(record => ({
    ...record,
    specialized_commission:
      listSpecializedCommission[record.specialized_commission] &&
      listSpecializedCommission[record.specialized_commission].name,
    structure_code:
      listStructures[record.structure_code] &&
      listStructures[record.structure_code].name,
    principal_it:
      listPrincipalIt[record.principal_it] &&
      listPrincipalIt[record.principal_it].name,
    regional_delegation:
      listRegionalDelegation[record.regional_delegation] &&
      listRegionalDelegation[record.regional_delegation].name
  }));
  const data = dataWithRelation.map(record => renameKeys(record, "teams"));
  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "teams");
};

const PostBulkActionButtons = props => (
  <Fragment>
    <DeleteButtonWithConfirmation label="Supprimer" {...props} />
  </Fragment>
);

export const TeamsList = ({ ...props }) => (
  <List
    {...props}
    filters={<TeamsFilter />}
    perPage={10}
    exporter={exporter}
    bulkActionButtons={<PostBulkActionButtons />}
  >
    <Datagrid>
      <LinkRelational
        label="resources.teams.fields.structure_code"
        page="structures"
        relationalId="structure_code"
        source="code"
      />

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

      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const TeamsTitle = ({ record }) => {
  return record.name;
};

const PostEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const TeamsEdit = ({ ...props }) => (
  <Edit title={<TeamsTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm toolbar={<PostEditToolbar />}>
      <TextField
        source="structure_type"
        label="resources.teams.fields.structure_type"
      />

      <TextField
        source="iunop_code"
        label="resources.teams.fields.iunop_code"
      />
      <TextField
        source="structure_name"
        label="resources.teams.fields.structure_name"
      />

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
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.teams.fields.name"
        validate={required("Ce champ est requis!")}
      />

      <AutoCompleteInput
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        field="teams"
        optionText="code"
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

      <AutoCompleteInput
        label="resources.teams.fields.principal_it"
        source="principal_it"
        reference="institutes"
        field="institutes"
      />

      <ReferenceInput
        label="resources.teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
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
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="team_number"
        label="resources.teams.fields.team_number"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.teams.fields.name"
        validate={required("Ce champ est requis!")}
      />

      <AutoCompleteInput
        label="resources.teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        field="teams"
        optionText="code"
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

      <AutoCompleteInput
        label="resources.teams.fields.principal_it"
        source="principal_it"
        reference="institutes"
        field="institutes"
      />

      <ReferenceInput
        label="resources.teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
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
      <BooleanInput source="active" label="resources.teams.fields.active" />
      <TextInput source="comment" label="resources.teams.fields.comment" />
    </SimpleForm>
  </Create>
);
