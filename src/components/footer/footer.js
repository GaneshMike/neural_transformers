import './footer.scss';

function Footer() {
    return (
        <>
            <div className="transformers-footer">
                Copyright &#169; 2023 Neural Transformers AI | All Rights Reserved
                <div className="connect-with-us">                    
                    <a href="https://www.instagram.com/transformers_ai/" target="_blankl"><i className='fa fa-instagram'></i></a>
                    <a href="https://www.youtube.com/@Transformers_ai" target="_blankl"><i className='fa fa-youtube'></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100091802811772&mibextid=ZbWKwL" target="_blankl"><i className='fa fa-facebook'></i></a>                    
                    <a href="https://linkedin.com/company/transformers-ai/" target="_blankl"><i className='fa fa-linkedin'></i></a>
                    <a href="https://twitter.com/Transformers_ai" target="_blankl"><i className='fa fa-twitter'></i></a>
                </div>
            </div>            
        </>
    )
}

export default Footer;