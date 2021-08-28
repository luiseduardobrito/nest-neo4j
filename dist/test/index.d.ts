import { Node, Relationship } from 'neo4j-driver-core';
export declare const nodeId: () => import("neo4j-driver-core/types/integer").default;
export declare const mockNode: (labels: string | string[], properties?: object) => Node;
export declare const mockRelationship: (type: string, properties: object, start?: Node, end?: Node) => Relationship;
export declare const mockResult: (rows: object[]) => {
    records: {
        keys: string[];
        get: (key: string) => any;
    }[];
};
