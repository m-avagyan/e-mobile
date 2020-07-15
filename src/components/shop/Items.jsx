import React, {useState, useEffect} from 'react'
import ItemsTop from './ItemsTop'
import { useSelector } from 'react-redux'
import Item from './Item';
import Pagination from './Pagination';

export default function Items() {
    const [itemRow, setItemRow] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemsPage, setItemsPage] = useState({
        indexFrom: 0,
        indexTo: 12
    });
    const items = useSelector(state => state.states.searchRes);

    useEffect(() => {
        const itemStyle =  window.localStorage.getItem('styleItem');
        itemStyle === 'row' ? setItemRow(true) : setItemRow(false);
        setIsLoaded(true);
    }, [isLoaded]);

    const changeItemStyle = (row) => {
        setIsLoaded(false);
        setItemRow(row);
        row ? window.localStorage.setItem('styleItem', 'row')
        : window.localStorage.setItem('styleItem', 'table');
    }

    const changeItemsPage = (n) => {
        setItemsPage({
            indexFrom: n * 12,
            indexTo: (n + 1) * 12
        })
        scrollTop()
    }

    const controlItemsPage = (n) => {
        if(itemsPage.indexTo === 12) {
            if(n === 12) {
                setItemsPage({
                    indexFrom: itemsPage.indexFrom + n,
                    indexTo: itemsPage.indexTo + n
                })
                scrollTop()
            }
        }else if(itemsPage.indexTo >= items.length) {
            if(n === -12) {
                setItemsPage({
                    indexFrom: itemsPage.indexFrom + n,
                    indexTo: itemsPage.indexTo + n
                })
                scrollTop()
            }
        }else {
            setItemsPage({
                indexFrom: itemsPage.indexFrom + n,
                indexTo: itemsPage.indexTo + n
            })
            scrollTop()
        }
    }

    function scrollTop() {
        setTimeout(function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;   
        }, 250)
    }

    return (
        <div className='items-container'>
            <ItemsTop
                items={items}
                changeItemStyle={changeItemStyle}
                itemRow={itemRow}
                indexTo={itemsPage.indexTo}
            />
            {!isLoaded ? <h1 className='items-loading' >Loading...</h1> :
            <div className='items'>
                {
                    !items.length ? <h2 className='error-items'>No products found</h2> :
                    items.map((item, index) =>
                        index >= itemsPage.indexFrom && index < itemsPage.indexTo &&
                        <Item
                            item={item}
                            key={item.id}
                            itemClass={itemRow ? 'item-row' : 'item'} 
                        />
                    )
                }
                {items.length > 12 && 
                    <Pagination items={items} indexTo={itemsPage.indexTo} changeItemsPage={changeItemsPage} controlItemsPage={controlItemsPage} /> 
                }
            </div>}
        </div>
    )
}
