"use strict";
global.XMLHttpRequest = require("xhr2");
import axios from "axios";

const ajaxSample = (url: string, req: XMLHttpRequest) => {
    req.onreadystatechange = function(_e){
        if(this.readyState != 4) return;
        if(this.status != 200) return;
        console.log(this.responseText);
    }
    req.open("GET", url, true);
    req.send(null);
};

const promiseSample = async(url: string, req: XMLHttpRequest) => {
    const promise = new Promise((resolve, reject) => {
        req.onreadystatechange = function (_e) {
            if(this.readyState != 4) return;
            switch (this.status) {
                case 200:
                    resolve(this.responseText);
                    break;
                default:
                    reject("Error");
            }
        }
        req.open("GET", url);
        req.send(null);
    })
    await promise.then((result) => console.log(result)).catch((error) => error);
}

const asyncAwaitSample = async (url: string, req: XMLHttpRequest) => {
    const result = await new Promise((resolve, reject) => {
        req.onreadystatechange = function (_e) {
            if(this.readyState != 4) return;
            switch (this.status) {
                case 200:
                    resolve(this.responseText);
                    break;
                default:
                    reject("Error");
            }
        }
        req.open("GET", url, true);
        req.send(null);
    })
    console.log(result);
}

const axiosSample = async (url: string) => {
    const result = await axios.get(url);
    const body = result.data;
    console.log(body);
}

const main = async () => {
    const URL = "https://example.com";
    const req = new XMLHttpRequest();
    console.warn("-------------------------ajaxSample-------------------------");
    await ajaxSample(URL, req);
    console.warn("-------------------------promiseSample-------------------------");
    await promiseSample(URL, req);
    console.warn("-------------------------asyncAwaitSample-------------------------");
    await asyncAwaitSample(URL, req);
    console.warn("-------------------------axiosSample-------------------------")
    await axiosSample(URL);
}

main();
