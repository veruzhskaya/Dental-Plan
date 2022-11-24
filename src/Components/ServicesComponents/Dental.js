import { useState } from "react";
import DentalFilter from "./DantalFilter";
import data from '../../data/Data';
import Buttons from "./Buttons";

const Dental = () => {
    const [dent, setDent] = useState(data);
    const chosenDent = (serviceCategory) => {
        const newDent = data.filter(dent => dent.serviceCategory ===serviceCategory);
        setDent(newDent)
    }
    return(
        <div>
            <Buttons filteredDent = {chosenDent}/>
            <DentalFilter dent = {dent}/>
           
        </div>
    )
}

export default Dental;