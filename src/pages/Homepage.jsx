import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Homepage(){
    return(
       <div>
        <Hero Title={agbaPicker}/>
       
        {/* <Link to='/login' className='p-4 text-red-400 bg-green-500'>Go to Login page</Link> */}

       </div>
    )
}
export default Homepage;