import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar(){
    return <nav className="nav">
    <Link to="/" className="site-title">Magic Fan Site</Link>
        <ul>
            <CustomLink to="/Information">About Page</CustomLink>
            <CustomLink to="/MyForm">Find a card</CustomLink>
            <CustomLink to="/UserDeck">Your Deck</CustomLink>
        </ul>
    </nav>
}

function CustomLink( { to, children, ...props } ) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}