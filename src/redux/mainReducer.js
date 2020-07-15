import phones from './phones'
import { FILTER_ITEMS, SEARCH_ITEMS, LIKE_ITEMS, REMOVE_LIKE, ADD_SHOP, REMOVE_SHOP } from './types'

const initialState = {
    items: phones,
    likes: [],
    shops: [],
    searchVal: '',
    filterVal: '',
    searchRes: phones
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_ITEMS:
            return {
                ...state,
                searchRes: action.fltr.length ? state.searchRes.filter(itm => 
                    itm.brand.toLocaleLowerCase().includes(action.fltr.toLocaleLowerCase()) ||
                    itm.os.toLocaleLowerCase().includes(action.fltr.toLocaleLowerCase()) ||
                    itm.year.toString().toLocaleLowerCase().includes(action.fltr.toLocaleLowerCase()) 
                ) : state.items,
                filterVal: action.fltr
            };
        case SEARCH_ITEMS:
            return {
                ...state,
                searchRes: state.items.filter(itm => itm.name.toLocaleLowerCase().includes(action.val.toLocaleLowerCase())),
                searchVal: action.val
            };
        case LIKE_ITEMS:
            return {
                ...state,
                likes: state.likes.concat([action.item]),
                searchRes: state.searchRes.map(itm => itm.id === action.item.id ?
                    {...itm, like: true} : itm
                ),
                items: state.items.map(itm => itm.id === action.item.id ?
                    {...itm, like: true} : itm
                )
            };
        case REMOVE_LIKE:
            return {
                ...state,
                likes: state.likes.filter(like => like.id !== action.id),
                searchRes: state.searchRes.map(itm => itm.id === action.id ?
                    {...itm, like: false} : itm
                ),
                items: state.items.map(itm => itm.id === action.id ?
                    {...itm, like: false} : itm
                )
            };
        case ADD_SHOP:
            return {
                ...state,
                shops: state.shops.concat([action.info]),
                searchRes: state.searchRes.map(itm => itm.id === action.info.item.id ?
                    {...itm, shop: true} : itm
                ),
                items: state.items.map(itm => itm.id === action.info.item.id ?
                    {...itm, shop: true} : itm
                )
            };
        case REMOVE_SHOP:
            return {
                ...state,
                shops: state.shops.filter(shop => shop.item.id !== action.id),
                searchRes: state.searchRes.map(itm => itm.id === action.id ?
                    {...itm, shop: false} : itm
                ),
                items: state.items.map(itm => itm.id === action.id ?
                    {...itm, shop: false} : itm
                )
            };
        default: return state
    }
}