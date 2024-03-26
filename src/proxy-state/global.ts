import { proxy } from "valtio";

export const leftSideBarProxy = proxy<{
  sidebarLeft: boolean;
}>({ sidebarLeft: false });
