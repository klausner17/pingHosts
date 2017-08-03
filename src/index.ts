import PingHosts from './PingHosts';
const HOSTS = require('./data/hosts.json');

var pingHosts = new PingHosts(HOSTS['hosts']);
pingHosts.pingAllHosts();