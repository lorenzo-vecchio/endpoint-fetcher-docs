const Badge = ({ children }: { children: React.ReactNode }) => (
    <span
        style={{
            marginLeft: '8px',
            padding: '2px 8px',
            fontSize: '11px',
            fontWeight: '600',
            borderRadius: '12px',
            border: '1.5px solid #22c55e',
            color: '#22c55e',
            backgroundColor: 'transparent',
        }}
    >
        {children}
    </span>
);

export default {
    index: "Getting Started",
    basic_usage: "Basic Usage",
    groups: "Groups & Organization",
    hooks: "Hierarchical Hooks",
    configuration: "Configuration",
    error_handling: "Error Handling",
    typescript_types: "TypeScript Types",
    custom_handlers: "Custom Handlers",
    advanced_examples: "Advanced Examples",
    api_reference: "API Reference",
    faq: "FAQ & Troubleshooting",
    plugins: {
        title: (
            <span>
                Plugins <Badge>New</Badge>
            </span>
        ),
        theme: {
            collapsed: true,
        }
    },
}