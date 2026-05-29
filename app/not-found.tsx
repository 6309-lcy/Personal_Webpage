export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-sm tracking-widest text-[var(--text-3)] mb-3">404</div>
        <h1 className="text-4xl tracking-tight mb-3">Page not found</h1>
        <p className="text-[var(--text-2)] mb-8">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="btn btn-primary">Return home</a>
      </div>
    </div>
  );
}
