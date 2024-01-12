interface AlertProps {
    children: React.ReactNode,
    className?: string,
    type: 'info' | 'warning' | 'danger' | 'death' | 'security',
    title?: string,
    message?: string,
}

export default function Alert( props: AlertProps ) {
    switch ( props.type ) {
        case 'info':
            return <InfoAlert { ...props } />
        case 'warning':
            return <WarningAlert { ...props } />
        case 'danger':
            return <DangerAlert { ...props } />
        default:
            return <InfoAlert { ...props } />
    }
}


// Alerts

function InfoAlert( props: any ) {
    return (
        <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <InfoIcon className="h-12 w-12 text-blue-700" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800 mt-0">Attention needed</h3>
                    <div className="mt-2 text-sm text-blue-700">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                            totam eius aperiam dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WarningAlert( props: any ) {
    return (
        <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <WarningIcon className="h-12 w-12 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800 mt-0">Attention needed</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                            totam eius aperiam dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DangerAlert( props: any ) {
    return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <DangerIcon className="h-12 w-12 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 mt-0">Attention needed</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                            totam eius aperiam dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



// Icons

function InfoIcon( props: any ) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-blue-400">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>

    )
}

function WarningIcon( props: any ) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-yellow-400">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
    )
}

function DangerIcon( props: any ) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-red-400">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
    )
}
