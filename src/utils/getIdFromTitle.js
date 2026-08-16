const getIdFromTitle = (title) => {
    const titleFormatted = title.toLowerCase()

    return titleFormatted.replaceAll(' ', '-')
}

export default getIdFromTitle