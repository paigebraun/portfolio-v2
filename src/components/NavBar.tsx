import asterisk from '../assets/Asterisk.svg'

type projectLinksType = {
    name: string,
    href: string
}

const projectLinks : projectLinksType[] = [
    {name: 'streamer', href: '/'},
    {name: 'mortgage fee estimator', href: '/'},
    {name: 'cool links', href: '/'},
    {name: 'to do list', href: '/'},
    {name: 'jazzberry blue maps', href: '/'},
    {name: "fafnir's dragon", href: '/'},
    {name: 'library', href: '/'}
]

function NavBar() {
    return (
        <nav className='text-xs'>
            <ul className='flex flex-col gap-1 transition-all fixed'>
                <li className='flex gap-1'>
                    <img className='w-3' src={asterisk} alt='asterisk svg' />
                    <a href='/' className='text-lg'>Paige Braun</a>
                </li>
                <li>
                    <div className='h-4'></div>
                </li>
                {projectLinks.map((project) => {
                    return (
                        <li key={project.name}> 
                            <a className='hover:text-lime-300' href={project.href}>{project.name}</a>
                        </li>
                    );
                })}
                
                <li>
                    <div className='h-8'></div>
                </li>
                <li>
                    <a className='hover:text-gray-300' href='/'>about</a>
                </li>
                <li>
                    <div className='h-8'></div>
                </li>
                <li>
                    <a className='hover:text-gray-300' href='/'>photo</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;