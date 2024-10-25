/* eslint-disable react/prop-types */
export default function NewsItemLInk({ children, link }) {
  return (
    <a href={link} className="hover:underline hover:text-black">
      {children}
    </a>
  );
}
