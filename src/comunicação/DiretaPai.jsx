import DiretaFilho from "./DiretaFilho"

export default props =>{
    return(
        <div>
            <DiretaFilho nome="David" idade={20} nerd={true}/>
            <DiretaFilho nome="Lavínia" idade={17} nerd={false}/>
        </div>
    )
}