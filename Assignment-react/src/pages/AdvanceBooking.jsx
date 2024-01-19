import { Box, Divider, Paper, Typography, InputBase, Button, Select, MenuItem } from "@mui/material";
import cauliflower from "../assets/1cauliflower.png";
import pngtree_lettuce from "../assets/pngtree—lettuce.png";
import dots_bg1 from "../assets/dots-bg1.png";

const AdvanceBooking = () => {
  return (
    <Box
      sx={{
        height: "700px",
        bgcolor: "grey.100",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:before": {
          bottom: 60,
          content: `""`,
          width: "260px",
          height: "260px",
          position: "absolute",
          left: 170,
          backgroundImage: `url(${dots_bg1})`,
        },
        "&:after": {
          top: 75,
          content: `""`,
          width: "260px",
          height: "260px",
          position: "absolute",
          right: 200,
          backgroundImage: `url(${dots_bg1})`,
        },
      }}
    >
      <Paper
        sx={{
          width: 0.6,
          height: 0.6,
          py: 5,
          zIndex: 11,
        }}
      >
        <img
          src={pngtree_lettuce}
          height={900}
          style={{
            position: "absolute",
            left: -80,
            top: "45%",
            transform: "rotate(-5deg) translateY(-50%)",
          }}
        />
        <Divider
          sx={{
            width: 0.1,
            borderWidth: 7,
            bgcolor: "#3D7475",
            mb: 2,
            mx: "auto",
          }}
        />
        <Typography variant="h4" color="#2E266F" fontWeight={600} textAlign={"center"}>
          Advanced Booking
        </Typography>
         {/* Search Bar */}
         <Box
          sx={{
            mt: 4,
            width: '450px',
            ml: 'auto',
            mr: 'auto',
            display: "flex",
            alignItems: "center",
            boxShadow: "0px 0px 18px rgba(255, 87, 34, 0.2)", // Pinkish box shadow
          }}
        >
          <InputBase
            placeholder="search restaurant"
            sx={{
              flexGrow: 1,
              ml: 2,
              p: 1,
              color: "text.primary",
            }}
          />
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: "#3D7475",
              color: "white",
              mr: 1, 
              width: '80px',
              fontWeight: '700',
              fontSize: '15px',
              '&:hover': {
                backgroundColor: "#3D7475"
              } 
            }}
          >
            Go
          </Button>
        </Box>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            px: 2, 
            mt: 4,
            width: '450px',
            ml: 'auto',
            mr: 'auto' 
          }}>
          <Box>
            <Typography 
            variant="subtitle1" 
            fontSize="1.4rem" 
            fontWeight="bold" 
            color="#2E266F"
            >
              Date
              <span style={{ color: 'red', fontSize: '0.8rem', verticalAlign: 'middle' }}> ▼</span>
            </Typography>
            <Typography variant="body1" color="#707070">15-9-19</Typography>
          </Box>
          <Box>
            <Typography 
            variant="subtitle1" 
            fontSize="1.4rem" 
            fontWeight="bold" 
            color="#2E266F"
            >
              Time
              <span style={{ color: 'red', fontSize: '0.8rem', verticalAlign: 'middle' }}> ▼</span>
            </Typography>
            <Typography variant="body1" color="#707070">09:30 PM</Typography>
          </Box>
          <Box>
            <Typography 
            variant="subtitle1" 
            fontSize="1.4rem" 
            fontWeight="bold" 
            color="#2E266F"
            >
              Guests
              <span style={{ color: 'red', fontSize: '0.8rem', verticalAlign: 'middle' }}> ▼</span>
            </Typography>
            <Typography variant="body1" color="#707070">2 people</Typography>
          </Box>
        </Box>
      </Paper>
      <img
        src={cauliflower}
        height={370}
        style={{
          position: "absolute",
          right: -150,
          top: "35%",
          transform: "rotate(-10deg) translateY(-50%)",
        }}
      />
    </Box>
  );
};

export default AdvanceBooking;
