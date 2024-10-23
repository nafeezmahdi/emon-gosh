/* eslint-disable react/prop-types */
export default function NewsItem({ children, time }) {
  return (
    <li>
      <span style={{ fontFamily: "Monaco", color: "black" }}>
        <span className="text-[#a52a2a]">{`[${time}]`}</span> {children}
      </span>
    </li>
  );
}
