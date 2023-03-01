import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  Badge,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  ButtonGroup,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AdapterJalali from "@date-io/date-fns-jalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const states = ["البرز", "تهران", "قزوین", "اصفهان", "خوزستان", "فارس", "یزد"];

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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyApp() {
  const [tabValue, setTabValue] = React.useState(0);
  const [datePickerValue, setDatePickerValue] = React.useState(
    new Date(2022, 3, 7)
  );
  const [state, setState] = React.useState("");

  const breakpointSm = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container sx={{ p: breakpointSm ? "2.5625rem" : 0, m: 0 }}>
        <Grid
          item
          xs={12}
          sm={5}
          md={3}
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: breakpointSm ? "1rem 0 0 1rem" : 0,
          }}
        >
          <Box sx={{}}>
            {breakpointSm ? (
              <Box sx={{ display: "flex", py: "1.1875rem", pl: "2.5625rem" }}>
                <Avatar
                  alt="Saeed Safaee"
                  src="/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                  sx={{ width: 64, height: 64, border: "1px solid #3F4254" }}
                ></Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pl: "0.75rem",
                  }}
                >
                  <Typography variant="h2" fontSize="1.375rem">
                    سعید صفایی
                  </Typography>
                  <Typography variant="h3" fontSize=".75rem">
                    بدون اشتراک
                  </Typography>
                </Box>
              </Box>
            ) : (
              <></>
            )}
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
              orientation={breakpointSm ? "vertical" : "horizontal"}
              variant="scrollable"
              TabIndicatorProps={{ sx: { display: "none" } }}
              sx={{
                display: "flex",
                p: breakpointSm
                  ? ".625rem .25rem 0 .25rem"
                  : ".875rem 0 .875rem .875rem",
                "& div": {
                  gap: breakpointSm ? "0" : "1rem",
                },
                "& button": {
                  borderRadius: breakpointSm ? "6px" : "8px",
                  padding: breakpointSm ? "0 2.375rem" : ".75rem 1.5rem",
                  justifyContent: breakpointSm ? "start" : "center",
                  border: breakpointSm
                    ? "0 solid #B0BF24"
                    : "1px solid #E4E6EF",
                  width: breakpointSm ? "100%" : "max-content",
                },
                "& button.Mui-selected": {
                  backgroundColor: "#B0BF24",
                  color: "#FFFFFF",
                  border: breakpointSm
                    ? "0 solid #E4E6EF"
                    : "1px solid #E4E6EF",
                },
              }}
            >
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="اطلاعات پروفایل"
                {...a11yProps(0)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="ویژگی‌ها و علاقه‌ها"
                {...a11yProps(1)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="برنامه هفتگی"
                {...a11yProps(2)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="غذاهای مورد علاقه"
                {...a11yProps(3)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="اشتراک و پرداخت‌ها"
                {...a11yProps(4)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="پیام‌ها و گفتگوها"
                {...a11yProps(5)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="معرفی به دوستان"
                {...a11yProps(6)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="جایزه‌ها"
                {...a11yProps(7)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                }}
              />
              <Tab
                icon={<AccountCircleIcon />}
                iconPosition={breakpointSm ? "start" : "top"}
                label="خروج"
                {...a11yProps(8)}
                sx={{
                  minHeight: breakpointSm ? "48px" : "68px",
                  height: breakpointSm ? "48px" : "68px",
                  color: "#CF2D55",
                }}
              />
            </Tabs>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={9}
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: breakpointSm ? "0 16px 16px 0" : "8px",
            borderLeft: breakpointSm ? "1px solid #EAEAEA" : "none",
            boxShadow: breakpointSm
              ? "none"
              : "0px 8px 16px rgba(69, 67, 67, 0.1)",
            m: breakpointSm ? 0 : "1.25rem",
            p: breakpointSm ? "1.25rem" : "1rem",
          }}
          container
        >
          <Grid item xs={12} md={8} lg={5}>
            <TabPanel value={tabValue} index={0}>
              <Typography
                align={breakpointSm ? "left" : "center"}
                sx={{ mb: 2 }}
              >
                🙂 ویرایش پروفایل
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: 2.3125 }}
              >
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  badgeContent={<CameraAltIcon />}
                  sx={{ m: "auto" }}
                >
                  <Avatar
                    alt="Saeed Safaee"
                    src="/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                    sx={{
                      width: breakpointSm ? 104 : 96,
                      height: breakpointSm ? 104 : 96,
                      border: "1px solid #3F4254",
                    }}
                  ></Avatar>
                </Badge>
              </Box>

              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="نام"
                variant="outlined"
                sx={{
                  mb: "0.625rem",
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #E4E6EF",
                    color: "#7E8299",
                  },
                }}
              />

              <FormControl
                size="small"
                fullWidth
                sx={{
                  mb: "0.625rem",
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #E4E6EF",
                  },
                  "& input": { color: "#7E8299" },
                }}
              >
                <LocalizationProvider dateAdapter={AdapterJalali}>
                  <DatePicker
                    mask="____/__/__"
                    value={datePickerValue}
                    onChange={(newValue) => setDatePickerValue(newValue)}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl
                size="small"
                fullWidth
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #E4E6EF",
                    color: "#7E8299",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">استان</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="استان"
                  onChange={handleStateChange}
                >
                  {states.map((state, index) => (
                    <MenuItem key={index} value={index}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mt: "0.625rem" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="مجرد"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel
                    value="مجرد"
                    control={
                      <Radio
                        checkedIcon={<CheckCircleIcon />}
                        sx={{ p: "10px" }}
                      />
                    }
                    label="مجرد"
                  />
                  <FormControlLabel
                    value="متاهل"
                    control={<Radio checkedIcon={<CheckCircleIcon />} />}
                    label="متاهل"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth sx={{ mb: "1rem" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="شاغل"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel
                    value="خانه‌دار"
                    control={
                      <Radio
                        checkedIcon={<CheckCircleIcon />}
                        sx={{ p: "10px" }}
                      />
                    }
                    label="خانه‌دار"
                  />
                  <FormControlLabel
                    value="شاغل"
                    control={<Radio checkedIcon={<CheckCircleIcon />} />}
                    label="شاغل"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <ButtonGroup row="true" sx={{ gap: ".4375rem" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                  >
                    ذخیره اطلاعات
                  </Button>
                  <Button variant="outlined" fullWidth>
                    انصراف
                  </Button>
                </ButtonGroup>
              </FormControl>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Item Three
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
