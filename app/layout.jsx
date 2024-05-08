import "@styles/globals.css";

export const metadata = {
  title: 'Phyo Nyi Nyi Paing Portfolio',
  description: 'Portfolio for Paul',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
