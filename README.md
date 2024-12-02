# JSON-TO_HTML Library

Easy-to-use JS library to render JSON config to HTML

## Installation

Install dependencies using ``npm`` package manager.
```bash
npm install
```
Run project 
```bash
npm run dev
``` 


## Usage

```ts
const config: ConfigType = {
    tag: 'div',
    props: {
        className: 'wrapper collapse',
        children: [
            {
                tag: 'input',
                props: {
                    type: 'checkbox',
                    id: 'collapse-section1',
                    checked: 'checked',
                }
            },
            {
                tag: 'label',
                props: {
                    for: 'collapse-section1',
                    ariaHidden: 'true',
                    content: 'Collapse section'
                }
            },
            {
                tag: 'div',
                props: {
                    children: [
                        {
                            tag: 'div',
                            props: {
                                children: [
                                    {
                                        tag: "b",
                                        props: {
                                            className: 'text',
                                            content: 'Hello world!',
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            tag: 'div',
                            props: {
                                className: 'tooltip',
                                ariaLabel: 'Tooltip text',
                                content: 'Hover over text to see tooltip'
                            }
                        },
                        {
                            tag: 'br'
                        },
                        {
                            tag: 'a',
                            props: {
                                href: 'http://onliner.by',
                                target: '_blank',
                                className: 'header',
                                id: 'header',
                                content: 'Click to see',
                            }
                        },
                        {
                            tag: 'progress',
                            props: {
                                value: 500,
                                max: 1000,
                                className: 'primary'
                            }
                        }
                    ]
                }
            }
        ]
    }
};

const parser = new Parser('#root', config);
parser.render();

// Update config (HTML will be automatically rerendered).
config.props = {
    children: [
        {
            tag: 'div',
            props: {
                children: [
                    {
                        tag: 'div',
                        props: {
                            content: `This content has been updated ${new Date().toLocaleDateString()}`
                        }
                    },

                    {
                        tag: 'a',
                        props: {
                            href: 'http://google.com',
                            target: '_blank',
                            className: 'header',
                            id: 'header',
                            content: 'Click to see [updated]',
                        }
                    },
                    {
                        tag: 'progress',
                        props: {
                            value: 500,
                            max: 1000,
                            className: 'primary'
                        }
                    }
                ]
            }
        }
    ]
}

parser.config = config;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)