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
  LongTextInput,
  downloadCSV,
  required
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import langFr from "../i18n/fr";

/**
 * Anciennement nommé "Sections du comité national"
 * Maintenant nommé "Commissions spécialisées"
 */

const SectionsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput
      source="like_section_cn.name"
      label="resources.section_cn.fields.name"
    />
    <TextInput
      source="like_section_cn.code"
      label="resources.section_cn.fields.code"
    />
  </Filter>
);

const exporter = records => {
  const fields = langFr.resources.section_cn.fields;
  const recordsToExport = records.map(record => {
    let result = Object.create({});
    for (var fields_keys in Object.keys(fields))
      for (var record_keys in Object.keys(record))
        if (
          Object.keys(fields)[fields_keys] == Object.keys(record)[record_keys]
        )
          result[fields[Object.keys(fields)[fields_keys]]] =
            record[Object.keys(record)[record_keys]];
    return result;
  });
  const csv = convertToCSV(recordsToExport, {
    delimiter: ";",
    quotes: true,
    quoteChar: '"',
    encoding: "ISO-8859-1"
  });
  downloadCSV(csv, "section_cn");
};

export const SectionsList = ({ ...props }) => (
  <List
    {...props}
    exporter={exporter}
    filters={<SectionsFilter />}
    perPage={10}
  >
    <Datagrid>
      <LinkEdit label="resources.section_cn.fields.name" source="name" />
      <LinkEdit label="resources.section_cn.fields.code" source="code" />
      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const SectionsTitle = ({ record }) => {
  return record.name;
};

export const SectionsEdit = ({ ...props }) => (
  <Edit title={<SectionsTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm>
      <TextInput
        source="name"
        label="resources.section_cn.fields.name"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="code"
        label="resources.section_cn.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <LongTextInput
        source="comment"
        label="resources.section_cn.fields.comment"
      />
    </SimpleForm>
  </Edit>
);

export const SectionsCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="name"
        label="resources.section_cn.fields.name"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="code"
        label="resources.section_cn.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <LongTextInput
        source="comment"
        label="resources.section_cn.fields.comment"
      />
    </SimpleForm>
  </Create>
);
