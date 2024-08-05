export const setScreen = (screen: string) => ({
    type: 'SET_SCREEN' as const,
    payload: screen,
});

export const goBack = () => ({
    type: 'GO_BACK' as const,
});
