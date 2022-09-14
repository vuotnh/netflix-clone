export interface ISidebar {
    icon?: string;
    iconActive?: string;
    name?: string;
    class?: string;
    active?: boolean;
    to?: string;
    pageName?: string;
    badge?: number | string;
}

export interface IFile {
    id: number;
    name: string;
    url: string;
}