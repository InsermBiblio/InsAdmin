import React from "react";

const LinkRelational = ({ record, page, source, relationalId }) => {
  const url = `#/${page}/${record[relationalId]}/show`;
  return <a href={url}>{record[source]}</a>;
};

LinkRelational.defaultProps = {
  addLabel: true
};

export default LinkRelational;
