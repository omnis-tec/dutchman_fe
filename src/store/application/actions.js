export function list (ctx, params) {
  return this.$api.get('app', { params })
}

export function get (ctx, id) {
  return this.$api.get(`app/${id}`)
}

export function create (ctx, data) {
  return this.$api.post('app', data)
}

export function update (ctx, { id, data }) {
  return this.$api.put(`app/${id}`, data)
}

export function remove (ctx, id) {
  return this.$api.delete(`app/${id}`)
}
