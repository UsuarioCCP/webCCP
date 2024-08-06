import React, { useEffect } from 'react';

const loadFbSdk = () => {
    if (window.FB) {
        window.FB.XFBML.parse();
        return;
    }
    window.fbAsyncInit = function () {
        window.FB.init({
            xfbml: true,
            version: 'v10.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/es_ES/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};

const SocialMedia = () => {

    useEffect(() => {
        loadFbSdk();
    }, []);

    return (
        <div className="fb-page my-4 mx-1 shadow-2xl"
            data-href="https://www.facebook.com/p/Camara-de-Comercio-de-Pamplona-100071759633115/"
            data-tabs="timeline, events"
            data-width="450"
            data-height="600"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/p/Camara-de-Comercio-de-Pamplona-100071759633115/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/p/Camara-de-Comercio-de-Pamplona-100071759633115/">Camara de Comercio de Pamplona</a>
            </blockquote>
        </div>
    );
};

export { SocialMedia };
