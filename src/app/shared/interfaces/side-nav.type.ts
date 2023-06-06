export interface SideNavInterface {
    path: string;
    params: Object;
    title: string;
    iconType: "" | "nzIcon" | "fontawesome";
    iconTheme: "" | "fab" | "far" | "fas" | "fill" | "outline" | "twotone";
    icon: string,
    submenu : SideNavInterface[];
}
