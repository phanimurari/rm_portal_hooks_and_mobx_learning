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
            addResourcesToList: action,
            deleteResourceItemFromList: action,
            numberOfResourceItems: computed
        })
        this.listOfResources = [...listOfResources]
        this.newResourceItem = {}
    }

    get numberOfResourceItems () {
        return this.listOfResources.length
    }

    addResourcesToList = (resource: any) => {
        this.listOfResources = [...this.listOfResources, resource]
    }

    deleteResourceItemFromList = (resourceItemId: number) => {
        const updatedResourceItemsList = this.listOfResources.filter(resourceItem => resourceItem.resource_id !== resourceItemId)
        this.listOfResources = [...updatedResourceItemsList]
    }

}

export {ResourceStore}