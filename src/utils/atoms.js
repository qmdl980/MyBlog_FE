import {atom, selector} from "recoil";

export const articleListState = atom({
    key:'articleListState',
    default:[]
})

export const articleState = atom({
    key:"articleState",
    default:{}
})

export const articleFilterState = atom({
    key:"",
    default:""
})