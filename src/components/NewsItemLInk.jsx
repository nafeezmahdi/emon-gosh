/* eslint-disable react/prop-types */
export default function NewsItemLInk({ children, link }) {
  return <a href={link}>{children}</a>;
}
