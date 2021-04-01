declare module "gatsby-plugin-dark-mode";
declare module "gatsby-plugin-config";
declare module "react-body-classname";

declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.png";
