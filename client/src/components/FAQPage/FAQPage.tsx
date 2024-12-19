import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import './FAQPage.scss';
import { IQuestion } from '../../interfaces/IQuestions.interface';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQPage = ({ qustions }:{ qustions: IQuestion[] }) => {

    return (
        <div className="faq-page">
            <div className="faq-page-title">
                <h1 className="faq-page-title-text">FAQ</h1>
            </div>
            <div className="faq-section">
                <h3 className="faq-section-subtitle">Часто задаваемые вопросы</h3>
                <div className="faq-section-accordion">
                    {qustions.map((qustion, index) => (
                     <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <h4 className="accordion-question">{qustion.question}</h4>
                        </AccordionSummary>
                            <AccordionDetails className="accordion-details">
                                <p className="accordion-answer">{qustion.answer}</p>
                            </AccordionDetails>
                    </Accordion>   
                    ))}
                </div>

            </div>
        </div>
    )
};