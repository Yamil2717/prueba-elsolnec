const ErrorMessage = ({ title, error }: { title: string, error: Error | null }) => {
    return (
        <div className="container mx-auto p-4 text-center">
            <div className="max-w-md mx-auto bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
                    {title}
                </h2>
                <p className="text-red-600 dark:text-red-300">
                    {error?.message ?? 'No se pudieron cargar las publicaciones. Por favor, intente nuevamente.'}
                </p>
            </div>
        </div>
    )
}

export default ErrorMessage
