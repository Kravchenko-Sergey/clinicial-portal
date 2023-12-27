import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from 'react-redux'
import { store } from '@/services'
import './index.module.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
