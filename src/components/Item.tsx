import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableBody,
  Paper,
} from "@material-ui/core";
function Item() {
  const dispatch = useDispatch();
  const data: any = useSelector((store) => store);
  const { item } = data;
  let { id } = useParams<Record<string, string | undefined>>();
  useEffect(() => {
    dispatch({ type: "GET_USER", props: { id: id, d: dispatch } });
  }, [id, dispatch]);
  console.log(data);

  return (
    <div style={{ marginTop: 100, marginLeft: 100, maxWidth: 1200 }}>
      <Link to="/">Вернуться назад</Link>
      {item ? (
        <div style={{ marginTop: 100 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: 80, height: 80 }}>
                <img
                  style={{ width: "100%", height: "100%", display: "block" }}
                  src={item.avatar}
                  alt="avatar"
                />
              </div>
              <h1 style={{ marginTop: "auto", verticalAlign: "center" }}>
                {item.lastname} {item.firstname} {item.middlename}
              </h1>
            </div>
          </div>
          <TableContainer
            component={Paper}
            style={{ maxWidth: 500, marginTop: 50 }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Телефон</TableCell>
                  <TableCell>{item.phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Электронная почта</TableCell>
                  <TableCell>{item.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Item;
