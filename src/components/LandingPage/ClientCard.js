import React from 'react';

function ClientCard(props) {
  return (<>

    <div>
        
        <div className="container">
          <img src={props.url} alt="client" className="client-image" />
        </div>
    
    </div>

  </>
  )
}

export default ClientCard;