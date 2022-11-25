
export default function Navbar(){
    return <nav className="nav">
    <a href="/" className="site-title">Magic Fan Site</a>
        <ul>
            <CustomLink href="/Information">About Page</CustomLink>
            <CustomLink href="/MyForm">Find a card</CustomLink>
        </ul>
    </nav>
}


function CustomLink( { href, children, ...props } ) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}