import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ClientRowStyles.css";
import ClientCard from './ClientCard';
import { clientData , responsive} from './ClientData';
import { Link } from 'react-router-dom';


function ClientRow() {

    const event = clientData.map((item, index) => (
        <ClientCard key={index} name={item.name} url={item.imgurl} />
    ));

    
    return (<>

        <div className="client-section">
            
            <hr />
            <Link to="/"><h3 className='client-title'>Our Prominent Clients</h3></Link>
            <hr />
            <Carousel responsive={responsive}>
                {event}
            </Carousel>
            
        </div>


    </>
    )
}

export default ClientRow;