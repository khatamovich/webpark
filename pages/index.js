import { Fragment } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Layout from "../components/Layout";
import { DataContext } from "/store/DataContext";
import Head from "next/head";

const Home = ({ config }) => (
	<DataContext.Provider value={config}>
		<Layout>
			<Head>
				<title>Разработка сайтов и SMM продвижение в Ташкенте</title>
				<meta
					name="description"
					content="Разработка сайтов с помощью новейших технологии которые гарантируют высокую производительность и надежность, SMM продвижение..."
				/>
				<meta name="facebook-domain-verification" content="npsjklux8xsatqj8zvialbpe3t0nly" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<Hero />
			<Intro />
			<Partners />
			<Services />
		</Layout>
	</DataContext.Provider>
);

export const getStaticProps = async (props) => {
	return {
		props: {
			config: {
				service_id: process.env.EMAIL_SERVICE_ID,
				access_token: process.env.EMAIL_ACCESS_TOKEN,
			},

			revalidate: 60000,
		},
	};
};

export default Home;
