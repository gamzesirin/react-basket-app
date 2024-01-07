import './index.css'

import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<MantineProvider withGlobalStyles withNormalizeCSS>
		<App />
	</MantineProvider>
)
