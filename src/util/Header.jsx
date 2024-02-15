"use strict";
import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Menu, MenuItem } from "@mui/material";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import Link from "@mui/material/Link";
import DribbleButton from "./DribbleButton";

export default function Header() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dribble, setDribble] = useState(false);

  useEffect(() => {
    const visitedForm = window.localStorage.getItem("visitedForm");
    console.log("🚀 ~ useEffect ~ visitedForm:", visitedForm);

    if (!visitedForm) {
      setDribble(true);
    } else {
      setDribble(false);
    }
  }, []);

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
          onClick={() => {
            if (typeof window !== "undefined") {
              window.localStorage.setItem("visitedForm", "true");
            }
            setDribble(false);
            window.open("https://forms.gle/aPy7Ak15BJVDfXSm9", "_blank");
          }}

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
    </AppBar>
  );
}
