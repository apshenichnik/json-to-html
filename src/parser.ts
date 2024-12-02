import {ConfigType} from "./models/config.type.ts";
import {camelToKebab} from "./utils.ts";

export const ContentProps = ['content'];
export const ClassProps = ['className'];
export const ChildrenProps = ['children'];

export interface ParserConfig {
    update: boolean
}

export class Parser {
    public root: Element | null | undefined;
    private _config: ConfigType = null;

    constructor(rootElement: string, config: ConfigType, private options: ParserConfig = {update: true}) {
        try {
            this._config = config;
            this.root = document.querySelector(rootElement);
        } catch (error) {
            console.error(error);
        }
    }

    public render(): void {
        const element = this.createHtmlElement(this.config);
        this.root?.replaceChildren(element);
    }

    public updateWith(config: ConfigType): void {
        this.config = config;
        this.render();
    }

    public update(): void {
        this.render();
    }

    private createHtmlElement({tag, props = {}}: ConfigType): HTMLElement {
        const element = document.createElement(tag);
        const attributeKeys = Object.keys(props)
            .filter(k => ![ChildrenProps, ContentProps, ClassProps].flat().includes(k));

        if (props) {
            for (const [key, value] of Object.entries(props)) {
                attributeKeys.includes(key) && element.setAttribute(camelToKebab(key), value as string);

                if (ContentProps.includes(key)) {
                    element.innerText = value as string;
                }

                if (ClassProps.includes(key)) {
                    element.classList.add(...(value as string).split(' '));
                }

                if (ChildrenProps.includes(key)) {
                    (value as Array<ConfigType>).map(c => element.appendChild(this.createHtmlElement(c)));
                }
            }
        }

        return element;
    }

    get config(): ConfigType {
        return this._config;
    }

    set config(config: ConfigType) {
        this._config = config;
        if (this.options.update) {
            this.update();
        }
    }

}