import CartWidget from './CartWidget'


export const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <li>Home</li>
                <li>Album</li>
                <li>Accesorios</li>
            </ul>

        </nav>
            <CartWidget />
        </>
    )
}

export default NavBar