import { useState } from "react";
import { observer } from "mobx-react-lite"
import { ResourceStore } from "../../store/resourcesStore/resourceStore";
import HomeComponent from "../../components/HomeComponent";
import { resourceItemType } from "../../store/types";


const Home = observer( () => {

    const [resourcesListStore] = useState(new ResourceStore())

    const { listOfResources, deleteResourceItemFromList, numberOfResourceItems, addResourcesToList} =resourcesListStore


    const addResourceItem = (resource: resourceItemType) => {
        addResourcesToList(resource)
    }


    const onDeleteResourceItem = (resourceItemId: any) => {
       deleteResourceItemFromList(resourceItemId)
    }

    return <div>
        <HomeComponent listOfResources={listOfResources} addResourceItem={addResourceItem} onDeleteResourceItem={onDeleteResourceItem} numberOfResourceItems={numberOfResourceItems}/>
    </div>

})





export default Home