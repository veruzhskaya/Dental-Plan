const Buttons = ({filteredDent}) =>{
    
    return (
        <div>
            <button className="open" onClick={() => filteredDent ("Общая стоматология")}>Общая стоматология</button>
            <button className="open" onClick={() => filteredDent ("Лечение кариеса")}>Лечение кариеса</button>
        </div>
    )
}
export default Buttons;