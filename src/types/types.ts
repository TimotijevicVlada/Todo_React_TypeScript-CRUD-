export type TodosProps = {
    id: number;
    title: string;
    description: string;
    date: string;
    completed: boolean;
}

export type CreateProps = {
    todos: TodosProps[];
    setTodos: (todos: TodosProps[]) => void;
    setCreateFormVisible: (openForm: boolean) => void;
}

export type ValidationProps = {
    title?: string;
    description?: string;
    date?: string;
}

export type DeleteProps = {
    itemForDeleting: TodosProps[];
    todos: TodosProps[];
    setTodos: (todos: TodosProps[]) => void;
    setDeleteWindowVisible: (windowOpened: boolean) => void;
}

export type DetailsProps = {
    detailsItem: TodosProps[];
    setDetailsVisible: (detailsWindow: boolean) => void;
}

export type MotivateMessage = {
    author: string;
    quote: string;
}

export type MotivateProps = {
    motivateMsg: MotivateMessage[];
}

export type MessagesProps = {
    author: string;
    quote: string;
}

export type TodoProps = {
    todos: TodosProps[];
    setTodos: (todos: TodosProps[]) => void;
    setItemForUpdate: (todos: TodosProps[]) => void;
    setUpdateFormVisible: (formVisible: boolean) => void;
}

export type UpdateProps = {
    todos: TodosProps[];
    itemForUpdate: TodosProps[];
    setTodos: (todos: TodosProps[]) => void;
    setUpdateFormVisible: (formVisible: boolean) => void;
}