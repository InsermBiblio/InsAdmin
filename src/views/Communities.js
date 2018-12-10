import React from "react";
import { Datagrid, List, Filter, TextInput, downloadCSV } from "react-admin";
import LinkEdit from "../components/LinkEdit";
import { renameKeys } from "../utils/utils";
import { unparse as convertToCSV } from "papaparse/papaparse.min";

const CommunitiesFilter = props => (
  <Filter {...props}>
    <TextInput label="Rechercher" source="match" alwaysOn />
  </Filter>
);

const exporter = async records => {
  const data = records.map(record => renameKeys(record, "communities"));
  const csv = convertToCSV(data, {
    delimiter: ";"
  });
  downloadCSV(csv, "communities");
};


export const CommunitiesList = ({ ...props }) => (
  <List
    {...props}
    exporter={exporter}
    filters={<CommunitiesFilter />}
    perPage={10}
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid>
      <LinkEdit source="name" label="resources.communities.fields.name" />

      <LinkEdit source="gate" label="resources.communities.fields.gate" />
    </Datagrid>
  </List>
);
