import { Link } from 'react-router-dom'
import { useState } from 'react';
import asterisk from '../assets/Asterisk.svg'
import projectInfo from '../modules/projectInfo';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='text-xs mb-4'>
            <ul className='flex justify-between md:items-start items-center md:flex-col md:gap-1 transition-all md:fixed '>
                <li className='flex gap-1 md:mb-4'>
                    <img className='w-3' src={asterisk} alt='asterisk svg' />
                    <a href='/' className='text-lg'>Paige Braun</a>
                </li>
                {projectInfo.map((project) => {
                    return (
                        <li key={project.name}> 
                            <Link to={`/${project.id}`} className='hidden md:block hover:text-lime-300'>{project.name}</Link>
                        </li>
                    );
                })}
                
                <li>
                    <div className='md:h-8'></div>
                </li>
                <li>
                    <Link to="/about" className='hidden md:block hover:text-gray-300'>about</Link>
                </li>
                <li>
                    <div className='md:h-8'></div>
                </li>
                
                <li>
                    <Link to="/photo" className='hidden md:block hover:text-gray-300'>photo</Link>
                </li>
                {/* Dropdown menu for mobile view */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-neutral-950 text-lg">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </ul>
            {isMenuOpen && (
                <ul className='md:hidden flex flex-col gap-2 mb-4 mt-4'>
                    {projectInfo.map((project) => (
                        <li key={project.name}>
                            <Link to={`/${project.id}`} className='hover:text-lime-300' onClick={toggleMenu}>{project.name}</Link>
                        </li>
                    ))}
                    <li>
                        <div className='h-4'></div>
                    </li>
                    <li>
                        <Link to="/about" className='hover:text-gray-300' onClick={toggleMenu}>about</Link>
                    </li>
                    <li>
                        <div className='h-4'></div>
                    </li>
                    <li>
                        <Link to="/photo" className='hover:text-gray-300' onClick={toggleMenu}>photo</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar;