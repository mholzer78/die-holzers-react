import { Fragment, useState } from 'react';

import './App.scss';

import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';

const App = () => {
	let defaultLang = 0;

	if (navigator.language.substring(0, 2).toLowerCase() === 'de') {
		defaultLang = 1;
	}
    
	const [language, setLanguage] = useState(defaultLang);

	const switchLanguage = (e: any) => {
		setLanguage(+e.target.getAttribute('data-value'));
	};

	return (
		<Fragment>
			<Sidebar language={language} switchLang={switchLanguage}></Sidebar>
			<Content language={language}></Content>
		</Fragment>
	);
};

export default App;
