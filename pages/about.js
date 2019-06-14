import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout>
  <div class="container">
    <h3 class="row justify-content-center"> About </h3>
  
    <p class="row justify-content-center">This is example of next.js application.</p>

    <div class="row justify-content-center">
    <Link href="/">
      <button>Go back</button>
    </Link>
    </div>
  </div>
  </Layout>
);