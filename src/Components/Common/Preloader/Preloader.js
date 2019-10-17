import React from 'react'
import preloader from '../../../storage/images/loading-svgrepo-com.svg'


let Preloader = (props) => {
    return <div style={{width:'100px'}}>
        <img src={preloader} />
    </div>
}

export default Preloader