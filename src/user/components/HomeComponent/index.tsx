import { resourceItemType } from "../../store/types"
import { toJS } from 'mobx'
import { StyledResourceHomePageContainer, StyledResourceHomePageMainContainer } from "./styledComponents"
import ResourceItemsTable from "../ResourceItemsTable"

interface homeComponentPropTypes {
    listOfResources: Array<resourceItemType>;
    addResourceItem: () => void
}


const HomeComponent = (props: homeComponentPropTypes) => {
    
    const { listOfResources, addResourceItem } = props
    
    const resultListOfResources  = toJS(listOfResources)


    const renderListOfResourceItems = () => {
        return <StyledResourceHomePageMainContainer>
            <h1>Resource Management Portal</h1>
            <button onClick={addResourceItem}>Add Resource</button>
            </StyledResourceHomePageMainContainer>
    }

    return <StyledResourceHomePageContainer>
        {renderListOfResourceItems()}
        <ResourceItemsTable listOfResources={listOfResources}/>
    </StyledResourceHomePageContainer>
    
    
}

export default HomeComponent