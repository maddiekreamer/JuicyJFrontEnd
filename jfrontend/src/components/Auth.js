import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'wjoey13.auth0.com',
        clientID: '14S57jWfYQ2zdYZtC03aBZWyRV3SOWw6',
        redirectUri: 'http://localhost:3000/Client',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}