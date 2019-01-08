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
  LongTextInput,
  downloadCSV,
  required,
  SaveButton,
  Toolbar
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import { renameKeys } from "../utils/utils";

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

const exporter = async records => {
  const dataWithRelation = records.map(record => ({
    ...record
  }));
  const data = dataWithRelation.map(record => renameKeys(record, "section_cn"));
  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "section_cn");
};

const PostBulkActionButtons = props => (
  <Fragment>
    <DeleteButtonWithConfirmation label="Supprimer" {...props} />
  </Fragment>
);

export const SectionsList = ({ ...props }) => (
  <List
    {...props}
    exporter={exporter}
    filters={<SectionsFilter />}
    perPage={10}
    bulkActionButtons={<PostBulkActionButtons />}
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

const PostEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const SectionsEdit = ({ ...props }) => (
  <Edit title={<SectionsTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm toolbar={<PostEditToolbar />}>
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
