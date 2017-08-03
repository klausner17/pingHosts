"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingHosts_1 = require("./PingHosts");
const HOSTS = require('./data/hosts.json');
var pingHosts = new PingHosts_1.default(HOSTS);
pingHosts.pingAllHosts();
