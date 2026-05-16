import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './ThemeContext'
import Navbar from './Navbar'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

function Layout() {
    const { dark } = useTheme()

    return (
        <div className={`min-h-screen transition-colors duration-500 ${dark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
            <Navbar />
            <main className="pt-28">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                        path="*"
                        element={
                            <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
                                <p className="font-mono text-blue-400 text-sm mb-4">// 404</p>
                                <h1 className="text-6xl font-black mb-4">Page Not Found</h1>
                                <a href="/" className="text-blue-500 hover:text-blue-400">Go Home</a>
                            </div>
                        }
                    />
                </Routes>
            </main>
            <footer className={`text-center py-8 font-mono text-xs border-t ${dark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
                Built by Mohammad Ali — RCOEM Nagpur — 2026
            </footer>
        </div>
    )
}

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App