import React from "react";
import {
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  TextInput,
  required
} from "react-admin";
import LinkEdit from "../components/LinkEdit";
import { ListEditActions } from "../components/ListActions";

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

      <EditButton label="" />
    </Datagrid>
  </List>
);

const CommunitiesTitle = ({ record }) => {
  return record.name;
};

export const CommunitiesEdit = ({ ...props }) => (
  <Edit title={<CommunitiesTitle />} {...props} actions={<ListEditActions />}>
    <SimpleForm>
      <TextInput
        source="name"
        label="resources.communities.fields.name"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="gate"
        label="resources.communities.fields.gate"
        validate={required("Ce champ est requis!")}
      />
    </SimpleForm>
  </Edit>
);
