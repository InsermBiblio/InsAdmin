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
  BooleanField,
  TextInput,
  ReferenceField,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  downloadCSV,
  SelectInput
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const StructuresFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />

    <TextInput
      source="like_structures.structure_type"
      label="resources.structures.fields.structure_type"
    />
    <TextInput
      source="like_structures.code"
      label="resources.structures.fields.code"
    />
    <TextInput
      source="like_structures.name"
      label="resources.structures.fields.name"
    />

    <ReferenceInput
      label="resources.structures.fields.principal_it"
      source="structures.principal_it"
      reference="institutes"
      linkType="show"
    >
      <AutocompleteInput source="name" />
    </ReferenceInput>

    <ReferenceInput
      label="resources.structures.fields.specialized_commission"
      source="structures.specialized_commission"
      reference="section_cn"
      linkType="show"
    >
      <AutocompleteInput source="name" />
    </ReferenceInput>

    <TextInput
      source="like_structures.site"
      label="resources.structures.fields.site"
    />
    <TextInput
      source="like_structures.city"
      label="resources.structures.fields.city"
    />
    <ReferenceInput
      label="resources.structures.fields.regional_delegation"
      source="structures.regional_delegation"
      reference="regionals_delegations"
      linkType="show"
    >
      <AutocompleteInput source="name" />
    </ReferenceInput>
    <TextInput
      source="like_structures.director_lastname"
      label="resources.structures.fields.director_lastname"
    />
    <TextInput
      source="like_structures.cnrs_mixity"
      label="resources.structures.fields.cnrs_mixity"
    />
    <TextInput
      source="like_structures.other_mixity"
      label="resources.structures.fields.other_mixity"
    />
    <BooleanInput
      source="structures.active"
      label="resources.structures.fields.active"
    />
  </Filter>
);

const exporter = records => {
  const csv = convertToCSV(records, {
    delimiter: "|"
  });
  downloadCSV(csv, "structures");
};

export const StructuresList = ({ ...props }) => (
  <List
    {...props}
    filters={<StructuresFilter />}
    perPage={10}
    exporter={exporter}
  >
    <Datagrid>
      <LinkEdit source="name" label="resources.structures.fields.name" />

      <LinkEdit source="code" label="resources.structures.fields.code" />

      <ReferenceField
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
      >
        <TextField source="code" />
      </ReferenceField>

      <TextField source="site" label="resources.structures.fields.site" />
      <TextField source="city" label="resources.structures.fields.city" />
      <TextField
        source="mixt_university"
        label="resources.structures.fields.mixt_university"
      />
      <TextField
        source="cnrs_mixity"
        label="resources.structures.fields.cnrs_mixity"
      />
      <TextField
        source="other_mixity"
        label="resources.structures.fields.other_mixity"
      />
      <TextField
        source="other_mixity"
        label="resources.structures.fields.other_mixity"
      />

      <TextField
        source="total_etp_effectiv"
        label="resources.structures.fields.total_etp_effectiv"
      />
      <TextField
        source="number_of_certified_team"
        label="resources.structures.fields.number_of_certified_team"
      />
      <TextField
        source="nb_structures_accounts"
        label="resources.structures.fields.nb_structures_accounts"
      />
      <TextField
        source="nb_teams_account"
        label="resources.structures.fields.nb_teams_account"
      />
      <TextField
        source="nb_personal_accounts"
        label="resources.structures.fields.nb_personal_accounts"
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

const StructuresTitle = ({ record }) => {
  return record.name;
};

/*
const UrlSearchInist = ({ source, record = {} }) => {
  const url = `#/inistAccounts/list?search={"main_unit.id":${record.id}}`;
  return <a href={url}>{record.nb_inist_account}</a>;
};

UrlSearchInist.defaultProps = {
  addLabel: true
};

const UrlSearchJanus = ({ source, record = {} }) => {
  const url = `#/janusAccounts/list?search={"main_unit.id":${record.id}}`;
  return <a href={url}>{record.nb_janus_account}</a>;
};

UrlSearchJanus.defaultProps = {
  addLabel: true
};*/

export const StructuresEdit = ({ ...props }) => (
  <Edit title={<StructuresTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm redirect="list">
      <TextInput source="name" label="resources.structures.fields.name" />

      <SelectInput
        source="structure_type"
        label="resources.structures.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" }
        ]}
      />
      <TextInput
        source="iunop_code"
        label="resources.structures.fields.iunop_code"
      />
      <TextInput source="code" label="resources.structures.fields.code" />
      <TextInput
        source="number_of_certified_team"
        label="resources.structures.fields.number_of_certified_team"
      />

      <ReferenceInput
        label="resources.structures.fields.regional_delegation"
        source="structures.regional_delegation"
        reference="regionals_delegations"
        linkType="show"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.principal_it"
        source="structures.principal_it"
        reference="institutes"
        linkType="show"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="structures.specialized_commission"
        reference="section_cn"
        linkType="show"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.community"
        reference="communities"
        source="communities"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <TextInput source="site" label="resources.structures.fields.site" />
      <TextInput source="street" label="resources.structures.fields.street" />
      <TextInput
        source="address_supplement"
        label="resources.structures.fields.address_supplement"
      />
      <TextInput
        source="postal_code"
        label="resources.structures.fields.postal_code"
      />
      <TextInput source="city" label="resources.structures.fields.city" />
      <TextInput source="country" label="resources.structures.fields.country" />
      <TextInput
        source="director_lastname"
        label="resources.structures.fields.director_lastname"
      />
      <TextInput
        source="director_firstname"
        label="resources.structures.fields.director_firstname"
      />
      <TextInput
        source="director_email"
        label="resources.structures.fields.director_email"
      />
      <TextInput source="email" label="resources.structures.fields.email" />
      <TextInput
        source="dc_lastname"
        label="resources.structures.fields.dc_lastname"
      />
      <TextInput
        source="dc_firstname"
        label="resources.structures.fields.dc_firstname"
      />
      <TextInput
        source="dc_phone"
        label="resources.structures.fields.dc_phone"
      />
      <TextInput
        source="dc_email"
        label="resources.structures.fields.dc_email"
      />
      <TextInput
        source="mixt_university"
        label="resources.structures.fields.mixt_university"
      />
      <TextInput
        source="cnrs_mixity"
        label="resources.structures.fields.cnrs_mixity"
      />
      <TextInput
        source="other_mixity"
        label="resources.structures.fields.other_mixity"
      />
      <TextInput
        source="total_etp_effectiv"
        label="resources.structures.fields.total_etp_effectiv"
      />
      <TextInput
        source="nb_researchers_inserm_pp"
        label="resources.structures.fields.nb_researchers_inserm_pp"
      />
      <TextInput
        source="nb_researchers_inserm_etp"
        label="resources.structures.fields.nb_researchers_inserm_etp"
      />
      <TextInput
        source="nb_researchers_crns_pp"
        label="resources.structures.fields.nb_researchers_crns_pp"
      />
      <TextInput
        source="nb_researchers_crns_etp"
        label="resources.structures.fields.nb_researchers_crns_etp"
      />
      <TextInput
        source="nb_researchers_other_pp"
        label="resources.structures.fields.nb_researchers_other_pp"
      />
      <TextInput
        source="nb_researchers_other_etp"
        label="resources.structures.fields.nb_researchers_other_etp"
      />
      <TextInput
        source="nb_post_phd_student_pp"
        label="resources.structures.fields.nb_post_phd_student_pp"
      />
      <TextInput
        source="nb_post_phd_student_etp"
        label="resources.structures.fields.nb_post_phd_student_etp"
      />
      <TextInput
        source="nb_phd_student_pp"
        label="resources.structures.fields.nb_phd_student_pp"
      />
      <TextInput
        source="nb_phd_student_etp"
        label="resources.structures.fields.nb_phd_student_etp"
      />
      <TextInput
        source="nb_cdi_researchers_pp"
        label="resources.structures.fields.nb_cdi_researchers_pp"
      />
      <TextInput
        source="nb_cdi_researchers_etp"
        label="resources.structures.fields.nb_cdi_researchers_etp"
      />
      <TextInput
        source="nb_cdd_researchers_pp"
        label="resources.structures.fields.nb_cdd_researchers_pp"
      />
      <TextInput
        source="nb_cdd_researchers_etp"
        label="resources.structures.fields.nb_cdd_researchers_etp"
      />
      <TextInput
        source="nb_teacher_researchers_pp"
        label="resources.structures.fields.nb_teacher_researchers_pp"
      />
      <TextInput
        source="nb_teacher_researchers_etp"
        label="resources.structures.fields.nb_teacher_researchers_etp"
      />
      <TextInput
        source="nb_pu_ph_pp"
        label="resources.structures.fields.nb_pu_ph_pp"
      />
      <TextInput
        source="nb_pu_ph_etp"
        label="resources.structures.fields.nb_pu_ph_etp"
      />
      <TextInput
        source="nb_hosp_others_pp"
        label="resources.structures.fields.nb_hosp_others_pp"
      />
      <TextInput
        source="nb_hosp_others_etp"
        label="resources.structures.fields.nb_hosp_others_etp"
      />
      <TextInput
        source="nb_ir_inserm_pp"
        label="resources.structures.fields.nb_ir_inserm_pp"
      />
      <TextInput
        source="nb_ir_inserm_etp"
        label="resources.structures.fields.nb_ir_inserm_etp"
      />
      <TextInput
        source="nb_ir_non_inserm_pp"
        label="resources.structures.fields.nb_ir_non_inserm_pp"
      />
      <TextInput
        source="nb_ir_non_inserm_etp"
        label="resources.structures.fields.nb_ir_non_inserm_etp"
      />
      <TextInput
        source="nb_ita_others_pp"
        label="resources.structures.fields.nb_ita_others_pp"
      />
      <TextInput
        source="nb_ita_others_etp"
        label="resources.structures.fields.nb_ita_others_etp"
      />
      <TextInput
        source="nb_cdd_ir_pp"
        label="resources.structures.fields.nb_cdd_ir_pp"
      />
      <TextInput
        source="nb_cdd_ir_etp"
        label="resources.structures.fields.nb_cdd_ir_etp"
      />
      <TextInput
        source="nb_cdd_others_pp"
        label="resources.structures.fields.nb_cdd_others_pp"
      />
      <TextInput
        source="nb_cdd_others_etp"
        label="resources.structures.fields.nb_cdd_others_etp"
      />
      <TextInput
        source="nb_admin_pp"
        label="resources.structures.fields.nb_admin_pp"
      />
      <TextInput
        source="nb_admin_etp"
        label="resources.structures.fields.nb_admin_etp"
      />
      <TextInput
        source="nb_structures_accounts"
        label="resources.structures.fields.nb_structures_accounts"
      />
      <TextInput
        source="nb_teams_account"
        label="resources.structures.fields.nb_teams_account"
      />
      <TextInput
        source="nb_personal_accounts"
        label="resources.structures.fields.nb_personal_accounts"
      />
      <BooleanInput
        source="active"
        label="resources.structures.fields.active"
      />
      <TextInput source="comment" label="resources.structures.fields.comment" />
    </SimpleForm>
  </Edit>
);

export const StructuresCreate = ({ ...props }) => (
  <Create {...props} redirect="list" actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput source="name" label="resources.structures.fields.name" />

      <SelectInput
        source="structure_type"
        label="resources.structures.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" }
        ]}
      />
      <TextInput
        source="iunop_code"
        label="resources.structures.fields.iunop_code"
      />
      <TextInput source="code" label="resources.structures.fields.code" />
      <TextInput
        source="number_of_certified_team"
        label="resources.structures.fields.number_of_certified_team"
      />

      <ReferenceInput
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.principal_it"
        source="principal_it"
        reference="institutes"
        linkType="show"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
        linkType="show"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.community"
        reference="communities"
        source="communities"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <TextInput source="site" label="resources.structures.fields.site" />
      <TextInput source="street" label="resources.structures.fields.street" />
      <TextInput
        source="address_supplement"
        label="resources.structures.fields.address_supplement"
      />
      <TextInput
        source="postal_code"
        label="resources.structures.fields.postal_code"
      />
      <TextInput source="city" label="resources.structures.fields.city" />
      <TextInput source="country" label="resources.structures.fields.country" />
      <TextInput
        source="director_lastname"
        label="resources.structures.fields.director_lastname"
      />
      <TextInput
        source="director_firstname"
        label="resources.structures.fields.director_firstname"
      />
      <TextInput
        source="director_email"
        label="resources.structures.fields.director_email"
      />
      <TextInput source="email" label="resources.structures.fields.email" />
      <TextInput
        source="dc_lastname"
        label="resources.structures.fields.dc_lastname"
      />
      <TextInput
        source="dc_firstname"
        label="resources.structures.fields.dc_firstname"
      />
      <TextInput
        source="dc_phone"
        label="resources.structures.fields.dc_phone"
      />
      <TextInput
        source="dc_email"
        label="resources.structures.fields.dc_email"
      />
      <TextInput
        source="mixt_university"
        label="resources.structures.fields.mixt_university"
      />
      <TextInput
        source="cnrs_mixity"
        label="resources.structures.fields.cnrs_mixity"
      />
      <TextInput
        source="other_mixity"
        label="resources.structures.fields.other_mixity"
      />
      <TextInput
        source="total_etp_effectiv"
        label="resources.structures.fields.total_etp_effectiv"
      />
      <TextInput
        source="nb_researchers_inserm_pp"
        label="resources.structures.fields.nb_researchers_inserm_pp"
      />
      <TextInput
        source="nb_researchers_inserm_etp"
        label="resources.structures.fields.nb_researchers_inserm_etp"
      />
      <TextInput
        source="nb_researchers_crns_pp"
        label="resources.structures.fields.nb_researchers_crns_pp"
      />
      <TextInput
        source="nb_researchers_crns_etp"
        label="resources.structures.fields.nb_researchers_crns_etp"
      />
      <TextInput
        source="nb_researchers_other_pp"
        label="resources.structures.fields.nb_researchers_other_pp"
      />
      <TextInput
        source="nb_researchers_other_etp"
        label="resources.structures.fields.nb_researchers_other_etp"
      />
      <TextInput
        source="nb_post_phd_student_pp"
        label="resources.structures.fields.nb_post_phd_student_pp"
      />
      <TextInput
        source="nb_post_phd_student_etp"
        label="resources.structures.fields.nb_post_phd_student_etp"
      />
      <TextInput
        source="nb_phd_student_pp"
        label="resources.structures.fields.nb_phd_student_pp"
      />
      <TextInput
        source="nb_phd_student_etp"
        label="resources.structures.fields.nb_phd_student_etp"
      />
      <TextInput
        source="nb_cdi_researchers_pp"
        label="resources.structures.fields.nb_cdi_researchers_pp"
      />
      <TextInput
        source="nb_cdi_researchers_etp"
        label="resources.structures.fields.nb_cdi_researchers_etp"
      />
      <TextInput
        source="nb_cdd_researchers_pp"
        label="resources.structures.fields.nb_cdd_researchers_pp"
      />
      <TextInput
        source="nb_cdd_researchers_etp"
        label="resources.structures.fields.nb_cdd_researchers_etp"
      />
      <TextInput
        source="nb_teacher_researchers_pp"
        label="resources.structures.fields.nb_teacher_researchers_pp"
      />
      <TextInput
        source="nb_teacher_researchers_etp"
        label="resources.structures.fields.nb_teacher_researchers_etp"
      />
      <TextInput
        source="nb_pu_ph_pp"
        label="resources.structures.fields.nb_pu_ph_pp"
      />
      <TextInput
        source="nb_pu_ph_etp"
        label="resources.structures.fields.nb_pu_ph_etp"
      />
      <TextInput
        source="nb_hosp_others_pp"
        label="resources.structures.fields.nb_hosp_others_pp"
      />
      <TextInput
        source="nb_hosp_others_etp"
        label="resources.structures.fields.nb_hosp_others_etp"
      />
      <TextInput
        source="nb_ir_inserm_pp"
        label="resources.structures.fields.nb_ir_inserm_pp"
      />
      <TextInput
        source="nb_ir_inserm_etp"
        label="resources.structures.fields.nb_ir_inserm_etp"
      />
      <TextInput
        source="nb_ir_non_inserm_pp"
        label="resources.structures.fields.nb_ir_non_inserm_pp"
      />
      <TextInput
        source="nb_ir_non_inserm_etp"
        label="resources.structures.fields.nb_ir_non_inserm_etp"
      />
      <TextInput
        source="nb_ita_others_pp"
        label="resources.structures.fields.nb_ita_others_pp"
      />
      <TextInput
        source="nb_ita_others_etp"
        label="resources.structures.fields.nb_ita_others_etp"
      />
      <TextInput
        source="nb_cdd_ir_pp"
        label="resources.structures.fields.nb_cdd_ir_pp"
      />
      <TextInput
        source="nb_cdd_ir_etp"
        label="resources.structures.fields.nb_cdd_ir_etp"
      />
      <TextInput
        source="nb_cdd_others_pp"
        label="resources.structures.fields.nb_cdd_others_pp"
      />
      <TextInput
        source="nb_cdd_others_etp"
        label="resources.structures.fields.nb_cdd_others_etp"
      />
      <TextInput
        source="nb_admin_pp"
        label="resources.structures.fields.nb_admin_pp"
      />
      <TextInput
        source="nb_admin_etp"
        label="resources.structures.fields.nb_admin_etp"
      />
      <TextInput
        source="nb_structures_accounts"
        label="resources.structures.fields.nb_structures_accounts"
      />
      <TextInput
        source="nb_teams_account"
        label="resources.structures.fields.nb_teams_account"
      />
      <TextInput
        source="nb_personal_accounts"
        label="resources.structures.fields.nb_personal_accounts"
      />
      <BooleanInput
        source="active"
        label="resources.structures.fields.active"
      />
      <TextInput source="comment" label="resources.structures.fields.comment" />
    </SimpleForm>
  </Create>
);
