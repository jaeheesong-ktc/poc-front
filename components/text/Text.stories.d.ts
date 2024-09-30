import { TextProps } from './Text.types.ts';
declare const meta: {
    argTypes: {
        color: {
            control: string;
        };
        variant: {
            control: {
                options: string[];
                type: string;
            };
        };
        align: {
            control: {
                options: string[];
                type: string;
            };
        };
    };
    component: React.FunctionComponent<TextProps>;
    title: string;
    tags: string[];
};
export default meta;
export declare const Default: {
    args: {
        color: string;
        variant: string;
        text: string;
        align: string;
    };
};
