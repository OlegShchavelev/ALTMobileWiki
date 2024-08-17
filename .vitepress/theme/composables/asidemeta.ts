import { isValidUrl } from './link'

export const getThumb = (data: any, alt: string) => {
  if (typeof data === 'object' && data.src) {
    return data
  } else if (typeof data === 'string' && isValidUrl(data)) {
    return {
      src: data,
      alt: alt
    }
  } else {
    return {}
  }
}

export const getDeveloper = (data: any, label: string) => {
  if (!data.name || !label || typeof data !== 'object') {
    return
  }

  return {
    ...{ label: label },
    ...data
  }
}

export const getLists = (data: any | ArrayLike<unknown>, labels: any) => {
  const _data = {}

  Object.entries(data).forEach(([key, value]) => {
    value && key !== 'donation'
      ? (_data[key] =
          typeof value !== 'string'
            ? {
                ...{ label: labels[key] },
                ...value
              }
            : {
                label: labels[key],
                link: value
              })
      : {}
  })

  return _data
}

export const getKeywords = (data: any, config: {}) => {
  const _data = {}

  if (!data) return

  Object.values(data).forEach((value: any) => {
    value && config[value] ? (_data[value] = config[value]) : {}
  })

  return _data
}

export const getLinks = (data: any, config: {}) => {
  const _data = {}

  Object.entries(data).forEach(([key, value]) => {
    value && config[key]
      ? (_data[key] = Object.assign({}, { id: value }, config[key]))
      : {}
  })

  return _data
}

export const getDonation = (donation: any) => {
  return donation?.link
    ? {
        donation: donation
      }
    : {
        link: donation
      }
}
