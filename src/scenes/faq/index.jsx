import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is why I always try my best but never get a chance in a company
            or sotfware factory, but someday I will be a fullfledge developer in
            my own therms no matter how I wiil do it
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some other questions!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is why I always try my best but never get a chance in a company
            or sotfware factory, but someday I will be a fullfledge developer in
            my own therms no matter how I wiil do it
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A random question!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is why I always try my best but never get a chance in a company
            or sotfware factory, but someday I will be a fullfledge developer in
            my own therms no matter how I wiil do it
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is why I always try my best but never get a chance in a company
            or sotfware factory, but someday I will be a fullfledge developer in
            my own therms no matter how I wiil do it
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
