import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axiosInstance from "../Utils/AxiosInstance";

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    backgroundColor: "#000000", // Black background for the header
    color: "#FFFFFF", // White text color
    textAlign: "center",
    padding: "16px",
    fontSize: "1.25rem",
    fontWeight: "bold",
    borderBottom: "1px solid #333333", // Dark gray border for contrast
  },
  dialogContent: {
    backgroundColor: "#000000", // Black background for the content area
    padding: "24px",
    color: "#FFFFFF", // White text color
    overflowY: "auto", // Allow scrolling if content is too long
  },
  inputField: {
    marginBottom: "16px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#333333", // Dark gray border color
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF", // White border color on hover
      },
    },
    "& .MuiInputLabel-root": {
      color: "#FFFFFF", // White text color for the label
    },
    "& .MuiInputBase-input": {
      color: "#FFFFFF", // White text color
    },
  },
  submitButton: {
    backgroundColor: "#333333", // Dark gray background for the button
    color: "#FFFFFF", // White text color
    textTransform: "none",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#000000", // Black background on hover
    },
    padding: "8px 16px",
    border: "none", // Remove border
    cursor: "pointer", // Pointer cursor on hover
    transition: "background-color 0.3s ease",
  },
  cancelButton: {
    backgroundColor: "#000000", // Black background for the cancel button
    color: "#FFFFFF", // White text color
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#333333", // Dark gray background on hover
    },
    padding: "8px 16px",
    border: "none", // Remove border
    cursor: "pointer", // Pointer cursor on hover
    transition: "background-color 0.3s ease",
  },
  errorText: {
    color: "red",
    marginBottom: "16px",
  },
}));

function LoginDrawer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userNameOrEmail) {
      setError("Please enter your username or email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/user/login", {
        userNameOrEmail: userNameOrEmail,
        password: password,
      });

      if (response.data && response.data.userName) {
        setIsLoggedIn(true);
        console.log("User logged in:", response.data.userName);
      }
      handleClose();
    } catch (error) {
      setError("Login failed! Please try again.");
      console.log("Error during login:", error);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} className={classes.submitButton}>
        Login
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className={classes.modalHeader}>Login</DialogTitle>

        <DialogContent className={classes.dialogContent}>
          {error && <div className={classes.errorText}>{error}</div>}
          <form>
            <TextField
              label="Username or Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              className={classes.inputField}
              value={userNameOrEmail}
              onChange={(e) => setUserNameOrEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              required
              className={classes.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </DialogContent>

        <DialogActions className={classes.modalHeader}>
          <Button onClick={handleClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={handleLogin}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDrawer;
