import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
  <div className="container">
    <h3 className="row justify-content-center"> Welcome to demo application! </h3>
    <br/>
    <Prices bpi={props.bpi}></Prices>

  </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}
export default Index;