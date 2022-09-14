/// <reference path="../../../.vscode.js"/>

import { RouterBuilder } from "@de.pinuts.apirouter/shared/routing.es6";

/**
 * @param {string} token 
 * @param {HttpRequest} req 
 * @param {HttpResponse} res 
 */
const requireAccessToken = (token, req, res) => {
    
}

de.pinuts.tutorialController = new RouterBuilder()
    .requireBearerToken(requireAccessToken)
    .get('/hello', (req, res) => {
        res.json({
            msg: 'Hello world!',
            params: req.params,
            headers: req.headers,
        });
    })

    .build();
