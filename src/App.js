import React, { Component } from "react";
import { Admin, Resource, fetchUtils } from "react-admin";

// provider
import jsonServerProvider from "./utils/jsonServerProvider";
import authProvider from "./utils/authProvider";

// import icon
import UserAddIcon from "@material-ui/icons/PersonAdd";
import UserIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import InstituteIcon from "@material-ui/icons/AccountBalance";
import FolderIcon from "@material-ui/icons/Folder";

// import views
import Dashboard from "./views/Dashboard";
import { UsersList, UsersEdit, UsersCreate } from "./views/Users";
import {
  AccountsStructuresTeamsList,
  AccountsStructuresTeamsEdit,
  AccountsStructuresTeamsCreate
} from "./views/AccountsStructuresTeams";
import {
  AccountsFedeInsermList,
  AccountsFedeInsermEdit,
  AccountsFedeInsermCreate
} from "./views/AccountsFedeInserm";
import {
  InstitutsList,
  InstitutsEdit,
  InstitutsCreate
} from "./views/Instituts";
import {
  StructuresList,
  StructuresEdit,
  StructuresCreate
} from "./views/Structures";
import { CommunitiesList, CommunitiesEdit } from "./views/Communities";
/*import { FavorisList, FavorisEdit, FavorisCreate } from "./views/Favoris";*/
import { SectionsList, SectionsEdit, SectionsCreate } from "./views/Sections";
import { TeamsList, TeamsEdit, TeamsCreate } from "./views/Teams";
import {
  RegionalsDelegationsList,
  RegionalsDelegationsEdit,
  RegionalsDelegationsCreate
} from "./views/RegionalsDelegations";

import langFr from "./i18n/fr";

const i18nProvider = locale => {
  return langFr;
};

class App extends Component {
  state = {
    dataProvider: null
  };

  async componentWillMount() {
    const httpClient = (url, options = {}) => {
      if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
      }
      options.headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );
      return fetchUtils.fetchJson(url, options);
    };

    const dataProvider = jsonServerProvider(
      process.env.REACT_APP_INSAPI_HOST,
      httpClient
    );

    this.setState({ dataProvider });
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      );
    }

    return (
      <Admin
        title="InsAdmin"
        dashboard={Dashboard}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        authProvider={authProvider}
        locale="fr"
      >
        <Resource
          name="adminUsers"
          list={UsersList}
          create={UsersCreate}
          edit={UsersEdit}
          icon={UserAddIcon}
        />
        <Resource
          name="section_cn"
          list={SectionsList}
          create={SectionsCreate}
          edit={SectionsEdit}
          icon={FolderIcon}
        />
        <Resource
          name="communities"
          list={CommunitiesList}
          edit={CommunitiesEdit}
          icon={FolderIcon}
        />
        <Resource
          name="individual_account_fede"
          list={AccountsFedeInsermList}
          create={AccountsFedeInsermCreate}
          edit={AccountsFedeInsermEdit}
          icon={UserIcon}
        />
        <Resource
          name="account_structures_teams"
          list={AccountsStructuresTeamsList}
          create={AccountsStructuresTeamsCreate}
          edit={AccountsStructuresTeamsEdit}
          icon={UserIcon}
        />
        <Resource
          name="regionals_delegations"
          list={RegionalsDelegationsList}
          create={RegionalsDelegationsCreate}
          edit={RegionalsDelegationsEdit}
          icon={UserIcon}
        />
        <Resource
          name="teams"
          list={TeamsList}
          create={TeamsCreate}
          edit={TeamsEdit}
          icon={UserIcon}
        />
        <Resource
          name="institutes"
          list={InstitutsList}
          create={InstitutsCreate}
          edit={InstitutsEdit}
          icon={InstituteIcon}
        />
        <Resource
          name="structures"
          list={StructuresList}
          create={StructuresCreate}
          edit={StructuresEdit}
          icon={GroupIcon}
        />
        {/*
        <Resource
          name="revues"
          list={FavorisList}
          create={FavorisCreate}
          edit={FavorisEdit}
          icon={FolderIcon}
        />*/}
      </Admin>
    );
  }
}

export default App;
