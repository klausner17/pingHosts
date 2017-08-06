import DoPings from './DoPings';
import HostIterator from './iterator/HostIterator';
import UnidadeIterator from './iterator/UnidadeIterator';
import Unidade from './models/Unidade';

var HOSTS = require('./data/hosts.json')
var UNIDADESBT = require('./data/unidades.json')

var iterator = new UnidadeIterator(UNIDADESBT['unidades'] as Array<Unidade>);

var doPings = new DoPings(iterator);

doPings.pingAll();