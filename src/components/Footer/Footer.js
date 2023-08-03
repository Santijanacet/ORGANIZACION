import "./Footer.css"

const Footer = () =>{
    return <footer className='footer'style={{ backgroundImage: "url(/image/footer.png)" }}>
        
    <div className='redes'>
        <a href='https://www.facebook.com/santiago.janacet'>
            <img src="/image/facebook.png" alt='Facebook' />
        </a>
        <a href='https://twitter.com/SantiagoJanace1'>
            <img src="/image/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/santi_janacet/'>
            <img src="/image/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/image/Logo.png' alt='org' />
    <strong>Desarrollado por Santiago Janacet 2023</strong>
</footer>
}

export default Footer;