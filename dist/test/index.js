"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockResult = exports.mockRelationship = exports.mockNode = exports.nodeId = void 0;
const neo4j_driver_1 = require("neo4j-driver");
const neo4j_driver_core_1 = require("neo4j-driver-core");
let _nodeId = 0;
let _relationshipId = 0;
exports.nodeId = () => {
    _nodeId++;
    return neo4j_driver_1.int(_nodeId);
};
exports.mockNode = (labels, properties = {}) => {
    return new neo4j_driver_core_1.Node(exports.nodeId(), Array.isArray(labels) ? labels : [labels], properties);
};
exports.mockRelationship = (type, properties, start, end) => {
    _relationshipId++;
    return new neo4j_driver_core_1.Relationship(neo4j_driver_1.int(_relationshipId), start instanceof neo4j_driver_core_1.Node ? start.identity : exports.nodeId(), end instanceof neo4j_driver_core_1.Node ? end.identity :
        exports.nodeId(), type, properties);
};
exports.mockResult = (rows) => {
    return {
        records: rows.map(row => ({
            keys: Object.keys(row),
            get: (key) => row.hasOwnProperty(key) ? row[key] : null,
        }))
    };
};
