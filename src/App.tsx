import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [value, setValue] = useState("2")

    return (
        <div className={"App"}>

            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>
            {/*{switchOn.toString()}*/}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }} items={[{title: "Dzimych", value: 1},
                {title: "Valera", value: 2},
                {title: "Artem", value: 3},
                {title: "Victor", value: 4}
            ]} onClick={(x) => x}
            />

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <Select value={value}
                    onChange={setValue}
                    items={[
                        {value: "1", title: "Minsk"},
                        {value: "2", title: "Moscow"},
                        {value: "3", title: "Kiev"},
                    ]}
            />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

/*function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}*/

export default App;
