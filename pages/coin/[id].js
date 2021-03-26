import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Coin = ({ coin, graph }) => {
  
  const graficaMoneda = [];

  graph.prices.map( (punto, index) => {
    const f = new Date(punto[0]);
    graficaMoneda[index]={
      0: f.getDate() + "/"+ f.getMonth()+ "/" +f.getFullYear(),
      1: punto[1].toFixed(1)
    }
  });

  console.log(graficaMoneda);

  return (
    <>
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>
            {`Actual: $ ${coin.market_data.current_price.usd}`}
          </p>
          <LineChart
            width={1200}
            height={600}
            data={graficaMoneda}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="0" />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Line type="monotone" dataKey="1" stroke="#2fffe5" activeDot={{ r: 6 }} />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  let [data, data2] = await Promise.all([
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then(response => response.json()),
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=15&interval=daily`).then(response => response.json()),
  ]);

  return {
    props: {
      coin: data,
      graph: data2,
    }
  };
}
