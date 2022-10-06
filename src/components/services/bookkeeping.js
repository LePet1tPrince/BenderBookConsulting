import '../../App.css'
import { NavHashLink } from 'react-router-hash-link';

const bookkeeping = () => {
    return (
      <div>
        <NavHashLink to="/services#bookkeeping">Link to Hash Fragment</NavHashLink>
            This is the bookkeeping Component

        </div>
    )
}



export default bookkeeping;