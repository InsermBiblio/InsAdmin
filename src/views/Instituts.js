import React, { Fragment } from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextInput,
  ExportButton,
  downloadCSV,
  required,
  SaveButton,
  Toolbar
} from "react-admin";
import { PostPagination } from "../utils/pagination";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import { renameKeys } from "../utils/utils";

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

const exporter = async records => {
  const data = records.map(record => renameKeys(record, "institutes"));
  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "institutes");
};

ExportButton.defaultProps = {
  label: "ra.action.export",
  maxResults: 100000
};

const PostBulkActionButtons = props => (
  <Fragment>
    <DeleteButtonWithConfirmation label="Supprimer" {...props} />
  </Fragment>
);

export const InstitutsList = ({ ...props }) => (
  <List
    {...props}
    exporter={exporter}
    filters={<InstitutsFilter />}
    pagination={<PostPagination />}
    perPage={50}
    sort={{ field: "id", order: "ASC" }}
    bulkActionButtons={<PostBulkActionButtons />}
  >
    <Datagrid>
      <LinkEdit source="name" label="resources.institutes.fields.name" />
      <LinkEdit source="code" label="resources.institutes.fields.code" />
      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const InstitutsTitle = ({ record }) => {
  return record.name;
};

const PostEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const InstitutsEdit = ({ ...props }) => (
  <Edit title={<InstitutsTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm toolbar={<PostEditToolbar />}>
      <TextInput
        source="code"
        label="resources.institutes.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.institutes.fields.name"
        validate={required("Ce champ est requis!")}
      />
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
      <TextInput
        source="code"
        label="resources.institutes.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.institutes.fields.name"
        validate={required("Ce champ est requis!")}
      />
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
