import React, {useId} from 'react'

function Header() {
    const navItems = ["About", "Resume", "Portfolio", "Contact"]
    const navId = useId()
  return (
    <header>
        <nav id='nav' className='flex-col'>
            <ul className='flex-row nav-list'>
                {navItems.map(item => <li key={navId} className='nav-item'>{item}</li>)}
            </ul>
        </nav>
    </header>
  )
}

export default Header