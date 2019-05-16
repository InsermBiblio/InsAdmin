import React, { Fragment } from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Filter,
  SimpleForm,
  ReferenceField,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  TextInput,
  ExportButton,
  downloadCSV,
  BooleanInput,
  LongTextInput,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  required,
  SaveButton,
  Toolbar
} from "react-admin";
import { renameKeys } from "../utils/utils";
import { PostPagination } from "../utils/pagination";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import { FrenchDateInput } from "../components/FrenchDateInput";
import DeleteButtonWithConfirmation from "../components/DeleteButtonWithConfirmation";
import LinkEdit from "../components/LinkEdit";
import { ListAddActions, ListEditActions } from "../components/ListActions";
import AutoCompleteInput from "../components/AutoCompleteInput";

const AccountsFedeInsermFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
    <TextInput
      source="like_individual_account_fede.uid"
      label="resources.individual_account_fede.fields.uid"
    />
    <TextInput
      source="like_individual_account_fede.lastname"
      label="resources.individual_account_fede.fields.lastname"
    />
    <TextInput
      source="like_individual_account_fede.firstname"
      label="resources.individual_account_fede.fields.firstname"
    />
    <TextInput
      source="like_individual_account_fede.inserm_email"
      label="resources.individual_account_fede.fields.inserm_email"
    />
    <TextInput
      source="like_individual_account_fede.email"
      label="resources.individual_account_fede.fields.email"
    />
    <TextInput
      source="like_individual_account_fede.membership"
      label="resources.individual_account_fede.fields.membership"
    />
    <TextInput
      source="like_individual_account_fede.type_of_assigned_structure"
      label="resources.individual_account_fede.fields.type_of_assigned_structure"
    />

    <AutoCompleteInput
      label="resources.individual_account_fede.fields.structure_code"
      source="structure_code"
      reference="structures"
      field="structures"
      optionText="code"
      filter="individual_account_fede.structure_code"
    />

    <AutoCompleteInput
      label="resources.individual_account_fede.fields.team_number"
      source="team_number"
      reference="teams"
      field="teams"
      optionText="team_number"
      filter="individual_account_fede.team_number"
    />

    <TextInput
      source="like_teams.name"
      label="resources.individual_account_fede.fields.team_name"
    />

    <AutoCompleteInput
      label="resources.individual_account_fede.fields.secondary_team_code"
      source="secondary_team_code"
      reference="teams"
      field="teams"
      optionText="team_number"
      filter="individual_account_fede.secondary_team_code"
    />

    <ReferenceInput
      label="resources.individual_account_fede.fields.regional_delegation"
      source="individual_account_fede.regional_delegation"
      reference="regionals_delegations"
      allowEmpty={true}
    >
      <AutocompleteInput optionText="code" />
    </ReferenceInput>

    <TextInput
      source="like_individual_account_fede.site"
      label="resources.individual_account_fede.fields.site"
    />
    <TextInput
      source="like_individual_account_fede.city"
      label="resources.individual_account_fede.fields.city"
    />

    <ReferenceInput
      label="resources.individual_account_fede.fields.principal_it"
      source="individual_account_fede.itmo_principal"
      reference="institutes"
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>

    <ReferenceInput
      label="resources.individual_account_fede.fields.specialized_commission"
      source="individual_account_fede.specialized_commission"
      reference="section_cn"
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>

    <TextInput
      source="like_individual_account_fede.orcid_number"
      label="resources.individual_account_fede.fields.orcid_number"
    />
    <TextInput
      source="like_individual_account_fede.agent_status"
      label="resources.individual_account_fede.fields.agent_status"
    />
    <TextInput
      source="like_individual_account_fede.agent_function"
      label="resources.individual_account_fede.fields.agent_function"
    />
    <FrenchDateInput
      source="to_individual_account_fede.register_date"
      label="resources.individual_account_fede.fields.register_date_before"
    />
    <FrenchDateInput
      source="from_individual_account_fede.register_date"
      label="resources.individual_account_fede.fields.register_date_after"
    />
    <FrenchDateInput
      source="to_individual_account_fede.expiration_date"
      label="resources.individual_account_fede.fields.last_connection_before"
    />
    <FrenchDateInput
      source="from_individual_account_fede.expiration_date"
      label="resources.individual_account_fede.fields.last_connection_after"
    />
    <BooleanInput
      source="individual_account_fede.active"
      label="resources.individual_account_fede.fields.active"
    />
  </Filter>
);

const exporter = async (records, fetchRelatedRecords) => {
  const listStructures = await fetchRelatedRecords(
    records,
    "structure_code",
    "structures"
  );
  const listTeams = await fetchRelatedRecords(records, "team_number", "teams");
  const listSpecializedCommission = await fetchRelatedRecords(
    records,
    "specialized_commission",
    "section_cn"
  );
  const listRegionalDelegation = await fetchRelatedRecords(
    records,
    "regional_delegation",
    "regionals_delegations"
  );
  const listPrincipalIt = await fetchRelatedRecords(
    records,
    "itmo_principal",
    "institutes"
  );

  const dataWithRelation = records.map(record => ({
    ...record,
    structure_code:
      listStructures[record.structure_code] &&
      listStructures[record.structure_code].code,
    structure_name:
      listStructures[record.structure_code] &&
      listStructures[record.structure_code].name,
    team_number:
      listTeams[record.team_number] &&
      listTeams[record.team_number].team_number,
    specialized_commission:
      listSpecializedCommission[record.specialized_commission] &&
      listSpecializedCommission[record.specialized_commission].name,
    regional_delegation:
      listRegionalDelegation[record.regional_delegation] &&
      listRegionalDelegation[record.regional_delegation].name,
    itmo_principal:
      listPrincipalIt[record.itmo_principal] &&
      listPrincipalIt[record.itmo_principal].name,
    secondary_team_code:
      listTeams[record.secondary_team_code] &&
      listTeams[record.secondary_team_code].team_number
  }));
  const data = dataWithRelation.map(record =>
    renameKeys(record, "individual_account_fede")
  );
  data.forEach(element => {
    if (element["Première connexion"]) {
      element["Première connexion"] = element["Première connexion"]
        .replace(/T/, " ")
        .replace(/\..+/, "");
    }
  });
  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "comptes_individuel_fede");
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

export const AccountsFedeInsermList = props => (
  <List
    {...props}
    filters={<AccountsFedeInsermFilter />}
    pagination={<PostPagination />}
    perPage={50}
    exporter={exporter}
    bulkActionButtons={<PostBulkActionButtons />}
  >
    <Datagrid>
      <LinkEdit
        source="uid"
        label="resources.individual_account_fede.fields.uid"
      />
      <LinkEdit
        source="lastname"
        label="resources.individual_account_fede.fields.lastname"
      />
      <LinkEdit
        source="firstname"
        label="resources.individual_account_fede.fields.firstname"
      />
      <EmailField
        source="inserm_email"
        label="resources.individual_account_fede.fields.inserm_email"
      />
      <EmailField
        source="email"
        label="resources.individual_account_fede.fields.email"
      />
      <ReferenceField
        label="resources.individual_account_fede.fields.structure_code"
        source="structure_code"
        reference="structures"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>
      <ReferenceField
        label="resources.individual_account_fede.fields.team_number"
        source="team_number"
        reference="teams"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="team_number" />
      </ReferenceField>
      <TextField
        label="resources.individual_account_fede.fields.team_name"
        source="name"
      />

      <ReferenceField
        label="resources.individual_account_fede.fields.secondary_team_code"
        source="secondary_team_code"
        reference="teams"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="team_number" />
      </ReferenceField>

      <ReferenceField
        label="resources.structures.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        linkType="show"
        allowEmpty={true}
      >
        <TextField source="code" />
      </ReferenceField>

      <TextField
        source="site"
        label="resources.individual_account_fede.fields.site"
      />
      <TextField
        source="city"
        label="resources.individual_account_fede.fields.city"
      />
      <TextField
        source="membership"
        label="resources.individual_account_fede.fields.membership"
      />
      <TextField
        source="type_of_assigned_structure"
        label="resources.individual_account_fede.fields.type_of_assigned_structure"
      />
      <DateField
        source="register_date"
        label="resources.individual_account_fede.fields.register_date"
      />
      <DateField
        source="last_connection"
        label="resources.individual_account_fede.fields.last_connection"
      />
      <BooleanField
        source="active"
        label="resources.individual_account_fede.fields.active"
      />
      <EditButton label="" />
      <DeleteButtonWithConfirmation label="" />
    </Datagrid>
  </List>
);

const AccountsFedeInsermTitle = ({ record }) => {
  return record.firstname;
};

const PostEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const AccountsFedeInsermEdit = ({ ...props }) => (
  <Edit
    title={<AccountsFedeInsermTitle />}
    {...props}
    actions={<ListEditActions />}
  >
    <SimpleForm toolbar={<PostEditToolbar />}>
      <TextInput
        source="uid"
        label="resources.individual_account_fede.fields.uid"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="lastname"
        label="resources.individual_account_fede.fields.lastname"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="firstname"
        label="resources.individual_account_fede.fields.firstname"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="inserm_email"
        label="resources.individual_account_fede.fields.inserm_email"
      />
      <TextInput
        source="email"
        label="resources.individual_account_fede.fields.email"
      />
      <TextInput
        source="uinop_code"
        label="resources.individual_account_fede.fields.uinop_code"
      />
      <SelectInput
        source="structure_type"
        label="resources.account_structures_teams.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" },
          { id: "ADR", name: "ADR" },
          { id: "DEP", name: "DEP" },
          { id: "ITMO", name: "ITMO" }
        ]}
      />

      <AutoCompleteInput
        label="resources.individual_account_fede.fields.structure_code"
        source="structure_code"
        reference="structures"
        field="structures"
        optionText="code"
      />
      <ReferenceField
        label="resources.individual_account_fede.fields.structure_name"
        source="structure_code"
        reference="structures"
        allowEmpty={true}
      >
        <TextField source="name" />
      </ReferenceField>
      <AutoCompleteInput
        label="resources.individual_account_fede.fields.team_number"
        source="team_number"
        reference="teams"
        field="teams"
        optionText="team_number"
      />
      <ReferenceField
        label="resources.individual_account_fede.fields.team_name"
        source="team_number"
        reference="teams"
        allowEmpty={true}
      >
        <TextField source="name" />
      </ReferenceField>

      <AutoCompleteInput
        label="resources.individual_account_fede.fields.secondary_team_code"
        source="secondary_team_code"
        reference="teams"
        field="teams"
        optionText="team_number"
      />

      <ReferenceInput
        label="resources.individual_account_fede.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="code" />
      </ReferenceInput>

      <TextInput
        source="site"
        label="resources.individual_account_fede.fields.site"
      />
      <TextInput
        source="city"
        label="resources.individual_account_fede.fields.city"
      />

      <ReferenceInput
        label="resources.individual_account_fede.fields.principal_it"
        source="itmo_principal"
        reference="institutes"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput
        source="orcid_number"
        label="resources.individual_account_fede.fields.orcid_number"
      />
      <TextInput
        source="researcher_id"
        label="resources.individual_account_fede.fields.researcher_id"
      />
      <TextInput
        source="agent_status"
        label="resources.individual_account_fede.fields.agent_status"
      />
      <TextInput
        source="agent_function"
        label="resources.individual_account_fede.fields.agent_function"
      />
      <TextInput
        source="membership"
        label="resources.individual_account_fede.fields.membership"
      />
      <TextInput
        source="type_of_assigned_structure"
        label="resources.individual_account_fede.fields.type_of_assigned_structure"
      />
      <LongTextInput source="comment" />
      <ReferenceInput
        label="resources.individual_account_fede.fields.community"
        reference="communities"
        source="community"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <BooleanInput
        source="active"
        label="resources.individual_account_fede.fields.active"
      />
    </SimpleForm>
  </Edit>
);

export const AccountsFedeInsermCreate = ({ ...props }) => (
  <Create {...props} redirect="list" actions={<ListAddActions />}>
    <SimpleForm redirect="list">
      <TextInput
        source="uid"
        label="resources.individual_account_fede.fields.uid"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="lastname"
        label="resources.individual_account_fede.fields.lastname"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="firstname"
        label="resources.individual_account_fede.fields.firstname"
        validate={required("Ce champ est requis!")}
      />
      <TextInput
        source="inserm_email"
        label="resources.individual_account_fede.fields.inserm_email"
      />
      <TextInput
        source="email"
        label="resources.individual_account_fede.fields.email"
      />
      <TextInput
        source="uinop_code"
        label="resources.individual_account_fede.fields.uinop_code"
      />
      <SelectInput
        source="structure_type"
        label="resources.account_structures_teams.fields.structure_type"
        choices={[
          { id: "CIC", name: "CIC" },
          { id: "IFR", name: "IFR" },
          { id: "U", name: "U" },
          { id: "US", name: "US" },
          { id: "ADR", name: "ADR" },
          { id: "DEP", name: "DEP" },
          { id: "ITMO", name: "ITMO" }
        ]}
      />

      <AutoCompleteInput
        label="resources.individual_account_fede.fields.structure_code"
        source="structure_code"
        reference="structures"
        field="structures"
        optionText="code"
      />

      <AutoCompleteInput
        label="resources.individual_account_fede.fields.team_number"
        source="team_number"
        reference="teams"
        field="teams"
        optionText="team_number"
      />

      <AutoCompleteInput
        label="resources.individual_account_fede.fields.secondary_team_code"
        source="secondary_team_code"
        reference="teams"
        field="teams"
        optionText="team_number"
      />

      <ReferenceInput
        label="resources.individual_account_fede.fields.regional_delegation"
        source="regional_delegation"
        reference="regionals_delegations"
        allowEmpty={true}
      >
        <AutocompleteInput optionText="code" />
      </ReferenceInput>

      <TextInput
        source="site"
        label="resources.individual_account_fede.fields.site"
      />
      <TextInput
        source="city"
        label="resources.individual_account_fede.fields.city"
      />

      <ReferenceInput
        label="resources.individual_account_fede.fields.principal_it"
        source="itmo_principal"
        reference="institutes"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="resources.structures.fields.specialized_commission"
        source="specialized_commission"
        reference="section_cn"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <TextInput
        source="orcid_number"
        label="resources.individual_account_fede.fields.orcid_number"
      />
      <TextInput
        source="researcher_id"
        label="resources.individual_account_fede.fields.researcher_id"
      />
      <TextInput
        source="agent_status"
        label="resources.individual_account_fede.fields.agent_status"
      />
      <TextInput
        source="agent_function"
        label="resources.individual_account_fede.fields.agent_function"
      />
      <TextInput
        source="membership"
        label="resources.individual_account_fede.fields.membership"
      />
      <TextInput
        source="type_of_assigned_structure"
        label="resources.individual_account_fede.fields.type_of_assigned_structure"
      />
      <LongTextInput source="comment" />
      <ReferenceInput
        label="resources.individual_account_fede.fields.community"
        reference="communities"
        source="community"
      >
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <BooleanInput
        source="active"
        label="resources.individual_account_fede.fields.active"
      />
    </SimpleForm>
  </Create>
);
