import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CreateContextProvider } from './context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<CreateContextProvider>
			<App />
		</CreateContextProvider>
	</BrowserRouter>
);
