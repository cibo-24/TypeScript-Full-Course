import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const AccordionLesson = () => {
    const [expanted, setExpanted] = useState<string | false>(false);

    const handleChange = (panel1:string) => (event: React.SyntheticEvent, isExpanted:boolean) => {
        setExpanted(isExpanted ? panel1 : false); 
    }
    return (
        <div>
            {/* <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
                <Typography>İlk Bölüm</Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam dolore laudantium cumque voluptatum corrupti consectetur a, commodi ad magni dolorem eos sint. Laudantium, voluptatem aliquam. Dicta perspiciatis ad quasi!</AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
                <Typography>İkinci Bölüm</Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam dolore laudantium cumque voluptatum corrupti consectetur a, commodi ad magni dolorem eos sint. Laudantium, voluptatem aliquam. Dicta perspiciatis ad quasi!</AccordionDetails>
        </Accordion>
        <Accordion disabled>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
                <Typography>Üçüncü Bölüm</Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam dolore laudantium cumque voluptatum corrupti consectetur a, commodi ad magni dolorem eos sint. Laudantium, voluptatem aliquam. Dicta perspiciatis ad quasi!</AccordionDetails>
        </Accordion> */}
       
            <Accordion expanded={expanted === "panel1" } onChange={handleChange("panel1")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography>İlk Bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam dolore laudantium cumque voluptatum corrupti consectetur a, commodi ad magni dolorem eos sint. Laudantium, voluptatem aliquam. Dicta perspiciatis ad quasi!</AccordionDetails>
            </Accordion >
            <Accordion expanded={expanted === "panel2" } onChange={handleChange("panel2")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography>İkinci Bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam dolore laudantium cumque voluptatum corrupti consectetur a, commodi ad magni dolorem eos sint. Laudantium, voluptatem aliquam. Dicta perspiciatis ad quasi!</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanted === "panel3" } onChange={handleChange("panel3")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography>Üçüncü Bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam dolore laudantium cumque voluptatum corrupti consectetur a, commodi ad magni dolorem eos sint. Laudantium, voluptatem aliquam. Dicta perspiciatis ad quasi!</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionLesson