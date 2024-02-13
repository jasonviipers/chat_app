export type User = {
    id: string;
    name: string;
    image: string;
    status?: string;
};

export type Message = {
    id: string;
    user: User;
    content: string;
    createdAt: string;
};

export type Chat = {
    id: string;
    users: User[];
    lastMessage: Message;
};

export type Calls = {
    id: string;
    user: User;
    content: string;
    createdAt: string;
};

export type Tab = {
    name: string;
    icon: string;
    title: string;
};