import './Filter.css';

function Filter({filterData, category, setCategory}){

    // const [isActive, setIsActive] = useState(false); 
    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className='filterContainer'>
            {
                filterData.map(
                    (data) =>{
                        return <button className={`filterButton ${category===data.title ? "active" : ""}`} 
                        key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>;
                    }
                )
            }
        </div>
    );
}

export default Filter;