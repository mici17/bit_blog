import React from 'react'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; BIT {new Date().getMonth() + 1}{new Date().getFullYear()}  </p>
        </footer>
    )
}

export { Footer }