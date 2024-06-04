import { ProgressSpinner } from 'primereact/progressspinner';

export const Loader = () => {
    return (
        <div className="layout-mask-loader">
            <ProgressSpinner className='progress-spinner' strokeWidth="8" fill="transparent" animationDuration=".5s" />
        </div>
    );
};
