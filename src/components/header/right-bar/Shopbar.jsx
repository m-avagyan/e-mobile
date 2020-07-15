import React from 'react'
import { FaTimes, FaShoppingBag } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Bar from './Bar';
import { removeShop } from '../../../redux/action';

export default function Shopbar({barStyle, changeShopbar}) {
    const dispatch = useDispatch();
    const shops = useSelector(state => state.states.shops);

    return (
        <div className='right-bar' style={barStyle}>
            <div className='right-bar-title'>
                <h4><FaShoppingBag /> Your shopping bag ({shops.length})</h4>
                <button type='button' className='btn' onClick={changeShopbar}>
                    <FaTimes />
                </button>
            </div>
            <div className='right-bar-container'>
                {!shops.length ? <h3>Your shopping bag is empty</h3> :
                    shops.map(shop =>
                        <Bar
                            phone={shop.item}
                            key={shop.item.id}
                            closeBar={changeShopbar}
                            remove={() => dispatch(removeShop(shop.item.id))}
                            count={`x ${shop.count}`}
                        />
                    )
                }
            </div>
        </div>
    )
}
