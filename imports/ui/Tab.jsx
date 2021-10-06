import * as React from "react";
import PropTypes from "prop-types";
import {Tabs,Tab,Typography,Box} from "@mui/material";
import Chat from "./Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleIcon from "@mui/icons-material/Circle";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ position: "fixed" }}
        >
          <Tab
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            label="Shubham"
            icon={<CircleIcon />}
            {...a11yProps(0)}
          />

          <Tab
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              flexDirection: "row",
            }}
            
            label="Parent"
            icon={<AccountCircleIcon />}
            {...a11yProps(1)}
          />
          <Tab
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              flexDirection: "row",
            }}
            label="group"
            icon={<GroupsIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <Box style={{"marginTop":"70px",overflow:"auto",maxHeight:"350px",height:"420px"}}>
        <TabPanel value={value} index={0}>
          <Chat />
          <Chat />
          <Chat />
        </TabPanel>

        <TabPanel value={value} index={1} >
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Chat />
          <Chat />
          <Chat />
        </TabPanel>
      </Box>
    </Box>
  );
}
