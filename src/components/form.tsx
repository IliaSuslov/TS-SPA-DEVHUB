import { Form } from "react-final-form";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Paper, Grid } from "@material-ui/core";
import { TextField } from "mui-rff";

const MyForm = () => {
  const dispatch = useDispatch();
  const data: any = useSelector((store) => store);
  const [open, setOpen] = useState(data.modal);

  const handleClose = () => {
    dispatch({ type: "SWITCH_ADD_MODAL" });
  };
  const onSubmit = (values: any) => {
    dispatch({
      type: "ADD_USER",
      props: {
        names: values.names,
        phone: values.phone,
        avatar: values.avatar,
        email: values.email,
        d: dispatch,
      },
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div
        style={{ padding: 16, margin: "auto", marginTop: "10%", maxWidth: 600 }}
      >
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}></Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="ФИО"
                    name="names"
                    margin="none"
                    required={true}
                    style={{ width: "100%" }}
                  />
                  <TextField
                    type="text"
                    label="Телефон"
                    name="phone"
                    margin="none"
                    required={true}
                    style={{ width: "100%" }}
                  />
                  <TextField
                    type="email"
                    label="Электронная почта"
                    name="email"
                    margin="none"
                    required={true}
                    style={{ width: "100%" }}
                  />
                  <TextField
                    type="text"
                    label="Ссылка на аватар"
                    name="url"
                    margin="none"
                    required={true}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid style={{ display: "flex", justifyContent: "row" }}>
                  <Grid item style={{ marginTop: 16, marginRight: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                      style={{ width: 200 }}
                    >
                      Добавить контакт
                    </Button>
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                      style={{ width: 100 }}
                    >
                      Отмена
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    </Modal>
  );
};
export default MyForm;
