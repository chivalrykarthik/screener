import { useState } from 'react';
import { Details } from './Style'
import Tooltip from './Tooltip';
const Flyout = () => {
    const [isOpen, setOpen] = useState(false);
    const openToolTip = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <Details onClick={openToolTip}>View Details</Details>
            {
                isOpen ? <Tooltip className={isOpen ? 'animate' : ''} /> : null
            }
        </>
    )
}

export default Flyout;