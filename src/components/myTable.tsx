import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/actionCreators";
import { useHistory } from "react-router-dom";
import MyForm from "../components/form";

type Headers = {
  headers: [string];
};
type Users = {
  users: object[];
};

let image = new Image();
image.src = "data:image/png;base64,";

const Thead: React.FC<Headers> = ({ headers }) => {
  const dispatch = useDispatch();
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headers.map((v: string, i: number) => {
          return (
            <TableCell key={i}>
              <h3>{v}</h3>
            </TableCell>
          );
        })}
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => dispatch({ type: "SWITCH_ADD_MODAL" })}
          >
            + Добавить
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
const Tbody: React.FC<Users> = ({ users }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <TableBody>
      {users.map((u: any, i: number) => {
        return (
          <TableRow key={i} onDoubleClick={() => history.push(`/user/${u.id}`)}>
            <TableCell style={{ width: 150, height: 150 }}>
              <img
                style={{ width: "100%", height: "100%", display: "block" }}
                src={u.avatar}
                alt="avatar"
              />
            </TableCell>
            <TableCell>
              {u.lastname} {u.firstname} {u.middlename}
            </TableCell>
            <TableCell>{u.phone}</TableCell>
            <TableCell>{u.email}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_USER",
                    props: {
                      id: u.id,
                      d: dispatch,
                    },
                  })
                }
              >
                Удалить
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const MyTable: React.FC = () => {
  const dispatch = useDispatch();
  const data: any = useSelector((store) => store);
  const { headers, users, loading, modal, update } = data;
  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch, update]);

  if (!loading) {
    return (
      <>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <Thead headers={headers} />
            {users.length !== 0 ? (
              <Tbody users={users} />
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell>
                    <h3>No users</h3>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
        {modal && <MyForm />}
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default MyTable;
