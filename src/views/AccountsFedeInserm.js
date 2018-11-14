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
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  TextInput,
  BooleanInput,
  LongTextInput,
  ReferenceInput,
  ReferenceArrayInput,
  AutocompleteInput,
  SelectArrayInput
} from "react-admin";
import { DateInput } from "react-admin-date-inputs";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const AccountsFedeInsermFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
  </Filter>
);

export const AccountsFedeInsermList = props => (
  <List {...props} filters={<AccountsFedeInsermFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit
        source="firstname"
        label="resources.fedeInserm.fields.firstname"
      />
      <EmailField
        source="inserm_email"
        label="resources.fedeInserm.fields.inserm_email"
      />
      <EmailField source="email" label="resources.fedeInserm.fields.email" />
      <LinkEdit
        source="structure_code"
        label="resources.fedeInserm.fields.structure_code"
      />
      <LinkEdit
        source="team_number"
        label="resources.fedeInserm.fields.team_number"
      />
      <LinkEdit
        source="team_number"
        label="resources.fedeInserm.fields.team_number"
      />
      <LinkEdit
        source="team_name"
        label="resources.fedeInserm.fields.team_name"
      />
      <LinkEdit
        source="second_team_code"
        label="resources.fedeInserm.fields.second_team_code"
      />
      <ReferenceField
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
      >
        <TextField source="code" />
      </ReferenceField>
      <TextField source="site" label="resources.fedeInserm.fields.site" />
      <TextField source="city" label="resources.fedeInserm.fields.city" />
      <TextField
        source="membership"
        label="resources.fedeInserm.fields.membership"
      />
      <TextField
        source="type_of_assigned_structure"
        label="resources.fedeInserm.fields.type_of_assigned_structure"
      />
      <DateField
        source="register_date"
        label="resources.fedeInserm.fields.register_date"
      />
      <DateField
        source="last_connection"
        label="resources.fedeInserm.fields.last_connection"
      />
      <BooleanField
        source="active"
        label="resources.fedeInserm.fields.active"
      />
      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const AccountsFedeInsermTitle = ({ record }) => {
  return record.uid;
};

export const AccountsFedeInsermEdit = ({ ...props }) => (
  <Edit
    title={<AccountsFedeInsermTitle />}
    {...props}
    actions={<ListEditActions />}
  >
    <SimpleForm />
  </Edit>
);

export const AccountsFedeInsermCreate = ({ ...props }) => (
  <Create {...props} redirect="list" actions={<ListAddActions />}>
    <SimpleForm redirect="list" />
  </Create>
);
