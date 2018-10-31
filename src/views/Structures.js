import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  BooleanField,
  ChipField,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectInput,
  SelectArrayInput,
  LongTextInput,
  AutocompleteInput,
  downloadCSV
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";

const StructuresFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
  </Filter>
);

const exporter = records => {
  const csv = convertToCSV(records, {
    delimiter: "|"
  });
  downloadCSV(csv, "structures");
};

export const StructuresList = ({ ...props }) => (
  <List {...props} filters={<StructuresFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit source="code" label="resources.structures.fields.code" />

      <LinkEdit source="name" label="resources.structures.fields.name" />

      <BooleanField
        source="active"
        label="resources.structures.fields.active"
      />
      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const StructuresTitle = ({ record }) => {
  return record.name;
};

/*
const UrlSearchInist = ({ source, record = {} }) => {
  const url = `#/inistAccounts/list?search={"main_unit.id":${record.id}}`;
  return <a href={url}>{record.nb_inist_account}</a>;
};

UrlSearchInist.defaultProps = {
  addLabel: true
};

const UrlSearchJanus = ({ source, record = {} }) => {
  const url = `#/janusAccounts/list?search={"main_unit.id":${record.id}}`;
  return <a href={url}>{record.nb_janus_account}</a>;
};

UrlSearchJanus.defaultProps = {
  addLabel: true
};*/

export const StructuresEdit = ({ ...props }) => (
  <Edit title={<StructuresTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm />
  </Edit>
);

export const StructuresCreate = ({ ...props }) => (
  <Create {...props} redirect="list" actions={<ListAddActions />}>
    <SimpleForm redirect="list" />
  </Create>
);
