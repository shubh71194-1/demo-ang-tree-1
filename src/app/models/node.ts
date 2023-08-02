export type NodeType =
    "project" | "module" | "file";

export interface Node {
    uri: string;
    name: string;
    type: NodeType;
    children?: Node[];
}

export interface Project {
    name: string;
    uri: string;
}
