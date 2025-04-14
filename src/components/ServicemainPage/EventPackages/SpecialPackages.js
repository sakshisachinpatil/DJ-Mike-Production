import React, {useState} from 'react';
import { useCollapse } from 'react-collapsed';
// import {IoIosStar} from "react-icons/io";

const SpecialPackages = ({item}) => {

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <>
      <div className="special-card">
        <div className="special-title">
            {/* <IoIosStar size={25} style={{color:"white", alignItems:"center"}}/> */}
            <p>{item.title}</p>
        </div>
        <div className="special-details">
            <p>{item.singleline}</p>
            <div className="special-tag">
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

export default SpecialPackages;
