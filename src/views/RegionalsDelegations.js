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
  downloadCSV,
  required
} from "react-admin";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import langFr from "../i18n/fr";

const RegionalsDelegationsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput
      source="like_regionals_delegations.code"
      label="resources.regionals_delegations.fields.code"
    />
    <TextInput
      source="like_regionals_delegations.name"
      label="resources.regionals_delegations.fields.name"
    />
    <TextInput
      source="like_regionals_delegations.director_name"
      label="resources.regionals_delegations.fields.director_name"
    />
  </Filter>
);

const exporter = records => {
  const fields = langFr.resources.regionals_delegations.fields;
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
  downloadCSV(csv, "regionals_delegations");
};

export const RegionalsDelegationsList = ({ ...props }) => (
  <List
    {...props}
    exporter={exporter}
    filters={<RegionalsDelegationsFilter />}
    perPage={10}
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid>
      <LinkEdit
        source="code"
        label="resources.regionals_delegations.fields.code"
      />
      <LinkEdit
        source="name"
        label="resources.regionals_delegations.fields.name"
      />
      <LinkEdit
        source="director_name"
        label="resources.regionals_delegations.fields.director_name"
      />

      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const RegionalsDelegationsTitle = ({ record }) => {
  return record.name;
};

export const RegionalsDelegationsEdit = ({ ...props }) => (
  <Edit
    title={<RegionalsDelegationsTitle />}
    {...props}
    actions={<ListEditActions />}
  >
    <SimpleForm>
      <TextInput
        source="code"
        label="resources.regionals_delegations.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.regionals_delegations.fields.name"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="address"
        label="resources.regionals_delegations.fields.address"
      />
      <TextInput
        source="phone"
        label="resources.regionals_delegations.fields.phone"
      />
      <TextInput
        source="director_name"
        label="resources.regionals_delegations.fields.director_name"
      />
      <TextInput
        source="director_mail"
        label="resources.regionals_delegations.fields.director_mail"
      />
      <TextInput
        source="rh_name"
        label="resources.regionals_delegations.fields.rh_name"
      />
      <TextInput
        source="rh_mail"
        label="resources.regionals_delegations.fields.rh_mail"
      />
      <TextInput
        source="rri_name"
        label="resources.regionals_delegations.fields.rri_name"
      />
      <TextInput
        source="rri_mail"
        label="resources.regionals_delegations.fields.rri_mail"
      />
      <TextInput
        source="website"
        label="resources.regionals_delegations.fields.website"
      />
    </SimpleForm>
  </Edit>
);

export const RegionalsDelegationsCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="code"
        label="resources.regionals_delegations.fields.code"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="name"
        label="resources.regionals_delegations.fields.name"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="address"
        label="resources.regionals_delegations.fields.address"
      />
      <TextInput
        source="phone"
        label="resources.regionals_delegations.fields.phone"
      />
      <TextInput
        source="director_name"
        label="resources.regionals_delegations.fields.director_name"
      />
      <TextInput
        source="director_mail"
        label="resources.regionals_delegations.fields.director_mail"
      />
      <TextInput
        source="rh_name"
        label="resources.regionals_delegations.fields.rh_name"
      />
      <TextInput
        source="rh_mail"
        label="resources.regionals_delegations.fields.rh_mail"
      />
      <TextInput
        source="rri_name"
        label="resources.regionals_delegations.fields.rri_name"
      />
      <TextInput
        source="rri_mail"
        label="resources.regionals_delegations.fields.rri_mail"
      />
      <TextInput
        source="website"
        label="resources.regionals_delegations.fields.website"
      />
    </SimpleForm>
  </Create>
);
