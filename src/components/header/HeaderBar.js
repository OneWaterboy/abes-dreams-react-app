import SocialMediaLinks from './SocialMedia';
import SiteTitle from './SiteTitle';

function HeaderBar () {
    return (
        <div id="topBar">
            <SiteTitle />
            <SocialMediaLinks />
        </div>
    );
}

export default HeaderBar;