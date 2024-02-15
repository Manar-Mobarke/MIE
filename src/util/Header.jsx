"use strict";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import DribbleButton from "./DribbleButton";
import CloseIcon from "@mui/icons-material/Close";
import Form from "../Form";

export default function Header() {
  const [dribble, setDribble] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const visitedForm = window.localStorage.getItem("visitedForm");
    console.log("🚀 ~ useEffect ~ visitedForm:", visitedForm);

    if (!visitedForm) {
      setDribble(true);
    } else {
      setDribble(false);
    }
  }, []);

  const handleClickIcon = () => {
    handleClickOpen();
    setDribble(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "8dvh",
      }}
    >
      <Toolbar>
        {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            component={"a"}
            href="/"
            color="white"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            MIE register project
          </Typography>
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClickIcon}

          // LinkComponent={Link}
          // target="_blank"
          // href="https://forms.gle/aPy7Ak15BJVDfXSm9"
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
            }}
          >
            <DribbleButton dribble={dribble} />
          </Box>
          <AddToQueueIcon
            sx={{
              zIndex: 2,
            }}
          />
        </IconButton>

        {/* // ! Not working search yet!! */}
        {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  data.filter((row) => {});
                }}
              />
            </Search> */}
      </Toolbar>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Add your project</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Form />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}
