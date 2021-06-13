export interface FlowerCreation {
    nome: string;
    grupo: string;
    tipo: string;
    tamanho: string;
}

export interface Flower extends FlowerCreation {
    id: number;
}

export interface Count {
    totalCount: number;
}

export interface FlowerListItemProps {
    flower: Flower;
}