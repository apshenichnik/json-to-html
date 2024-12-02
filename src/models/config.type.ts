export type StringKeyedObject = {
    [key: string]: any;
}

export type ConfigItemPropsType = StringKeyedObject & {
    className?: string;
    content?: string;
    children?: Array<ConfigType>;
};

export type ConfigType = {
    tag: keyof HTMLElementTagNameMap,
    props?: ConfigItemPropsType
};