import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextInput,
  downloadCSV
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const InstitutsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput
      source="like_institute.name"
      label="resources.institutes.fields.name"
    />
    <TextInput
      source="like_institute.code"
      label="resources.institutes.fields.code"
    />
  </Filter>
);

const exporter = records => {
  const csv = convertToCSV(records, {
    delimiter: "|"
  });
  downloadCSV(csv, "instituts");
};

export const InstitutsList = ({ ...props }) => (
  <List
    {...props}
    exporter={exporter}
    filters={<InstitutsFilter />}
    perPage={10}
    sort={{ field: "id", order: "ASC" }}
  >
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
      <TextInput
        source="director"
        label="resources.institutes.fields.director"
      />
      <TextInput
        source="mail_director"
        label="resources.institutes.fields.mail_director"
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
      <TextInput
        source="director"
        label="resources.institutes.fields.director"
      />
      <TextInput
        source="mail_director"
        label="resources.institutes.fields.mail_director"
      />
    </SimpleForm>
  </Create>
);
