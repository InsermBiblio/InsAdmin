import React from "react";
import { Pagination } from "react-admin";

export const PostPagination = props => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);
