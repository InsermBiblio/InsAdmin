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
    <TextInput
      source="uid"
      label="resources.individual_account_fede.fields.uid"
    />
    <TextInput
      source="like_individual_account_fede.lastname"
      label="resources.individual_account_fede.fields.lastname"
    />
    <TextInput
      source="like_individual_account_fede.firstname"
      label="resources.individual_account_fede.fields.firstname"
    />
    <TextInput
      source="like_individual_account_fede.inserm_email"
      label="resources.individual_account_fede.fields.inserm_email"
    />
    <TextInput
      source="like_individual_account_fede.email"
      label="resources.individual_account_fede.fields.email"
    />
    <TextInput
      source="like_individual_account_fede.membership"
      label="resources.individual_account_fede.fields.membership"
    />
    <TextInput
      source="like_individual_account_fede.type_of_assigned_structure"
      label="resources.individual_account_fede.fields.type_of_assigned_structure"
    />

    <ReferenceInput
      label="resources.individual_account_fede.fields.structure_code"
      source="individual_account_fede.structure_code"
      reference="structures"
      allowEmpty={true}
      perPage={350}
      sort={{ field: "name", order: "ASC" }}
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <TextInput
      source="like_individual_account_fede.team_number"
      label="resources.individual_account_fede.fields.team_number"
    />
    <TextInput
      source="like_individual_account_fede.team_name"
      label="resources.individual_account_fede.fields.team_name"
    />
    <TextInput
      source="like_individual_account_fede.second_team_code"
      label="resources.individual_account_fede.fields.second_team_code"
    />
    <TextInput
      source="like_individual_account_fede.email"
      label="resources.individual_account_fede.fields.email"
    />
    <ReferenceInput
      label="resources.individual_account_fede.fields.regional_delegation"
      source="individual_account_fede.regional_delegation"
      reference="regionals_delegations"
    >
      <AutocompleteInput source="code" />
    </ReferenceInput>
    <TextInput
      source="like_individual_account_fede.site"
      label="resources.individual_account_fede.fields.site"
    />
    <TextInput
      source="like_individual_account_fede.city"
      label="resources.individual_account_fede.fields.city"
    />
  </Filter>
);

export const AccountsFedeInsermList = props => (
  <List {...props} filters={<AccountsFedeInsermFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit
        source="firstname"
        label="resources.individual_account_fede.fields.firstname"
      />
      <EmailField
        source="inserm_email"
        label="resources.individual_account_fede.fields.inserm_email"
      />
      <EmailField
        source="email"
        label="resources.individual_account_fede.fields.email"
      />
      <ReferenceField
        label="resources.individual_account_fede.fields.structure_code"
        source="structure_code"
        reference="structures"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>
      <LinkEdit
        source="team_number"
        label="resources.individual_account_fede.fields.team_number"
      />
      <LinkEdit
        source="team_name"
        label="resources.individual_account_fede.fields.team_name"
      />
      <LinkEdit
        source="second_team_code"
        label="resources.individual_account_fede.fields.second_team_code"
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
        label="resources.individual_account_fede.fields.site"
      />
      <TextField
        source="city"
        label="resources.individual_account_fede.fields.city"
      />
      <TextField
        source="membership"
        label="resources.individual_account_fede.fields.membership"
      />
      <TextField
        source="type_of_assigned_structure"
        label="resources.individual_account_fede.fields.type_of_assigned_structure"
      />
      <DateField
        source="register_date"
        label="resources.individual_account_fede.fields.register_date"
      />
      <DateField
        source="last_connection"
        label="resources.individual_account_fede.fields.last_connection"
      />
      <BooleanField
        source="active"
        label="resources.individual_account_fede.fields.active"
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
        label="resources.individual_account_fede.fields.firstname"
      />
      <TextInput
        source="inserm_email"
        label="resources.individual_account_fede.fields.inserm_email"
      />
      <TextInput
        source="email"
        label="resources.individual_account_fede.fields.email"
      />
      <TextInput
        source="structure_type"
        label="resources.individual_account_fede.fields.structure_type"
      />
      <TextInput
        source="structure_code"
        label="resources.individual_account_fede.fields.structure_code"
      />
      <TextInput
        source="structure_name"
        label="resources.individual_account_fede.fields.structure_name"
      />
      <TextInput
        source="team_number"
        label="resources.individual_account_fede.fields.team_number"
      />
      <TextField
        source="team_name"
        label="resources.individual_account_fede.fields.team_name"
      />
      <TextInput
        source="second_team_code"
        label="resources.individual_account_fede.fields.second_team_code"
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
        label="resources.individual_account_fede.fields.site"
      />
      <TextInput
        source="city"
        label="resources.individual_account_fede.fields.city"
      />
      <TextInput
        source="itmo_principal"
        label="resources.individual_account_fede.fields.itmo_principal"
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
        label="resources.individual_account_fede.fields.orcid_number"
      />
      <TextInput
        source="researcher_id"
        label="resources.individual_account_fede.fields.researcher_id"
      />
      <TextInput
        source="agent_status"
        label="resources.individual_account_fede.fields.agent_status"
      />
      <TextInput
        source="agent_function"
        label="resources.individual_account_fede.fields.agent_function"
      />
      <TextInput
        source="membership"
        label="resources.individual_account_fede.fields.membership"
      />
      <TextInput
        source="type_of_assigned_structure"
        label="resources.individual_account_fede.fields.type_of_assigned_structure"
      />
      <ReferenceInput
        label="resources.individual_account_fede.fields.community"
        reference="communities"
        source="communities"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <DateInput
        source="register_date"
        label="resources.individual_account_fede.fields.register_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <DateInput
        source="last_connection"
        label="resources.individual_account_fede.fields.last_connection"
        options={{ format: "MM-dd-yyyy" }}
      />
      <BooleanInput
        source="active"
        label="resources.individual_account_fede.fields.active"
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
        label="resources.individual_account_fede.fields.firstname"
      />
      <TextInput
        source="inserm_email"
        label="resources.individual_account_fede.fields.inserm_email"
      />
      <TextInput
        source="email"
        label="resources.individual_account_fede.fields.email"
      />
      <TextInput
        source="structure_type"
        label="resources.individual_account_fede.fields.structure_type"
      />
      <TextInput
        source="structure_code"
        label="resources.individual_account_fede.fields.structure_code"
      />
      <TextInput
        source="structure_name"
        label="resources.individual_account_fede.fields.structure_name"
      />
      <TextInput
        source="team_number"
        label="resources.individual_account_fede.fields.team_number"
      />
      <TextInput
        source="second_team_code"
        label="resources.individual_account_fede.fields.second_team_code"
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
        label="resources.individual_account_fede.fields.site"
      />
      <TextInput
        source="city"
        label="resources.individual_account_fede.fields.city"
      />
      <TextInput
        source="itmo_principal"
        label="resources.individual_account_fede.fields.itmo_principal"
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
        label="resources.individual_account_fede.fields.orcid_number"
      />
      <TextInput
        source="researcher_id"
        label="resources.individual_account_fede.fields.researcher_id"
      />
      <TextInput
        source="agent_status"
        label="resources.individual_account_fede.fields.agent_status"
      />
      <TextInput
        source="agent_function"
        label="resources.individual_account_fede.fields.agent_function"
      />
      <TextInput
        source="membership"
        label="resources.individual_account_fede.fields.membership"
      />
      <TextInput
        source="type_of_assigned_structure"
        label="resources.individual_account_fede.fields.type_of_assigned_structure"
      />
      <ReferenceInput
        label="resources.individual_account_fede.fields.community"
        reference="communities"
        source="communities"
      >
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <DateInput
        source="register_date"
        label="resources.individual_account_fede.fields.register_date"
        options={{ format: "MM-dd-yyyy" }}
      />
      <DateInput
        source="last_connection"
        label="resources.individual_account_fede.fields.last_connection"
        options={{ format: "MM-dd-yyyy" }}
      />
      <BooleanInput
        source="active"
        label="resources.individual_account_fede.fields.active"
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Create>
);
