import Link from 'next/link';

const links = [
    {url:"/", nombre:"Home"},
    {url:"/calc", nombre:"Calculadora"}
]
export default () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">NEXT - REACT</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {
                    links.map(link=>{
                        return (
                            <li key={link.url}>
                                <Link href={link.url}><a>{link.nombre}</a></Link>>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </nav>
)
