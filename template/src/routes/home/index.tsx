import { h } from 'preact';
import style from './style.css';

const Home = () => {
	return (
		<div class={style.home}>
			<a href="https://preactjs.com">
				<img src="../../assets/preact-logo.svg" alt="Preact Logo" height="160" width="160" />
			</a>
			<a href="https://oracle.com/jet">
				<img src="../../assets/oraclejet-logo.svg" alt="Oracle JET Logo" height="160" width="160" />
			</a>
			<h1>Get Started Building Preact with Oracle JavaScript Extension Toolkit(JET)</h1>
			<section>
			<Resource
					title="Learn Oracle JET"
					description="Learn more about Oracle JavaScript Extension Toolkit(JET) and the oraclejet-preact offering"
					link="https://oracle.com/jet/"
				/>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					link="https://preactjs.com/tutorial/"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, check out our docs for where Preact differs"
					link="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Preact-CLI"
					description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
					link="https://github.com/preactjs/preact-cli#preact-cli--"
				/>
			</section>
		</div>
	);
};

interface ResourceProps {
	title: string;
	description: string;
	link: string;
}

const Resource = (props: ResourceProps) => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
