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
      source="like_regionals_delegations.director"
      label="resources.regionals_delegations.fields.director"
    />
  </Filter>
);

const exporter = records => {
  const csv = convertToCSV(records, {
    delimiter: "|"
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
        source="director"
        label="resources.regionals_delegations.fields.director"
      />

      <EditButton />
      <DeleteButtonWithConfirmation />
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
      />
      <TextInput
        source="name"
        label="resources.regionals_delegations.fields.name"
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
        source="mail"
        label="resources.regionals_delegations.fields.mail"
      />
      <TextInput
        source="director"
        label="resources.regionals_delegations.fields.director"
      />
      <TextInput
        source="director_mail"
        label="resources.regionals_delegations.fields.director_mail"
      />
      <TextInput
        source="rh"
        label="resources.regionals_delegations.fields.rh"
      />
      <TextInput
        source="rh_mail"
        label="resources.regionals_delegations.fields.rh_mail"
      />
      <TextInput
        source="rri"
        label="resources.regionals_delegations.fields.rri"
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
      />
      <TextInput
        source="name"
        label="resources.regionals_delegations.fields.name"
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
        source="mail"
        label="resources.regionals_delegations.fields.mail"
      />
      <TextInput
        source="director"
        label="resources.regionals_delegations.fields.director"
      />
      <TextInput
        source="director_mail"
        label="resources.regionals_delegations.fields.director_mail"
      />
      <TextInput
        source="rh"
        label="resources.regionals_delegations.fields.rh"
      />
      <TextInput
        source="rh_mail"
        label="resources.regionals_delegations.fields.rh_mail"
      />
      <TextInput
        source="rri"
        label="resources.regionals_delegations.fields.rri"
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
