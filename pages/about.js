import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout>
  <div className="container">
    <h3 className="row justify-content-center"> About </h3>
  
    <p className="row justify-content-center">This is example of next.js application.</p>

    <div className="row justify-content-center">
    <Link href="/">
      <button>Go back</button>
    </Link>
    </div>
  </div>
  </Layout>
);