import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Tabs.module.css";

const finalTheme = createTheme({
  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontWeight: 500,
          color: "#000",
          textTransform: "capitalize",
          fontSize: "1rem",
          backgroundColor: "#fff",
          opacity: "50%",
          "&.Mui-selected": {
            color: "#000",
            fontWeight: 600,
            backgroundColor: "#96b3fb",
            opacity: "100%",
          },
        },
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0.3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  {
    /*const buttonStyles = {
    fontWeight: 400,
    color: "#000",
    textTransform: "capitalize",
    fontSize: "large",
    backgroundColor: "#24cbc8",
    opacity: "50%",
    "&:Mui-selected": {
      backgroundColor: "#fff",
      color: "#000",
      textTransform: "capitalize",
      fontSize: "large",
      fontWeight: 400,
    },
  };*/
  }

  return (
    <ThemeProvider theme={finalTheme}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
          >
            {tabs.map(({ label }, i) => (
              <Tab label={label} key={i} />
            ))}
          </Tabs>
        </Box>
        {tabs.map(({ Component }, i) => (
          <TabPanel value={value} index={i} key={i}>
            {Component}
          </TabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
}
