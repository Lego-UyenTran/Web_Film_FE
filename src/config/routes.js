//cau hinh
const routes = {
    account:
        'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fxemphim.club%3Fid%3Dauth844132&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=65878707302-ms7giag9ldgpehf69allsv8qcokh38mm.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fxemphim.club&prompt&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow',
    casts: '/casts/:id',
    collection: '/collection',
    home: '/',
    hotmovie: '/hotmovie',
    newmovie: '/newmovie',
    moviedetails: '/moviedetails/:id',
    login: '/login',
    oddmovie: '/oddmovie',
    register: '/register',
    search: '/search',
    seriesmovie: '/seriesmovie',
    settings: '/setting', //setting accoount
    user: '/user',
    watching: '/watching/:id',
};

export default routes;
