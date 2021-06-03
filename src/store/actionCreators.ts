const baseUrl = "http://localhost:3000";

export const pushUsersToStore = (data: [object]) => {
  return {
    type: "PUSH_DATA_TO_STORE",
    data: { users: data },
  };
};
export const pushHeadersToStore = (data: [object]) => {
  return {
    type: "PUSH_DATA_TO_STORE",
    data: { headers: data },
  };
};
export const pushUserToStore = (data: [object]) => {
  return {
    type: "PUSH_DATA_TO_STORE",
    data: { item: data },
  };
};

export const fetchData = (dispatch: any) => {
  fetch(baseUrl + "/users?_sort=lastname&_order=asc")
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((response) => response.json())
    .then((data) => dispatch(pushUsersToStore(data)));
  fetch(baseUrl + "/headers")
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((response) => response.json())
    .then((data) => dispatch(pushHeadersToStore(data)));
};
export const GetUser = (id: string, dispatch: any) => {
  fetch(baseUrl + `/users/${id}`)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((response) => response.json())
    .then((data) => dispatch(pushUserToStore(data)));
};

export const AddUser = (data: IUser, dispatch: any) => {
  let info = {
    id: data.id,
    firstname: data.firstname,
    middlename: data.middlename,
    lastname: data.lastname,
    avatar: data.avatar,
    email: data.email,
    phone: data.phone,
  };
  fetch(baseUrl + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  }).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  });
  fetchData(dispatch);
};
export const RemoveUser = (id: number, dispatch: any) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  });
  fetchData(dispatch);
};
