import '../../App.css'
import { HashLink } from 'react-router-hash-link';

const bookkeeping = () => {
    return (
      <div>
        <HashLink to="/services#bookkeeping">Link to Hash Fragment</HashLink>
            This is the bookkeeping Component

        </div>
    )
}



export default bookkeeping;