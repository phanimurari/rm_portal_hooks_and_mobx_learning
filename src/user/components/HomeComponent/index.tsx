import { resourceItemType } from "../../store/types"
import { toJS } from 'mobx'
import { StyledResourceHomePageContainer, StyledResourceHomePageMainContainer } from "./styledComponents"
import ResourceItemsTable from "../ResourceItemsTable"

interface homeComponentPropTypes {
    listOfResources: Array<resourceItemType>
    numberOfResourceItems: number
    addResourceItem: () => void
    onDeleteResourceItem:(resourceItemId : number) => void
}


const HomeComponent = (props: homeComponentPropTypes) => {
    
    const { listOfResources, addResourceItem, onDeleteResourceItem, numberOfResourceItems  } = props
    
    const resultListOfResources  = toJS(listOfResources)


    const renderListOfResourceItems = () => {
        return <StyledResourceHomePageMainContainer>
            <h1>Resource Management Portal</h1>
            <button onClick={addResourceItem}>Add Resource</button>
            </StyledResourceHomePageMainContainer>
    }

    return <StyledResourceHomePageContainer>
        {renderListOfResourceItems()}
        <h3>Number of Resources Items : {numberOfResourceItems}</h3>
        <ResourceItemsTable listOfResources={listOfResources} onDeleteResourceItem={onDeleteResourceItem}/>
    </StyledResourceHomePageContainer>

}

export default HomeComponent