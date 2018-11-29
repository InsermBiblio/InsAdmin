import React from "react";

export const UrlSearchStructures = ({ source, record = {} }) => {
  let structure_code = record.id;
  if (record.structure_code) {
    structure_code = record.structure_code;
  }
  const url = `#/account_structures_teams?filter={"account_structures_teams":{"structure_code":${structure_code},"type_of_code":"Structure"}}`;
  return <a href={url}>{record[source]}</a>;
};

UrlSearchStructures.defaultProps = {
  addLabel: true
};

export const UrlSearchTeams = ({ source, record = {} }) => {
  let structure_code = record.id;
  if (record.structure_code) {
    structure_code = record.structure_code;
  }
  const url = `#/account_structures_teams?filter={"account_structures_teams":{"structure_code":${structure_code},"type_of_code":"Equipe"}}`;
  return <a href={url}>{record[source]}</a>;
};

UrlSearchTeams.defaultProps = {
  addLabel: true
};

export const UrlSearchFedeInserm = ({ source, record = {} }) => {
  let structure_code = record.id;
  if (record.structure_code) {
    structure_code = record.structure_code;
  }
  const url = `#/individual_account_fede?filter={"individual_account_fede":{"structure_code":${structure_code}}}`;
  return <a href={url}>{record[source]}</a>;
};

UrlSearchFedeInserm.defaultProps = {
  addLabel: true
};
