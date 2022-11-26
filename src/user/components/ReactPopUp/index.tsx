import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'


interface reactPopUpProps {
    addResourceItem : () => void
}

const ReactPopUp = (props: reactPopUpProps) => {
    
    const {addResourceItem} = props

    return <div className="popup-container">
        <Popup
            modal
            trigger={
                <button type="button" className="trigger-button" onClick = {addResourceItem}>
                    Add Resource
                </button>
            }
        >
            {(close: () => {}) => (
                <>
                    <h1>Add Resource Item</h1>
                    <form>
                        <input type="input" placeholder="Resource Name" />
                        <input type="input" placeholder="Responsible Person(RP)" />
                        <input type="input" placeholder="Team" />
                    </form>
                    <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                    >
                        Close
                    </button>
                </>
            )}
        </Popup>
    </div>
}


export default ReactPopUp