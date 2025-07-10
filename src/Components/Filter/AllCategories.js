import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
       <h1>Please choose a class you are interested in</h1>
       {['YOGA', 'PILATES', 'STRENGTH', 'BOXING', 'ALL']
       .map(category => <Filter category ={category} />)}
       
        </div>)
}

export default AllCategories;