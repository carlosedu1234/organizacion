import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href="https://www.facebook.com/carlos.riano.900">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/CarlosE00242522'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href="https://carlosedu1234.github.io/Repositorio/index.html">
                <img src="/img/folder.png" alt='folder' />
            </a>
            <a href="https://github.com/carlosedu1234">
                <img src="/img/github.png" alt='github' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Carlos</strong>
    </footer>
}

export default Footer