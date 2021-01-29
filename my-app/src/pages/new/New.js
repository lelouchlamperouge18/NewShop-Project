import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount
} from '../../features/counter/counterSlice';

export function New() {
    const count = useSelector(selectCount); 
    return (
        <div>
            NEW: {count}
        </div>
    )
}