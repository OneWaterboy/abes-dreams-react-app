import SiteLogo from '../../media/expectation.png';

function SiteTitle(){
    return (
        <div className="site-title">
            <img id="siteLogo" src={SiteLogo} />
            <p className="title-text">Abe's Dreams</p>
        </div>
    )
}

export default SiteTitle;