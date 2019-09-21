import axios from "axios";

export type columnDefsType = {
  headerName: string,
  field: string,
};

export const columnDefs = [
  {
    headerName: "id",
    field: "id"
  },
  {
    headerName: "username",
    field: "username"
  },
  {
    headerName: "email",
    field: "email"
  },
  {
    headerName: "phone",
    field: "phone"
  }
  
];

export function getFakeCarData() {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'json'
  })
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log("error receiving fake data");
    });
}