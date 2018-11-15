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
  LongTextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput
} from "react-admin";
import { DateInput } from "react-admin-date-inputs";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

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
      source="like_teams.principal_firstname"
      label="resources.account_structures_teams.fields.principal_firstname"
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
        { id: "US", name: "US" }
      ]}
    />
    <ReferenceInput
      label="resources.account_structures_teams.fields.structure_code"
      source="account_structures_teams.structure_code"
      reference="structures"
      allowEmpty={true}
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <ReferenceInput
      label="resources.account_structures_teams.fields.team_number"
      source="account_structures_teams.team_number"
      reference="teams"
      allowEmpty={true}
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <TextInput
      source="like_teams.name"
      label="resources.account_structures_teams.fields.name"
    />
    <SelectInput
      source="account_structures_teams.type_of_code"
      label="resources.account_structures_teams.fields.type_of_code"
      choices={[
        { id: "Structure", name: "Structure" },
        { id: "Equipe", name: "Equipe" }
      ]}
    />
    <ReferenceInput
      label="resources.account_structures_teams.fields.regional_delegation"
      source="structures.regional_delegation"
      reference="regionals_delegations"
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
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
    <ReferenceInput
      label="resources.account_structures_teams.fields.principal_it"
      source="account_structures_teams.principal_it"
      reference="institutes"
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <ReferenceInput
      label="resources.account_structures_teams.fields.specialized_commission"
      source="teams.specialized_commission"
      reference="section_cn"
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <DateInput
      source="to_account_structures_teams.register_date"
      label="resources.account_structures_teams.fields.register_date_before"
    />
    <DateInput
      source="from_account_structures_teams.register_date"
      label="resources.account_structures_teams.fields.register_date_after"
    />
    <DateInput
      source="to_account_structures_teams.expiration_date"
      label="resources.account_structures_teams.fields.expiration_date_before"
    />
    <DateInput
      source="from_account_structures_teams.expiration_date"
      label="resources.account_structures_teams.fields.expiration_date_after"
    />
    <BooleanInput
      source="account_structures_teams.active"
      label="resources.account_structures_teams.fields.active"
    />
  </Filter>
);

export const AccountsStructuresTeamsList = ({ ...props }) => (
  <List {...props} filters={<AccountsStructuresTeamsFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit
        source="login"
        label="resources.account_structures_teams.fields.login"
      />
      <LinkEdit
        source="password"
        label="resources.account_structures_teams.fields.password"
      />
      <ReferenceField
        label="resources.account_structures_teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>
      <ReferenceField
        label="resources.account_structures_teams.fields.team_number"
        source="team_number"
        reference="teams"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>
      <LinkEdit
        source="name"
        label="resources.account_structures_teams.fields.name"
      />
      <LinkEdit
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
      <EditButton />
      <DeleteButtonWithConfirmation />
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
      />
      <TextInput
        source="password"
        label="resources.account_structures_teams.fields.password"
      />
      <SelectInput
        source="type_of_code"
        label="resources.account_structures_teams.fields.type_of_code"
        choices={[
          { id: "Structure", name: "Structure" },
          { id: "Equipe", name: "Equipe" }
        ]}
      />
      <SelectInput
        source="structure_type"
        label="resources.account_structures_teams.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" }
        ]}
      />
      <ReferenceInput
        label="resources.account_structures_teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <ReferenceInput
        label="resources.account_structures_teams.fields.team_number"
        source="team_number"
        reference="teams"
        allowEmpty={true}
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <ReferenceInput
        label="resources.structures.fields.community"
        source="community"
        reference="communities"
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <DateInput
        source="register_date"
        label="resources.account_structures_teams.fields.register_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <DateInput
        source="expiration_date"
        label="resources.account_structures_teams.fields.expiration_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <BooleanInput
        source="active"
        label="resources.account_structures_teams.fields.active"
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Edit>
);

export const AccountsStructuresTeamsCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="login"
        label="resources.account_structures_teams.fields.login"
      />
      <TextInput
        source="password"
        label="resources.account_structures_teams.fields.password"
      />
      <SelectInput
        source="type_of_code"
        label="resources.account_structures_teams.fields.type_of_code"
        choices={[
          { id: "Structure", name: "Structure" },
          { id: "Equipe", name: "Equipe" }
        ]}
      />
      <SelectInput
        source="structure_type"
        label="resources.account_structures_teams.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" }
        ]}
      />
      <ReferenceInput
        label="resources.account_structures_teams.fields.structure_code"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <ReferenceInput
        label="resources.account_structures_teams.fields.team_number"
        source="team_number"
        reference="teams"
        allowEmpty={true}
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <ReferenceInput
        label="resources.structures.fields.community"
        source="community"
        reference="communities"
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <DateInput
        source="register_date"
        label="resources.account_structures_teams.fields.register_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <DateInput
        source="expiration_date"
        label="resources.account_structures_teams.fields.expiration_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <BooleanInput
        source="active"
        label="resources.account_structures_teams.fields.active"
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Create>
);
