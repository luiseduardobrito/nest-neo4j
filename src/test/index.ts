import { int } from 'neo4j-driver';
import { Node, Relationship, Result } from 'neo4j-driver-core';

let _nodeId = 0
let _relationshipId = 0

export const nodeId = () => {
  _nodeId++;
  return int(_nodeId)
}

export const mockNode = (labels: string | string[], properties: object = {}): Node => {
  return new Node(nodeId(), Array.isArray(labels) ? labels : [labels], properties)
}

export const mockRelationship = (type: string, properties: object, start?: Node, end?: Node): Relationship => {
  _relationshipId++;

  return new Relationship(
    int(_relationshipId),
    start instanceof Node ? start.identity : nodeId(),
    end instanceof Node ? end.identity :
      nodeId(), type, properties
  )
}

export const mockResult = (rows: object[]) => {
  return {
    records: rows.map(row => ({
      keys: Object.keys(row),
      get: (key: string) => row.hasOwnProperty(key) ? row[key] : null,
    }))
  }
}