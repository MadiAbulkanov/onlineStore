import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {InfoPage} from "../InfoPage.tsx";
import {FAQ_CONFIG} from "./config.ts";

export const FAQ = () => {
    return (
      <InfoPage title="FAQ" className="faq-page">
        <div className="faq-section">
          <h3 className="faq-section-subtitle">Часто задаваемые вопросы</h3>
          <div className="faq-section-accordion">
            {FAQ_CONFIG.map((item) => (
              <Accordion key={item.question}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h4 className="accordion-question">{item.question}</h4>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  <p className="accordion-answer">{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </InfoPage>
    )
};
