import { useSelector } from "react-redux";
import servicesData from "../../data/servicesData";
import { getSelectedCategory } from "../../redux/servicesSlice";
import Service from "./Service";





const Services = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div>
            {servicesData.filter (service => {
                if (selectedCategory === "Все услуги")
                return true
                return selectedCategory === service.category
            })
            .map (service => <Service service={service}/>)}
              
        </div>
    )
}

export default Services;