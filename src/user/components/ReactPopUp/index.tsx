import { useState } from 'react'
import Popup from 'reactjs-popup'
import { format } from 'date-fns'

import 'reactjs-popup/dist/index.css'
import { resourceItemType } from '../../store/types'
import { StyledFormElement, StyledInputElement, StyledReactPopUpContainer } from './styledComponents'
import ButtonElement from '../Common/Button'


interface reactPopUpProps {
    addResourceItem : (resource: resourceItemType) => void
}

const ReactPopUp = (props: reactPopUpProps) => {
    

    const [resourceName, setResourceName] = useState('')
    const [rpName, setrpName] = useState('')
    const [teamName, setTeamName] = useState('')


    const onChangeResourceName = (event: React.ChangeEvent<HTMLInputElement>) => {

        const resourceName = event.target.value
        setResourceName(resourceName)
  
    }
    
const onChangerpName = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    const rpName = event.target.value
    setrpName(rpName)
    }


const onChangeTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const teamName = event.target.value
    setTeamName(teamName)
    }

    const { addResourceItem } = props
    
  

    return <div className="popup-container">
        <Popup
            modal
            trigger={
                <button type="button" className="trigger-button">
                    Add Resource
                </button>
            }
        >
            {(close: () => {}) => {

  const onClickAddResourceItem = async () => {

        const addedResourceItem = {
        "resource_id": Math.ceil(Math.random() * 100),
        "resource_name": resourceName,
        "rp": rpName,
        "team": teamName,
        "using_form_date": format(new Date(), "dd-mm-yyyy")
        }
      await addResourceItem(addedResourceItem)
      setResourceName('')
      setrpName('')
      setTeamName('')
      close()
    }
                return (
                    <StyledReactPopUpContainer>
                        <h1>Add Resource Item</h1>
                        <StyledFormElement>
                            <StyledInputElement type="input" value={resourceName} placeholder="Resource Name" onChange={onChangeResourceName} />
                            <StyledInputElement type="input" value={rpName} placeholder="Responsible Person(RP)" onChange={onChangerpName} />
                            <StyledInputElement type="input" value={teamName} placeholder="Team" onChange={onChangeTeamName} />
                        </StyledFormElement>
                        <ButtonElement
                            type="button"
                            onClickMethod={onClickAddResourceItem}
                            text="Add"
                        />
                        
                    </StyledReactPopUpContainer>
                )
            }}
        </Popup>
    </div>
}


export default ReactPopUp