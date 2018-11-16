import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  Filter,
  List,
  SimpleForm,
  TextField,
  TextInput,
  LongTextInput,
  required
} from "react-admin";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const UsersFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
  </Filter>
);

export const UsersList = ({ ...props }) => (
  <List
    {...props}
    filters={<UsersFilter />}
    perPage={25}
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid>
      <TextField source="id" label="resources.adminUsers.fields.id" />
      <TextField source="username" label="resources.adminUsers.fields.login" />
      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const UsersTitle = ({ record }) => {
  return record.username;
};

export const UsersEdit = ({ ...props }) => (
  <Edit title={<UsersTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm>
      <TextInput
        source="username"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        type="password"
        source="password"
        validate={required("Ce champ est requis!")}
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Edit>
);

export const UsersCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="username"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        type="password"
        source="password"
        validate={required("Ce champ est requis!")}
      />
      <LongTextInput source="comment" />
    </SimpleForm>
  </Create>
);
