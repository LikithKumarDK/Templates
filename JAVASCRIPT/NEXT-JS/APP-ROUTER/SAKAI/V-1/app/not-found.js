export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
            textAlign: 'center',
            flexDirection: 'column',
        }}>
            <h2 style={{ margin: 0 }}>Not Found</h2>
            <p style={{ margin: '1rem 0 0 0' }}>Could not find requested resource</p>
        </div>
    )
}