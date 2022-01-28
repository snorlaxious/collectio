export interface ItemType {
    id: number;
    attr?: string[];
}

export interface CollectionType {
    id: number;
    items?: ItemType[];
}
