import React, { memo, forwardRef,  useImperativeHandle} from 'react';
let i = 0;
const Test = memo(forwardRef(({text}, ref) => {
    const number = Math.random();
    useImperativeHandle(ref, () => ({
        getData: () => {
            return number;
        }
    }));
    return (
        <div>
            {text}
            {number}
            <div>
                {i++}
            </div>
        </div>
    );
}));

export default Test;