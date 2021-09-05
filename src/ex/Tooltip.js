import { useState } from 'react';
import { ToolTip, Title } from './Style'

const ToolTipCmp = ({ className }) => {
    const [cl, setCl] = useState(true);
    const handleClose = () => {
        setCl(!cl);
    }
    return (
        <>
            <ToolTip className={className} >
                <span onClick={handleClose} >Close</span>
                <Title>Product1</Title>
                <p>$1</p>
                <p>Sample description Sample description </p>
                <p>Sample description Sample description </p>
            </ToolTip>
        </>
    )
}

export default ToolTipCmp;