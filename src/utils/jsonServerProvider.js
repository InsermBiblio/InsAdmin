import { stringify } from "query-string";
import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY
} from "react-admin";

/**
 * permet d'effectuer des requêtes HTTP
 */

/**
 * Maps react-admin queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 * @example
 * GET_LIST     => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
  /**
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} { url, options } The HTTP request parameters
   */
  const convertDataRequestToHTTP = (type, resource, params) => {
    let url = "";
    const options = {};
    switch (type) {
      case GET_LIST: {
        // il faut définir l'objet pour lequel le filtre va être appliqué
        /*const baseFilter = resource
          .replace(/(.*)([A-Z])(.*)/g, "$1_$2$3")
          .toLowerCase();*/
        const { page, perPage } = params.pagination;
        let { field, order } = params.sort;
        const filters = fetchUtils.flattenObject(params.filter);

        /**
         * permet d'effectuer un tri (améliorer l'api pour supprimer cette portion de code)
         */
        if (field) {
          switch (resource) {
            case "account_structures_teams":
              if (
                [
                  "name",
                  "team_number",
                  "principal_lastname",
                  "principal_email",
                  "principal_it",
                  "specialized_commission"
                ].includes(field)
              ) {
                field = `teams.${field}`;
              } else if (
                [
                  "code",
                  "regional_delegation",
                  "site",
                  "city",
                  "mixt_university",
                  "cnrs_mixity",
                  "other_mixity"
                ].includes(field)
              ) {
                field = `structures.${field}`;
              } else {
                field = `account_structures_teams.${field}`;
              }
              break;
            case "institutes":
              field = `${field}`;
              break;
            case "teams":
              if (
                [
                  "code",
                  "regional_delegation",
                  "city",
                  "site",
                  "mixt_university",
                  "cnrs_mixity",
                  "other_mixity",
                  "nb_structures_accounts",
                  "nb_teams_account",
                  "nb_personal_accounts"
                ].includes(field)
              ) {
                field = `structures.${field}`;
              } else {
                field = `teams.${field}`;
              }
              break;
            case "section_cn":
              field = `${field}`;
              break;
            case "individual_account_fede":
              if (field === "name") {
                field = `teams.${field}`;
              } else {
                field = `individual_account_fede.${field}`;
              }
              break;
            default:
              break;
          }
        }

        const query = {
          _page: page || 1,
          _perPage: perPage || 10
        };

        query._sortField = field || "id";
        query._sortDir = order || "ASC";

        if (Object.keys(filters).length > 0) {
          query._filters = JSON.stringify(filters);
        }
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case GET_ONE:
        url = `${apiUrl}/${resource}/${params.id}`;
        break;
      case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          ...fetchUtils.flattenObject(params.filter),
          [params.target]: params.id,
          _sort: field,
          _order: order,
          _start: (page - 1) * perPage,
          _end: page * perPage,
          _page: page,
          _perPage: perPage
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case UPDATE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "PUT";
        options.body = params.data;
        break;
      case CREATE:
        url = `${apiUrl}/${resource}`;
        options.method = "POST";
        options.body = params.data;
        break;
      case DELETE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "DELETE";
        break;
      case GET_MANY: {
        const query = {
          [`id_like`]: params.ids.join("|")
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
  };

  const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.rawFile);

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  /**
   * @param {Object} response HTTP response from fetch()
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} Data response
   */
  const convertHTTPResponse = (response, type, resource, params) => {
    const { headers, json } = response;
    switch (type) {
      case GET_LIST:
      case GET_MANY_REFERENCE:
        let data = json;
        switch (resource) {
          case "communities":
            data = json.map(resource => ({ ...resource, id: resource.name }));
            break;
          default:
            break;
        }
        if (!headers.has("x-total-count")) {
          throw new Error(
            "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
          );
        }
        return {
          data,
          total: parseInt(
            headers
              .get("x-total-count")
              .split("/")
              .pop(),
            10
          )
        };
      case CREATE:
        return { data: { ...params.data, id: json.id } };
      default:
        return { data: json };
    }
  };

  /**
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} payload Request parameters. Depends on the request type
   * @returns {Promise} the Promise for a data response
   */
  return (type, resource, params) => {
    // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    if (type === UPDATE_MANY) {
      return Promise.all(
        params.ids.map(id =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(params.data)
          })
        )
      ).then(responses => ({
        data: responses.map(response => response.json)
      }));
    }
    // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    if (type === DELETE_MANY) {
      return Promise.all(
        params.ids.map(id =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: "DELETE"
          })
        )
      ).then(responses => ({
        data: responses.map(response => response.json)
      }));
    }

    const { url, options } = convertDataRequestToHTTP(type, resource, params);
    if (options.body) {
      const principal_it = sessionStorage.getItem("principal_it");
      const structure_code = sessionStorage.getItem("structure_code");
      const team_number = sessionStorage.getItem("team_number");
      const secondary_team_code = sessionStorage.getItem("secondary_team_code");
      const itmo_principal = sessionStorage.getItem("itmo_principal");
      if (principal_it) {
        options.body.principal_it = principal_it;
        sessionStorage.removeItem("principal_it");
      }
      if (structure_code) {
        options.body.structure_code = structure_code;
      }
      if (team_number) {
        options.body.team_number = team_number;
      }
      if (secondary_team_code) {
        options.body.secondary_team_code = secondary_team_code;
      }
      if (itmo_principal) {
        options.body.itmo_principal = itmo_principal;
      }
      sessionStorage.clear();
      if (options.body.image) {
        return convertFileToBase64(options.body.image).then(image => {
          options.body.image = image;
          options.body = JSON.stringify(options.body);
          return httpClient(url, options).then(response =>
            convertHTTPResponse(response, type, resource, params)
          );
        });
      }
      options.body = JSON.stringify(options.body);
    }
    return httpClient(url, options).then(response =>
      convertHTTPResponse(response, type, resource, params)
    );
  };
};
