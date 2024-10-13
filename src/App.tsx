import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouterPage from './modules/RouterPage/RouterPage';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RouterPage />
		</QueryClientProvider>
	);
};

export default App;
