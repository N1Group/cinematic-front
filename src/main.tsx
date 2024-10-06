import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import RouterPage from './Router/RouterPage';
import { QueryClientProvaders } from './provader/QueryClientProvader';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvaders>
			<RouterPage />
		</QueryClientProvaders>
	</React.StrictMode>
);
