import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const useUpdateQuery = (initialState = '') => {
    const [updateQuery, setUpdateQuery] = useState(initialState);

    const newQuery = (search) => {
        setUpdateQuery(search);
    }

    return [updateQuery, newQuery];
}