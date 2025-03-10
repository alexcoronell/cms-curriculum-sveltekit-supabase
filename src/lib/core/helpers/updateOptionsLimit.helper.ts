export const updateOptionsLimit = (totalItems: number) => {
    const optionsSelect = []
    if (totalItems >= 5) {
        optionsSelect.push({ value: '5', label: '5' })
    }
    if (totalItems >= 10) {
        optionsSelect.push({ value: '10', label: '10' })
    }
    if (totalItems >= 25) {
        optionsSelect.push({ value: '25', label: '25' })
    }
    if (totalItems >= 50) {
        optionsSelect.push({ value: '50', label: '50' })
    }
    if (totalItems >= 100) {
        optionsSelect.push({ value: '100', label: '100' })
    }
    if (totalItems > 0) {
        optionsSelect.push({ value: `${totalItems}`, label: 'All' });
    }
    return optionsSelect
}