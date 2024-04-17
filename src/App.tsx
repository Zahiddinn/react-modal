import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Background from "./assets/Background.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 590,
  height: 650,
  bgcolor: "#120d23bf",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  backgroundImage: `url(${Background})`,
};

const bottonStyle = {
  background: "linear-gradient(10deg, rgba(9,30,70,1) -15%, rgba(34,193,195,1) 100%)",
  fontSize: '14px'
  
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <HighlightOffIcon
            onClick={handleClose}
            cursor={"pointer"}
            sx={{
              color: "#fff",
              position: "fixed",
              top: "15px",
              right: "18px",
            }}
          />

          <Chip
            sx={{ backgroundColor: "rgba(0, 0, 0, 0.0)", color: "#FFFFFF" }}
            avatar={<Avatar sx={{ borderRadius: "20%" }}>M</Avatar>}
            label='Upstrima'
          />
          <Typography
            id='modal-modal-title'
            variant='body2'
            bgcolor={"#100220"}
            color={"#fff"}
            padding={"10px 10px"}
            margin={"10px 10px 25px"}
            borderRadius={"0 10px 10px 10px"}
          >
            Welcome and thank you for giving me a chance to be helpful I am
            designed and trained by Oil and Gas Engineers to provide you with
            information, perform scientific calculations and search for relevant
            data.{" "}
          </Typography>
          <Box sx= {{
            display: 'flex',
            justifyContent: 'flex-end',
            gridGap: '41px'
         } }>
            <Button
              variant='contained'
              size='small'
              sx={bottonStyle }
            >
              Contained
            </Button>
            <Button
              variant='contained'
              size='small'
              sx={bottonStyle }
            >
              Contained
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
