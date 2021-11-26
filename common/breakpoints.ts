const size = {
  xs: '575.98px',
  sm: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
}

const device = {
  xs: `@media only screen and (max-width: ${size.xs})`,
  sm: `@media only screen and (max-width: ${size.sm})`,
  lg: `@media only screen and (max-width: ${size.lg})`,
  xl: `@media only screen and (max-width: ${size.xl})`
}

export default {size, device}