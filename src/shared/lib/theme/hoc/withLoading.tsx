import React from "react";

interface WithLoadingProps {
    isLoading?: boolean;
}

function withLoading<P extends object>(
    WrappedComponent: React.ComponentType<P>
){
    return ({isLoading, ...props}: WithLoadingProps & P) => {
        if (isLoading){
            return (
                <div style={{textAlign: 'center', padding: '2rem'}}>
                    <div className="spinner"> Загрузка...</div>
                </div>
            );
        }
        return <WrappedComponent{...(props as P)} />;
    };
}

export default withLoading;


