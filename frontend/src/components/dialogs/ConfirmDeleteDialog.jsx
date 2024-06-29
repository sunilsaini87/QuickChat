import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler, message }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="confirm-delete-dialog-title"
      aria-describedby="confirm-delete-dialog-description"
    >
      <DialogTitle id="confirm-delete-dialog-title">Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-delete-dialog-description">
          {message || "Are you sure you want to delete this group?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
        <Button onClick={deleteHandler} color="error">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  message: PropTypes.string, // Optional custom message
};

export default ConfirmDeleteDialog;
