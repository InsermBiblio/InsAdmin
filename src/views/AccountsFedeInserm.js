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
  TextField,
  EmailField,
  DateField,
  BooleanField,
  TextInput,
  BooleanInput,
  LongTextInput,
  ReferenceInput,
  AutocompleteInput
} from "react-admin";
import { DateInput } from "react-admin-date-inputs";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const AccountsFedeInsermFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput source="uid" label="resources.accounts_fede_inserm.fields.uid" />
    <TextInput
      source="like_individual_account_fede.lastname"
      label="resources.accounts_fede_inserm.fields.lastname"
    />
    <TextInput
      source="like_individual_account_fede.firstname"
      label="resources.accounts_fede_inserm.fields.firstname"
    />
    <TextInput
      source="like_individual_account_fede.inserm_email"
      label="resources.accounts_fede_inserm.fields.inserm_email"
    />
    <TextInput
      source="like_individual_account_fede.email"
      label="resources.accounts_fede_inserm.fields.email"
    />
    <TextInput
      source="like_individual_account_fede.membership"
      label="resources.accounts_fede_inserm.fields.membership"
    />
    <TextInput
      source="like_structures.type_of_assigned_structure"
      label="resources.accounts_fede_inserm.fields.type_of_assigned_structure"
    />

    <TextInput
      source="like_individual_account_fede.structure_code"
      label="resources.accounts_fede_inserm.fields.structure_code"
    />
    <TextInput
      source="like_individual_account_fede.team_number"
      label="resources.accounts_fede_inserm.fields.team_number"
    />
    <TextInput
      source="like_individual_account_fede.team_name"
      label="resources.accounts_fede_inserm.fields.team_name"
    />
    <TextInput
      source="like_individual_account_fede.second_team_code"
      label="resources.accounts_fede_inserm.fields.second_team_code"
    />
    <TextInput
      source="like_individual_account_fede.email"
      label="resources.accounts_fede_inserm.fields.email"
    />
    <ReferenceInput
      label="resources.structures.fields.regional_delegation"
      source="individual_account_fede.regional_delegation"
      reference="regionals_delegations"
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <TextInput
      source="like_individual_account_fede.site"
      label="resources.accounts_fede_inserm.fields.site"
    />
    <TextInput
      source="like_individual_account_fede.city"
      label="resources.accounts_fede_inserm.fields.city"
    />
  </Filter>
);

export const AccountsFedeInsermList = props => (
  <List {...props} filters={<AccountsFedeInsermFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit
        source="firstname"
        label="resources.accounts_fede_inserm.fields.firstname"
      />
      <EmailField
        source="inserm_email"
        label="resources.accounts_fede_inserm.fields.inserm_email"
      />
      <EmailField
        source="email"
        label="resources.accounts_fede_inserm.fields.email"
      />
      <LinkEdit
        source="structure_code"
        label="resources.accounts_fede_inserm.fields.structure_code"
      />
      <LinkEdit
        source="team_number"
        label="resources.accounts_fede_inserm.fields.team_number"
      />
      <LinkEdit
        source="team_name"
        label="resources.accounts_fede_inserm.fields.team_name"
      />
      <LinkEdit
        source="second_team_code"
        label="resources.accounts_fede_inserm.fields.second_team_code"
      />
      <ReferenceField
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
      >
        <TextField source="code" />
      </ReferenceField>
      <TextField
        source="site"
        label="resources.accounts_fede_inserm.fields.site"
      />
      <TextField
        source="city"
        label="resources.accounts_fede_inserm.fields.city"
      />
      <TextField
        source="membership"
        label="resources.accounts_fede_inserm.fields.membership"
      />
      <TextField
        source="type_of_assigned_structure"
        label="resources.accounts_fede_inserm.fields.type_of_assigned_structure"
      />
      <DateField
        source="register_date"
        label="resources.accounts_fede_inserm.fields.register_date"
      />
      <DateField
        source="last_connection"
        label="resources.accounts_fede_inserm.fields.last_connection"
      />
      <BooleanField
        source="active"
        label="resources.accounts_fede_inserm.fields.active"
      />
      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const AccountsFedeInsermTitle = ({ record }) => {
  return record.firstname;
};

export const AccountsFedeInsermEdit = ({ ...props }) => (
  <Edit
    title={<AccountsFedeInsermTitle />}
    {...props}
    actions={<ListEditActions />}
  >
    <SimpleForm>
      <TextInput
        source="firstname"
        label="resources.accounts_fede_inserm.fields.firstname"
      />
      <TextInput
        source="inserm_email"
        label="resources.accounts_fede_inserm.fields.inserm_email"
      />
      <TextInput
        source="email"
        label="resources.accounts_fede_inserm.fields.email"
      />
      <TextInput
        source="structure_type"
        label="resources.accounts_fede_inserm.fields.structure_type"
      />
      <TextInput
        source="structure_code"
        label="resources.accounts_fede_inserm.fields.structure_code"
      />
      <TextInput
        source="structure_name"
        label="resources.accounts_fede_inserm.fields.structure_name"
      />
      <TextInput
        source="team_number"
        label="resources.accounts_fede_inserm.fields.team_number"
      />
      <TextField
        source="team_name"
        label="resources.accounts_fede_inserm.fields.team_name"
      />
      <TextInput
        source="second_team_code"
        label="resources.accounts_fede_inserm.fields.second_team_code"
      />
      <ReferenceInput
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <TextInput
        source="site"
        label="resources.accounts_fede_inserm.fields.site"
      />
      <TextInput
        source="city"
        label="resources.accounts_fede_inserm.fields.city"
      />
      <TextInput
        source="itmo_principal"
        label="resources.accounts_fede_inserm.fields.itmo_principal"
      />
      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <TextInput
        source="orcid_number"
        label="resources.accounts_fede_inserm.fields.orcid_number"
      />
      <TextInput
        source="researcher_id"
        label="resources.accounts_fede_inserm.fields.researcher_id"
      />
      <TextInput
        source="agent_status"
        label="resources.accounts_fede_inserm.fields.agent_status"
      />
      <TextInput
        source="agent_function"
        label="resources.accounts_fede_inserm.fields.agent_function"
      />
      <TextInput
        source="membership"
        label="resources.accounts_fede_inserm.fields.membership"
      />
      <TextInput
        source="type_of_assigned_structure"
        label="resources.accounts_fede_inserm.fields.type_of_assigned_structure"
      />
      <ReferenceInput
        label="resources.accounts_fede_inserm.fields.community"
        reference="communities"
        source="communities"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <DateInput
        source="register_date"
        label="resources.accounts_fede_inserm.fields.register_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <DateInput
        source="last_connection"
        label="resources.accounts_fede_inserm.fields.last_connection"
        options={{ format: "MM-dd-yyyy" }}
      />
      <BooleanInput
        source="active"
        label="resources.accounts_fede_inserm.fields.active"
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Edit>
);

export const AccountsFedeInsermCreate = ({ ...props }) => (
  <Create {...props} redirect="list" actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="firstname"
        label="resources.accounts_fede_inserm.fields.firstname"
      />
      <TextInput
        source="inserm_email"
        label="resources.accounts_fede_inserm.fields.inserm_email"
      />
      <TextInput
        source="email"
        label="resources.accounts_fede_inserm.fields.email"
      />
      <TextInput
        source="structure_type"
        label="resources.accounts_fede_inserm.fields.structure_type"
      />
      <TextInput
        source="structure_code"
        label="resources.accounts_fede_inserm.fields.structure_code"
      />
      <TextInput
        source="structure_name"
        label="resources.accounts_fede_inserm.fields.structure_name"
      />
      <TextInput
        source="team_number"
        label="resources.accounts_fede_inserm.fields.team_number"
      />
      <TextInput
        source="second_team_code"
        label="resources.accounts_fede_inserm.fields.second_team_code"
      />
      <ReferenceInput
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <TextInput
        source="site"
        label="resources.accounts_fede_inserm.fields.site"
      />
      <TextInput
        source="city"
        label="resources.accounts_fede_inserm.fields.city"
      />
      <TextInput
        source="itmo_principal"
        label="resources.accounts_fede_inserm.fields.itmo_principal"
      />
      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
      >
        <AutocompleteInput source="code" />
      </ReferenceInput>
      <TextInput
        source="orcid_number"
        label="resources.accounts_fede_inserm.fields.orcid_number"
      />
      <TextInput
        source="researcher_id"
        label="resources.accounts_fede_inserm.fields.researcher_id"
      />
      <TextInput
        source="agent_status"
        label="resources.accounts_fede_inserm.fields.agent_status"
      />
      <TextInput
        source="agent_function"
        label="resources.accounts_fede_inserm.fields.agent_function"
      />
      <TextInput
        source="membership"
        label="resources.accounts_fede_inserm.fields.membership"
      />
      <TextInput
        source="type_of_assigned_structure"
        label="resources.accounts_fede_inserm.fields.type_of_assigned_structure"
      />
      <ReferenceInput
        label="resources.accounts_fede_inserm.fields.community"
        reference="communities"
        source="communities"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <DateInput
        source="register_date"
        label="resources.accounts_fede_inserm.fields.register_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <DateInput
        source="last_connection"
        label="resources.accounts_fede_inserm.fields.last_connection"
        options={{ format: "MM-dd-yyyy" }}
      />
      <BooleanInput
        source="active"
        label="resources.accounts_fede_inserm.fields.active"
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Create>
);
