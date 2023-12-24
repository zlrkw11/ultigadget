
import Bit from './containers/Bit'
import Bar from './containers/Bar'

import {useState} from 'react'


function App(){
    const [isExpanded, setIsExpanded] = useState(true)

    if (!isExpanded){
        //BIT
        return <Bit/>
    }else{
        //BAR
        return <Bar/>
    }
    
}
export default App