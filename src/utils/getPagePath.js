const externalPath = /^(#|[a-z][a-z0-9+.-]*:|\/\/)/i

const getPagePath = (path) => {
  if (externalPath.test(path)) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path.replace('/', '')}`
}

export default getPagePath
