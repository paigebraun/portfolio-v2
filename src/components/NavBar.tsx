import { Link } from 'react-router-dom'
import asterisk from '../assets/Asterisk.svg'
import projectInfo from '../modules/projectInfo';

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
                {projectInfo.map((project) => {
                    return (
                        <li key={project.name}> 
                            <Link to={`/${project.id}`} className='hover:text-lime-300'>{project.name}</Link>
                        </li>
                    );
                })}
                
                <li>
                    <div className='h-8'></div>
                </li>
                <li>
                    <Link to="/about" className='hover:text-gray-300'>about</Link>
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