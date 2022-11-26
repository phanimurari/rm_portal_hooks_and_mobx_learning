import { useState } from "react";
import { observer } from "mobx-react-lite"
import { ResourceStore } from "../../store/resourcesStore/resourceStore";
import HomeComponent from "../../components/HomeComponent";


const Home = observer( () => {

    const [resourcesListStore] = useState(new ResourceStore())

    const { listOfResources, deleteResourceItemFromList, numberOfResourceItems} =resourcesListStore


    const addResourceItem = () => {
        console.log("on click resource item")
    }


    const onDeleteResourceItem = (resourceItemId: any) => {
       deleteResourceItemFromList(resourceItemId)
    }

    return <div>
        <HomeComponent listOfResources={listOfResources} addResourceItem={addResourceItem} onDeleteResourceItem={onDeleteResourceItem} numberOfResourceItems={numberOfResourceItems}/>
    </div>

})





export default Home