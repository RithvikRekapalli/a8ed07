export interface FormNode{
    id: string;
    fields: string[];

}

export interface FormEdge{
    source: string;
    target: string;

}

export interface FormGraph{
    nodes: FormNode[];
    edges; FormEdge[];

}
