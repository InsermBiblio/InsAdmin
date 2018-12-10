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
import { renameKeys } from "../utils/utils";

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

const exporter = async records => {
  const dataWithRelation = records.map(record => ({
    ...record
  }));
  const data = dataWithRelation.map(record =>
    renameKeys(record, "regionals_delegations")
  );
  const csv = convertToCSV(data, {
    delimiter: ";"
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
