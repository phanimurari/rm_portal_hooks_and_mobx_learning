import { useState } from "react";
import { observer } from "mobx-react-lite"
import { ResourceStore } from "../../store/resourcesStore/resourceStore";
import HomeComponent from "../../components/HomeComponent";


const Home = observer( () => {

    const [resourcesListStore] = useState(new ResourceStore())

    const { listOfResources } =resourcesListStore


    const addResourceItem = () => {
        console.log("on click resource item")
    }

    return <div>
        <HomeComponent listOfResources={listOfResources} addResourceItem={addResourceItem}/>
    </div>

})





export default Home