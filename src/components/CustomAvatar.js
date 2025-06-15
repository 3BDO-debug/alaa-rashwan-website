// Next
import Image from "next/image";
import React, { useState } from "react";
// @Mui
import { Avatar, Popover, Box, Stack, Chip } from "@mui/material";
// Iconify
import { Icon } from "@iconify/react";

function CustomAvatar({ img, width, heigth, story }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Avatar
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        alt="Main Photo"
        src={img}
        sx={{ width: width, height: heigth, cursor: "pointer" }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          mt: -1,
        }}
        PaperProps={{ sx: { overflow: "hidden" } }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <Chip
          label={story}
          sx={{
            color: "secondary.main",
            bgcolor: "transparent",
            border: 1,
            borderColor: "secondary.main",
            display: "flex",
          }}
        />
      </Popover>
    </Box>
  );
}

export default CustomAvatar;
