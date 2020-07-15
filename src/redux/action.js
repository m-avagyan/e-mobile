import { FILTER_ITEMS, SEARCH_ITEMS, LIKE_ITEMS, REMOVE_LIKE, ADD_SHOP, REMOVE_SHOP } from "./types";

export function filterItems(fltr) {
    return {
        type: FILTER_ITEMS,
        fltr
    }
}

export function searchItems(val) {
    return {
        type: SEARCH_ITEMS,
        val
    }
}

export function likeItem(item) {
    return {
        type: LIKE_ITEMS,
        item
    }
}

export function removeLike(id) {
    return {
        type: REMOVE_LIKE,
        id
    }
}

export function addShop(info) {
    return {
        type: ADD_SHOP,
        info
    }
}

export function removeShop(id) {
    return {
        type: REMOVE_SHOP,
        id
    }
}