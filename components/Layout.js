import Head from 'next/head';
import Navar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Demo!</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css"/>
        </Head>
        <Navar/>
        {props.children}
    </div>
);

export default Layout;