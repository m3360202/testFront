import { create } from 'zustand';


export const useMetircs = create((set) => ({
    during: '7D',
    loading: true,
    data: [],
    columns: ['actions', 'cpm', 'ctr', 'market_name', 'roas', 'spend'],
    chartColumns: [],
    options: [
        {
            label: 'actions',
            value: 'actions',
        },
        {
            label: 'cpm',
            value: 'cpm',
        },
        {
            label: 'ctr',
            value: 'ctr',
        },
        {
            label: 'market_name',
            value: 'market_name',
        },
        {
            label: 'roas',
            value: 'roas',
        },
        {
            label: 'spend',
            value: 'spend',
        },

    ]
}));