import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Food Ordering App</title>
            <style>{`
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f8f9fa;
                    color: #212529;
                }
                header {
                    background-color: orange;
                    color: white;
                    padding: 20px;
                    text-align: center;
                }
                header h1 {
                    margin: 0;
                    font-size: 2rem;
                }
                nav {
                    background-color: #0056b3;
                    padding: 10px 0;
                }
                nav ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                nav li {
                    display: inline;
                }
                nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    padding: 10px 20px;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                nav a:hover {
                    background-color: #ffd700;
                    color: #0056b3;
                }
                main {
                    padding: 20px;
                    min-height: 80vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                footer {
                    text-align: center;
                    padding: 10px;
                    background-color: #333;
                    color: white;
                    position: relative;
                }
            `}</style>
        </head>
        <body>
        <header>
            <h1>Cafetaria</h1>
        </header>
        <nav>
            <ul>
                <li><Link href="/users"><a>Customers</a></Link></li>
                <li><Link href="/users/add"><a>Add New Customer</a></Link></li>
                <li><Link href="/menu_items"><a>Menu Items</a></Link></li>
                <li><Link href="/orders"><a>Orders</a></Link></li>
                <li><Link href="/orders/add"><a>Add Order</a></Link></li>
                <li><Link href="/restaurants"><a>Restaurants</a></Link></li>

            </ul>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <p>© 2024 Food Ordering App. All Rights Reserved.</p>
        </footer>
        </body>
        </html>
    );
}
