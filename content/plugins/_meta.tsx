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
    '---': {
        type: 'separator',
        title: 'Official Plugins',
    },
    cache_plugin: "Cache Plugin",
    retry_plugin: "Retry Plugin",
    auth_plugin: {
        title: (
            <span>
                Auth Plugin <Badge>New</Badge>
            </span>
        ),
    },
}
