import { useState } from 'react';

export default function useLoading() {
    const [loading, setLoading] = useState(false);

    function loadingState(state) {
        return setLoading(state);
    }

    return {
        loading,
        loadingState,
    };
}
