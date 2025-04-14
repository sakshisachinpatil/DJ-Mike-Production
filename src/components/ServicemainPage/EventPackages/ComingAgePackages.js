import React, {useState} from 'react';
import { useCollapse } from 'react-collapsed';


const ComingAgePackages = ({item}) => {

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <>
      <div className="comingage-card">
        <div className="comingage-title">
            <p>{item.title}</p>
        </div>
        <div className="comingage-details">
            <p>{item.singleline}</p>
            <div className="comingage-tag">
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

export default ComingAgePackages;
