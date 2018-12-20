import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  ReferenceField,
  SelectInput,
  TextField,
  DateField,
  BooleanField,
  TextInput,
  downloadCSV,
  LongTextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  required
} from "react-admin";
import { renameKeys } from "../utils/utils";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import { FrenchDateInput } from "../components/FrenchDateInput";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import LinkRelational from "../components/LinkRelational";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import { AutoCompleteReferenceInput } from "../components/AutoCompleteReferenceInput";

const AccountsStructuresTeamsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput
      source="like_account_structures_teams.login"
      label="resources.account_structures_teams.fields.login"
    />
    <TextInput
      source="like_account_structures_teams.password"
      label="resources.account_structures_teams.fields.password"
    />
    <TextInput
      source="like_teams.principal_lastname"
      label="resources.account_structures_teams.fields.principal_lastname"
    />
    <TextInput
      source="like_teams.principal_email"
      label="resources.account_structures_teams.fields.principal_email"
    />
    <SelectInput
      source="account_structures_teams.structure_type"
      label="resources.account_structures_teams.fields.structure_type"
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
    <AutoCompleteReferenceInput
      label="resources.account_structures_teams.fields.structure_code"
      element="account_structures_teams.structure_code"
      source="structure_code"
      reference="structures"
      field="structures"
      optionText="code"
      isFilter={true}
    />

    <AutoCompleteReferenceInput
      label="resources.account_structures_teams.fields.team_number"
      element="account_structures_teams.team_number"
      source="team_number"
      reference="teams"
      field="teams"
      optionText="team_number"
      isFilter={true}
    />

    <TextInput
      source="like_teams.name"
      label="resources.account_structures_teams.fields.name"
    />
    <SelectInput
      source="account_structures_teams.type_of_code"
      label="resources.account_structures_teams.fields.type_of_code"
      choices={[
        { id: "Structure", name: "Structure" },
        { id: "Equipe", name: "Equipe" },
        { id: "Autre", name: "Autre" }
      ]}
    />
    <AutoCompleteReferenceInput
      label="resources.account_structures_teams.fields.regional_delegation"
      element="structures.regional_delegation"
      source="regional_delegation"
      reference="regionals_delegations"
      field="regionals_delegations"
      optionText="code"
      isFilter={true}
    />

    <TextInput
      source="like_structures.site"
      label="resources.account_structures_teams.fields.site"
    />
    <TextInput
      source="like_structures.city"
      label="resources.account_structures_teams.fields.city"
    />
    <TextInput
      source="like_structures.mixt_university"
      label="resources.account_structures_teams.fields.mixt_university"
    />
    <TextInput
      source="like_structures.cnrs_mixity"
      label="resources.account_structures_teams.fields.cnrs_mixity"
    />
    <TextInput
      source="like_structures.other_mixity"
      label="resources.account_structures_teams.fields.other_mixity"
    />

    <AutoCompleteReferenceInput
      label="resources.account_structures_teams.fields.principal_it"
      element="teams.principal_it"
      source="principal_it"
      reference="institutes"
      field="institutes"
      optionText="name"
      isFilter={true}
    />

    <AutoCompleteReferenceInput
      label="resources.account_structures_teams.fields.specialized_commission"
      element="teams.specialized_commission"
      source="specialized_commission"
      reference="section_cn"
      field="section_cn"
      optionText="name"
      isFilter={true}
    />

    <FrenchDateInput
      source="to_account_structures_teams.register_date"
      label="resources.account_structures_teams.fields.register_date_before"
    />
    <FrenchDateInput
      source="from_account_structures_teams.register_date"
      label="resources.account_structures_teams.fields.register_date_after"
    />
    <FrenchDateInput
      source="to_account_structures_teams.expiration_date"
      label="resources.account_structures_teams.fields.expiration_date_before"
    />
    <FrenchDateInput
      source="from_account_structures_teams.expiration_date"
      label="resources.account_structures_teams.fields.expiration_date_after"
    />
    <BooleanInput
      source="account_structures_teams.active"
      label="resources.account_structures_teams.fields.active"
    />
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
    structure_code:
      listStructures[record.structure_code] &&
      listStructures[record.structure_code].name,
    principal_it:
      listPrincipalIt[record.principal_it] &&
      listPrincipalIt[record.principal_it].name,
    specialized_commission:
      listSpecializedCommission[record.specialized_commission] &&
      listSpecializedCommission[record.specialized_commission].name,
    regional_delegation:
      listRegionalDelegation[record.regional_delegation] &&
      listRegionalDelegation[record.regional_delegation].name
  }));
  const data = dataWithRelation.map(record =>
    renameKeys(record, "account_structures_teams")
  );
  data.forEach(element => {
    element["Date d'inscription"] = element["Date d'inscription"]
      .replace(/T/, " ")
      .replace(/\..+/, "");
    element["Intitulé de la structure"] = element["Code de la structure"];
    delete element["Code de la structure"];
    element["Code de la structure"] = element.code;
    delete element.code;
  });

  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "comptes_structures_equipes");
};

export const AccountsStructuresTeamsList = ({ ...props }) => (
  <List
    {...props}
    filters={<AccountsStructuresTeamsFilter />}
    perPage={10}
    exporter={exporter}
  >
    <Datagrid>
      <LinkEdit
        source="login"
        label="resources.account_structures_teams.fields.login"
      />
      <LinkEdit
        source="password"
        label="resources.account_structures_teams.fields.password"
      />
      <LinkRelational
        label="resources.account_structures_teams.fields.structure_code"
        page="structures"
        relationalId="structure_code"
        source="code"
      />
      <LinkRelational
        label="resources.account_structures_teams.fields.team_number"
        page="teams"
        relationalId="id"
        source="team_number"
      />
      <LinkRelational
        label="resources.account_structures_teams.fields.name"
        page="teams"
        relationalId="id"
        source="name"
      />
      <TextField
        source="type_of_code"
        label="resources.account_structures_teams.fields.type_of_code"
      />
      <TextField
        source="principal_lastname"
        label="resources.account_structures_teams.fields.principal_lastname"
      />
      <TextField
        source="principal_firstname"
        label="resources.account_structures_teams.fields.principal_firstname"
      />
      <TextField
        source="principal_email"
        label="resources.account_structures_teams.fields.principal_email"
      />
      <ReferenceField
        label="resources.account_structures_teams.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>
      <TextField
        source="site"
        label="resources.account_structures_teams.fields.site"
      />
      <TextField
        source="city"
        label="resources.account_structures_teams.fields.city"
      />
      <DateField
        source="register_date"
        label="resources.account_structures_teams.fields.register_date"
      />
      <DateField
        source="expiration_date"
        label="resources.account_structures_teams.fields.expiration_date"
      />
      <BooleanField
        source="active"
        label="resources.account_structures_teams.fields.active"
      />
      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const AccountsStructuresTeamsTitle = ({ record }) => {
  return record.login;
};

export const AccountsStructuresTeamsEdit = ({ ...props }) => (
  <Edit
    title={<AccountsStructuresTeamsTitle />}
    {...props}
    actions={<ListEditActions />}
  >
    <SimpleForm>
      <TextInput
        source="login"
        label="resources.account_structures_teams.fields.login"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="password"
        label="resources.account_structures_teams.fields.password"
        validate={required("Ce champ est requis!")}
      />
      <SelectInput
        source="structure_type"
        label="resources.account_structures_teams.fields.structure_type"
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
      <ReferenceInput
        label="resources.account_structures_teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.account_structures_teams.fields.team_number"
        source="team_number"
        reference="teams"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="team_number" />
      </ReferenceInput>
      <TextField
        source="name"
        label="resources.account_structures_teams.fields.name"
      />

      <SelectInput
        source="type_of_code"
        label="resources.account_structures_teams.fields.type_of_code"
        choices={[
          { id: "Structure", name: "Structure" },
          { id: "Equipe", name: "Equipe" },
          { id: "Autre", name: "Autre" }
        ]}
      />

      <TextField
        source="principal_lastname"
        label="resources.account_structures_teams.fields.principal_lastname"
      />
      <TextField
        source="principal_firstname"
        label="resources.account_structures_teams.fields.principal_firstname"
      />
      <TextField
        source="principal_email"
        label="resources.account_structures_teams.fields.principal_email"
      />
      <ReferenceField
        label="resources.account_structures_teams.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>
      <TextField
        source="site"
        label="resources.account_structures_teams.fields.site"
      />
      <TextField
        source="city"
        label="resources.account_structures_teams.fields.city"
      />
      <TextField
        source="mixt_university"
        label="resources.account_structures_teams.fields.mixt_university"
      />
      <TextField
        source="cnrs_mixity"
        label="resources.account_structures_teams.fields.cnrs_mixity"
      />
      <TextField
        source="other_mixity"
        label="resources.account_structures_teams.fields.other_mixity"
      />
      <ReferenceField
        label="resources.account_structures_teams.fields.principal_it"
        source="principal_it"
        reference="institutes"
        allowEmpty={true}
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        label="resources.account_structures_teams.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
        allowEmpty={true}
      >
        <TextField source="name" />
      </ReferenceField>
      <FrenchDateInput
        source="register_date"
        label="resources.account_structures_teams.fields.register_date"
      />
      <FrenchDateInput
        source="expiration_date"
        label="resources.account_structures_teams.fields.expiration_date"
      />
      <LongTextInput source="comment" />
      <ReferenceField
        label="resources.account_structures_teams.fields.community"
        source="community"
        reference="communities"
        allowEmpty={true}
      >
        <TextField source="name" />
      </ReferenceField>
      <BooleanInput
        source="active"
        label="resources.account_structures_teams.fields.active"
      />
    </SimpleForm>
  </Edit>
);

const passwordValue = Math.random()
  .toString(36)
  .slice(-6)
  .toUpperCase();

export const AccountsStructuresTeamsCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="login"
        label="resources.account_structures_teams.fields.login"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="password"
        label="resources.account_structures_teams.fields.password"
        defaultValue={passwordValue}
        validate={required("Ce champ est requis!")}
      />
      <SelectInput
        source="structure_type"
        label="resources.account_structures_teams.fields.structure_type"
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
      <ReferenceInput
        label="resources.account_structures_teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="resources.account_structures_teams.fields.team_number"
        source="team_number"
        reference="teams"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="team_number" />
      </ReferenceInput>
      <SelectInput
        source="type_of_code"
        label="resources.account_structures_teams.fields.type_of_code"
        choices={[
          { id: "Structure", name: "Structure" },
          { id: "Equipe", name: "Equipe" },
          { id: "Autre", name: "Autre" }
        ]}
      />
      <ReferenceInput
        label="resources.structures.fields.community"
        source="community"
        reference="communities"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <FrenchDateInput
        source="register_date"
        label="resources.account_structures_teams.fields.register_date"
      />
      <FrenchDateInput
        source="expiration_date"
        label="resources.account_structures_teams.fields.expiration_date"
      />
      <BooleanInput
        source="active"
        label="resources.account_structures_teams.fields.active"
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Create>
);
