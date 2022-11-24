import ChangeQuantity from "../Cart/ChangeQuantity";

const DentalFilter = ({dent}) => {
    return(
        <div>
            {dent.map(dent => {
                const {id, serviceName, price, serviceCategory} = dent;
                return (
                    <div className="par">
                        <p >{serviceName}</p>
                        <p >{price}</p>

                        <ChangeQuantity/>
                        <button>add</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DentalFilter;