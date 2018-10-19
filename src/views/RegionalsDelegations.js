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

const RegionalsDelegationsFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput
      source="name"
      label="resources.regionals_delegations.fields.name"
    />
    <TextInput
      source="manager"
      label="resources.regionals_delegations.fields.manager"
    />
  </Filter>
);

export const RegionalsDelegationsList = ({ ...props }) => (
  <List {...props} filters={<RegionalsDelegationsFilter />} perPage={10}>
    <Datagrid>
      <LinkEdit
        source="name"
        label="resources.regionals_delegations.fields.name"
      />
      <LinkEdit
        source="manager"
        label="resources.regionals_delegations.fields.manager"
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
  <Edit title={<RegionalsDelegationsTitle />} {...props}>
    <SimpleForm>
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
        source="manager"
        label="resources.regionals_delegations.fields.manager"
      />
      <TextInput
        source="manager_mail"
        label="resources.regionals_delegations.fields.manager_mail"
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
      <TextInput
        source="dr"
        label="resources.regionals_delegations.fields.dr"
      />
    </SimpleForm>
  </Edit>
);

export const RegionalsDelegationsCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm redirect="list">
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
        source="manager"
        label="resources.regionals_delegations.fields.manager"
      />
      <TextInput
        source="manager_mail"
        label="resources.regionals_delegations.fields.manager_mail"
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
      <TextInput
        source="dr"
        label="resources.regionals_delegations.fields.dr"
      />
    </SimpleForm>
  </Create>
);
