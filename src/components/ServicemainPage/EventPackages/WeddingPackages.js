import React, {useState} from 'react';
import { useCollapse } from 'react-collapsed';
// import {IoIosStar} from "react-icons/io";

const WeddingPackages = ({item}) => {

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <>
      <div className="wedding-card">
        <div className="wedding-title">
            <p>{item.title}</p>
        </div>
        <div className="wedding-details">
            <p>{item.singleline}</p>
            <div className="wedding-tag">
                <p>{item.tag}</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
                <li>{item.paraOne}</li>
                <li>{item.paraTwo}</li>
                <li {...getCollapseProps()}>{item.show}</li>
            </ul>
        </div>
       
        <button className="read-button"
            {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
        >
            {isExpanded ? 'Show Less' : 'Read More'}
        </button>
    </div>
    </>
  )
}

export default WeddingPackages;
