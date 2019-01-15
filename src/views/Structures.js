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
  BooleanField,
  TextInput,
  ReferenceField,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  ReferenceArrayInput,
  SelectArrayInput,
  downloadCSV,
  SelectInput,
  LongTextInput,
  required,
  SaveButton,
  Toolbar
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import {
  UrlSearchStructures,
  UrlSearchTeams,
  UrlSearchFedeInserm
} from "../components/LinkAccount";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import { renameKeys } from "../utils/utils";

const StructuresFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />

    <SelectInput
      source="structures.structure_type"
      label="resources.structures.fields.structure_type"
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
      allowEmpty={true}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>

    <ReferenceInput
      label="resources.structures.fields.specialized_commission"
      source="structures.specialized_commission"
      reference="section_cn"
      allowEmpty={true}
    >
      <AutocompleteInput optionText="name" />
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
      source="regional_delegation"
      reference="regionals_delegations"
      allowEmpty={true}
    >
      <AutocompleteInput optionText="code" />
    </ReferenceInput>

    <TextInput
      source="like_structures.director_lastname"
      label="resources.structures.fields.director_lastname"
    />
    <TextInput
      source="like_structures.mixt_university"
      label="resources.structures.fields.mixt_university"
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

const exporter = async (records, fetchRelatedRecords) => {
  const listSpecializedCommission = await fetchRelatedRecords(
    records,
    "specialized_commission",
    "section_cn"
  );
  const listRegionalDelegation = await fetchRelatedRecords(
    records,
    "regional_delegation",
    "regionals_delegations"
  );
  const listPrincipalIt = await fetchRelatedRecords(
    records,
    "principal_it",
    "institutes"
  );
  const dataWithRelation = records.map(record => ({
    ...record,
    specialized_commission:
      listSpecializedCommission[record.specialized_commission] &&
      listSpecializedCommission[record.specialized_commission].name,
    regional_delegation:
      listRegionalDelegation[record.regional_delegation] &&
      listRegionalDelegation[record.regional_delegation].name,
    principal_it:
      listPrincipalIt[record.principal_it] &&
      listPrincipalIt[record.principal_it].name,
    secondary_it: record.secondary_it
      ? record.secondary_it.map(n => listPrincipalIt[n].name)
      : []
  }));
  const data = dataWithRelation.map(record => renameKeys(record, "structures"));
  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "structures");
};

const PostBulkActionButtons = props => (
  <Fragment>
    <DeleteButtonWithConfirmation label="Supprimer" {...props} />
  </Fragment>
);

export const StructuresList = ({ ...props }) => (
  <List
    {...props}
    filters={<StructuresFilter />}
    perPage={10}
    exporter={exporter}
    bulkActionButtons={<PostBulkActionButtons />}
  >
    <Datagrid>
      <LinkEdit source="code" label="resources.structures.fields.code" />
      <LinkEdit source="name" label="resources.structures.fields.name" />

      <ReferenceField
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
        allowEmpty={true}
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
        source="total_etp_effectiv"
        label="resources.structures.fields.total_etp_effectiv"
      />
      <TextField
        source="number_of_certified_team"
        label="resources.structures.fields.number_of_certified_team"
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

      <BooleanField
        source="active"
        label="resources.structures.fields.active"
      />
      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const StructuresTitle = ({ record }) => {
  return record.name;
};

const PostEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const StructuresEdit = ({ ...props }) => (
  <Edit title={<StructuresTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm redirect="list" toolbar={<PostEditToolbar />}>
      <TextInput
        source="code"
        label="resources.structures.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.structures.fields.name"
        validate={required("Ce champ est requis!")}
      />

      <SelectInput
        source="structure_type"
        label="resources.structures.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" },
          { id: "ADR", name: "ADR" },
          { id: "DEP", name: "DEP" },
          { id: "ITMO", name: "ITMO" }
        ]}
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="iunop_code"
        label="resources.structures.fields.iunop_code"
      />

      <TextInput
        source="number_of_certified_team"
        label="resources.structures.fields.number_of_certified_team"
      />

      <ReferenceInput
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.principal_it"
        source="principal_it"
        reference="institutes"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceArrayInput
        label="resources.structures.fields.secondary_it"
        source="secondary_it"
        reference="institutes"
        allowEmpty={true}
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>

      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
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
      <BooleanInput
        source="active"
        label="resources.structures.fields.active"
      />
      <LongTextInput
        source="comment"
        label="resources.structures.fields.comment"
      />
      <ReferenceInput
        label="resources.structures.fields.community"
        reference="communities"
        source="community"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const StructuresCreate = ({ ...props }) => (
  <Create {...props} redirect="list" actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="code"
        label="resources.structures.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.structures.fields.name"
        validate={required("Ce champ est requis!")}
      />

      <SelectInput
        source="structure_type"
        label="resources.structures.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" },
          { id: "ADR", name: "ADR" },
          { id: "DEP", name: "DEP" },
          { id: "ITMO", name: "ITMO" }
        ]}
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="iunop_code"
        label="resources.structures.fields.iunop_code"
      />

      <TextInput
        source="number_of_certified_team"
        label="resources.structures.fields.number_of_certified_team"
      />

      <ReferenceInput
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.principal_it"
        source="principal_it"
        reference="institutes"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceArrayInput
        label="resources.structures.fields.secondary_it"
        source="secondary_it"
        reference="institutes"
        allowEmpty={true}
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>

      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
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
      <BooleanInput
        source="active"
        label="resources.structures.fields.active"
      />
      <LongTextInput
        source="comment"
        label="resources.structures.fields.comment"
      />
      <ReferenceInput
        label="resources.structures.fields.community"
        reference="communities"
        source="community"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
