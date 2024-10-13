import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouterPage from './Router/RouterPage';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RouterPage />
		</QueryClientProvider>
	);
};

export default App;
