import { makeAutoObservable, observable, computed, action, flow } from "mobx"

import listOfResources from '../../../constants/fixtures.json'
import { resourceItemType } from "../types"

class ResourceStore {

    listOfResources: Array<resourceItemType>
    newResourceItem: any
    constructor() {
        makeAutoObservable(this, {
            listOfResources: observable,
            newResourceItem: observable,
            addResourcesToList : action
        })
        this.listOfResources = [...listOfResources]
        this.newResourceItem = {}
    }

    addResourcesToList = (resource: any) => {
        this.listOfResources = [...this.listOfResources, resource]
    }

}

export {ResourceStore}