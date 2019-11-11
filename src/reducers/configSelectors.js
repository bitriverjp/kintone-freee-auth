export const getValues = state => {
  return {
    clientId: state.config.clientId,
    clientSecret: state.config.clientSecret,
  }
}