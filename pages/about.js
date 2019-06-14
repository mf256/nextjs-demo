import Link from 'next/link';
import Navar from '../components/Navbar';

export default () => (
  <div>
  <Navar/>

  <div> About </div>
  <p>Demo next.js application.</p>

  <Link href="/"><button>Go back</button></Link>
  </div>
);