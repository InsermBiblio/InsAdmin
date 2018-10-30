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

const CommunitiesFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
  </Filter>
);

export const CommunitiesList = ({ ...props }) => (
  <List
    {...props}
    filters={<CommunitiesFilter />}
    perPage={10}
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid>
      <LinkEdit source="name" label="resources.communities.fields.name" />

      <LinkEdit source="gate" label="resources.communities.fields.gate" />

      <EditButton />
      <DeleteButtonWithConfirmation />
    </Datagrid>
  </List>
);

const CommunitiesTitle = ({ record }) => {
  return record.name;
};

export const CommunitiesEdit = ({ ...props }) => (
  <Edit title={<CommunitiesTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm>
      <TextInput source="name" label="resources.communities.fields.name" />
      <TextInput source="gate" label="resources.communities.fields.gate" />
    </SimpleForm>
  </Edit>
);

export const CommunitiesCreate = ({ ...props }) => (
  <Create {...props} actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput source="name" label="resources.communities.fields.name" />
      <TextInput source="gate" label="resources.communities.fields.gate" />
    </SimpleForm>
  </Create>
);
