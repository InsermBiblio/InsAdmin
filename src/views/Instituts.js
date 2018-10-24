import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextInput
} from "react-admin";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const InstitutsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput source="id" label="resources.institutes.fields.id" />
    <TextInput
      source="like_institute.name"
      label="resources.institutes.fields.name"
    />
  </Filter>
);

export const InstitutsList = ({ ...props }) => (
  <List {...props} filters={<InstitutsFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit source="id" label="resources.institutes.fields.id" />
      <LinkEdit source="name" label="resources.institutes.fields.name" />
      <LinkEdit source="code" label="resources.institutes.fields.code" />
      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const InstitutsTitle = ({ record }) => {
  return record.name;
};

export const InstitutsEdit = ({ ...props }) => (
  <Edit title={<InstitutsTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm>
      <TextInput source="code" label="resources.institutes.fields.code" />
      <TextInput source="name" label="resources.institutes.fields.name" />
      <TextInput source="address" label="resources.institutes.fields.address" />
      <TextInput source="phone" label="resources.institutes.fields.phone" />
      <TextInput source="mail" label="resources.institutes.fields.mail" />
      <TextInput source="manager" label="resources.institutes.fields.manager" />
      <TextInput
        source="mail_manager"
        label="resources.institutes.fields.mail_manager"
      />
    </SimpleForm>
  </Edit>
);

export const InstitutsCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput source="code" label="resources.institutes.fields.code" />
      <TextInput source="name" label="resources.institutes.fields.name" />
      <TextInput source="address" label="resources.institutes.fields.address" />
      <TextInput source="phone" label="resources.institutes.fields.phone" />
      <TextInput source="mail" label="resources.institutes.fields.mail" />
      <TextInput source="manager" label="resources.institutes.fields.manager" />
      <TextInput
        source="mail_manager"
        label="resources.institutes.fields.mail_manager"
      />
    </SimpleForm>
  </Create>
);
