import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    backgroundColor: "#333", // Dark gray for the header
    color: "#fff",
    textAlign: "center",
    padding: "16px",
    fontSize: "1.25rem",
    fontWeight: "bold",
    borderBottom: "1px solid #444", // Subtle border at the bottom
  },
  dialogContent: {
    backgroundColor: "#444", // Slightly lighter dark gray for the content area
    padding: "24px",
    color: "#fff",
    overflowY: "auto", // Allow scrolling if content is too long
  },
  inputField: {
    marginBottom: "16px",
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#666', // Medium gray border
      },
      '&:hover fieldset': {
        borderColor: '#fff', // White border on hover
      },
    },
    '& .MuiInputLabel-root': {
      color: '#aaa', // Light gray label color
    },
    '& .MuiInputBase-input': {
      color: '#fff', // Text color
    },
  },
  submitButton: {
    backgroundColor: "#555", // Medium gray for the button
    color: "#fff",
    textTransform: "none",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#666", // Slightly lighter gray on hover
    },
    padding: "8px 16px",
    border: "none", // Remove border
    cursor: "pointer", // Pointer cursor on hover
    transition: "background-color 0.3s ease",
  },
  cancelButton: {
    backgroundColor: "#666", // Darker gray for the cancel button
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#777", // Slightly lighter gray on hover
    },
    padding: "8px 16px",
    border: "none", // Remove border
    cursor: "pointer", // Pointer cursor on hover
    transition: "background-color 0.3s ease",
  },
}));


function LoginDrawer() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        className={classes.submitButton}
      >
        Login
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className={classes.modalHeader}>
          Login
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <form>
            <TextField
              label="Enter username or email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              className={classes.inputField}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              required
              className={classes.inputField}
            />
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#333" }}>
          <Button onClick={handleClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={handleClose}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDrawer;
