import { Accordion, AccordionSummary, AccordionDetails, Button, Slider } from '@mui/material';
import './Filters.scss';
import { FilterItems } from '../../../interfaces/IFilterItems.interface';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export const Filters = ({ filterByBrand, typeSelectionHandler, brandSelectionHandler }: { filterByBrand: FilterItems, typeSelectionHandler: (val: string) => void, brandSelectionHandler: (val: string) => void }) => {
    const types = ["Все", "Лидеры продаж", "Новинки", "Распродажа"];

    const [priceRange, setPriceRange] = useState<number[]>([0, 900000]);

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
        console.log(newValue);
        console.log(event.target);
    };

    const filterChange = (event: React.MouseEvent<HTMLElement>) => {
        const selectType = event.currentTarget.textContent;
        if(selectType === 'Все') typeSelectionHandler('');
        if(selectType === 'Лидеры продаж') typeSelectionHandler('topSeller');
        if(selectType === 'Новинки') typeSelectionHandler('newProd');
        if(selectType === 'Распродажа') typeSelectionHandler('sale');
    };

    const handleChange = (event: React.MouseEvent<HTMLElement>) => {
        const selectBrand = event.currentTarget.textContent;
        if(selectBrand) {
            if(selectBrand  === 'Все') {
                brandSelectionHandler('');
            } else {
                brandSelectionHandler(selectBrand);
            }
        }
    };

    return (
        <div className="filters">
            <h3 className="filter-title">Фильтр</h3>
            <div className="accordion-section">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h4>Тип товара</h4>
                    </AccordionSummary>
                    {types.map((itemType, index) => (
                        <AccordionDetails key={index} className="accordion-details">
                            <Button className="accordion-button" variant='text' onClick={filterChange}>{itemType}</Button>
                        </AccordionDetails>
                    ))}
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h4>{filterByBrand.title}</h4>
                    </AccordionSummary>
                    {filterByBrand.types.map((itemType, index) => (
                        <AccordionDetails key={index} className="accordion-details">
                            <Button className="accordion-button" variant='text' onClick={handleChange}>{itemType}</Button>
                        </AccordionDetails>
                    ))}
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h4>Цена</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={(value) => `${value} тнг`}
                            min={0}
                            max={900000}
                            step={1000}
                            marks={[
                                { value: 0, label: '0 тг' },
                                { value: 900000, label: '900000 тг' },
                            ]}
                        />
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
};