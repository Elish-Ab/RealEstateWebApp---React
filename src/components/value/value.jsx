import React from 'react'
import './value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../../utils/accordion'
import {MdOutlineArrowDropDown} from 'react-icons/md';
function Value() {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div class="image-container">
                    <img src="./value.png" alt=""></img>
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value We Give to You</span>
                <span className="secondaryText">We are always ready to help by providing the best services for you.
                    <br/>
                    We believe a good place to live can make life better! 
                </span>
                <Accordion 
                className="accordion"
                allowMultipleExpanded= {false}
                preExpanded={[0]} 
                >
                    {
                        data.map((item, i) =>{
                            return(
                                <AccordionItem className="accordionItem" key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton  className="flexCenter accordionButton">
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>

        </div>
    </section>
    );
}

export default Value;