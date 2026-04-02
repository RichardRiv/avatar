import { ReactComponent as ReactLogo } from '../../assets/logos/react-svgrepo-com.svg';
import { ReactComponent as DotNetLogo } from '../../assets/logos/dotnet-svgrepo-com.svg';
import { ReactComponent as MSSQLLogo } from '../../assets/logos/msql-server-svgrepo-com.svg';
import { ReactComponent as HtmlLogo } from '../../assets/logos/html-5.svg';
import { ReactComponent as CssLogo } from '../../assets/logos/css-3.svg';
import { ReactComponent as JavaScriptLogo } from '../../assets/logos/javascript.svg';
import { ReactComponent as TypeScriptLogo } from '../../assets/logos/typescript-icon.svg';
import { ReactComponent as GitLogo } from '../../assets/logos/git-icon.svg';
import { ReactComponent as JavaLogo } from '../../assets/logos/java.svg';
import { ReactComponent as CSharpLogo } from '../../assets/logos/c-sharp.svg';
import { ReactComponent as CPlusPlusLogo } from '../../assets/logos/c-plusplus.svg';
import { ReactComponent as PythonLogo } from '../../assets/logos/python.svg';
import { ReactComponent as SassLogo } from '../../assets/logos/sass.svg';
import { ReactComponent as TailwindLogo } from '../../assets/logos/tailwindcss-icon.svg';
import { ReactComponent as SpringLogo } from '../../assets/logos/spring-icon.svg';
import { ReactComponent as JQueryLogo } from '../../assets/logos/jquery-icon.svg';
import { ReactComponent as FirebaseLogo } from '../../assets/logos/firebase-icon.svg';
import { ReactComponent as MongodbLogo } from '../../assets/logos/mongodb-icon.svg';
import { ReactComponent as WordpressLogo } from '../../assets/logos/wordpress-icon-alt.svg';
import { ReactComponent as VscodeLogo } from '../../assets/logos/visual-studio-code.svg';
import { ReactComponent as VsLogo } from '../../assets/logos/visual-studio.svg';
import { ReactComponent as IntellijLogo } from '../../assets/logos/intellij-idea.svg';

import { useState } from 'react';
import './styles.css';
import Card from '../../components/Card';

const favoriteStack = [
	{
		id: 0,
		Logo: ReactLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
		classname: 'logo',
	},
	{
		id: 1,
		Logo: DotNetLogo,
		gradient: 'linear-gradient(135deg, #512bd4 0%, #7b3ff2 100%)',
		classname: 'logo',
	},
	{
		id: 2,
		Logo: MSSQLLogo,
		gradient: 'linear-gradient(135deg, #CC2927 0%, #E74C3C 100%)',
		classname: 'sql-logo',
	},
];

const techUsed = [
	{
		id: 0,
		logo: HtmlLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 1,
		logo: CssLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 3,
		logo: JavaScriptLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 4,
		logo: TypeScriptLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 5,
		logo: GitLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 6,
		logo: JavaLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 7,
		logo: CSharpLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 8,
		logo: CPlusPlusLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 9,
		logo: PythonLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 10,
		logo: SassLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 11,
		logo: TailwindLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 12,
		logo: SpringLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 13,
		logo: JQueryLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 14,
		logo: FirebaseLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 15,
		logo: MongodbLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 16,
		logo: WordpressLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 17,
		logo: VscodeLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 18,
		logo: VsLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
	{
		id: 19,
		logo: IntellijLogo,
		gradient: 'linear-gradient(135deg, #20232a 0%, #282c34 100%)',
	},
];

export const FavoriteStack = () => {
	return (
		<>
			<div className="row-2-items">
				{favoriteStack.map((favStack) => (
					<Card key={favStack.id} gradient={favStack.gradient}>
						<favStack.Logo className={favStack.classname} />
					</Card>
				))}
			</div>
		</>
	);
};

export const TechStack = ({ desktop }) => {
	const [expanded, setExpanded] = useState(false);
	const visible = desktop && !expanded ? techUsed.slice(0, 8) : techUsed;

	return (
		<>
			<div className={`row-3-items ${expanded ? 'expand' : ''}`}>
				{visible.map((tech) => (
					<Card key={tech.id} gradient={tech.gradient}>
						<tech.logo className="logo" />
					</Card>
				))}
			</div>
			{desktop && !expanded && (
				<button
					className="row-3-items-see-more"
					onClick={() => setExpanded(true)}
				>
					See more!
				</button>
			)}
		</>
	);
};
