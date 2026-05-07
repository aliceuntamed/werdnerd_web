import { Button } from './Button';
const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: 'Button',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};
export const Large = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};
export const Disabled = {
    args: {
        disabled: true,
        children: 'Disabled',
    },
};
