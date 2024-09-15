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
import { AuthContext } from "../src/contexts/AuthProvider";
import { useContext } from "react";


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
}));

function SignupDrawer() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const classes = useStyles();

  const authState=useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!userName) {
      setError("Please enter a username.");
      return;
    }
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/user/create-user", {
        userName: userName,
        email: email,
        password: password,
      });

      if (response.data && response.data.userName) {
        console.log("User created:", response.data.userName);
      }
      authState.setUniversalLoggedin(true);
      handleClose();
    } catch (error) {
      setError("Signup failed! Please try again.");
      console.log("Error during signup:", error);
    }
  };

  return (
    <div className="">
      <Button
        variant="contained"
        onClick={handleOpen}
        className={classes.submitButton}
      >
        Signup
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className={classes.modalHeader}>Sign Up</DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              className={classes.inputField}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
              className={classes.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSignup}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignupDrawer;
