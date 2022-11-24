


import Dental from "./Dental";




const Service = ({service}) => {
  
 
    return (
        <div>
            <img className="vector" src={`./${service.img}.jpg`} alt="services"/>
            <span><h3>{service.name}</h3></span>
        <div>
          
             
                <Dental/>
             
                
           

        </div>
    </div>
    )
   }

export default Service;
