export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    id:string;
    children:RouteInfo[]
}
