export default function createQualifiedPath ({ parentId, uuid }, path = '', resumeParentAt = null) {
  const routePrefix = parentId ? `/one/${parentId}/answer` : '/one'
  const resumePostfix = resumeParentAt ? `?resumeParentAt=${resumeParentAt}` : ''
  return `${routePrefix}/${uuid}${path}${resumePostfix}`
}
