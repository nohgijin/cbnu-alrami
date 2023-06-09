import { IconProps } from "src/type/props";

function Hamburger({ size, stroke }: IconProps) {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.37964"
        y="4.58609"
        width="10.6206"
        height="1.44826"
        rx="0.72413"
        fill={stroke}
      />
      <path
        d="M0 5.31039C0 4.77715 0.432272 4.34488 0.965506 4.34488C1.49874 4.34488 1.93101 4.77715 1.93101 5.31039C1.93101 5.84362 1.49874 6.27589 0.965506 6.27589C0.432272 6.27589 0 5.84362 0 5.31039Z"
        fill={stroke}
      />
      <rect
        x="3.37964"
        y="8.93088"
        width="10.6206"
        height="1.44826"
        rx="0.72413"
        fill={stroke}
      />
      <path
        d="M0 9.65502C0 9.12179 0.432272 8.68951 0.965506 8.68951C1.49874 8.68951 1.93101 9.12179 1.93101 9.65502C1.93101 10.1883 1.49874 10.6205 0.965506 10.6205C0.432272 10.6205 0 10.1883 0 9.65502Z"
        fill={stroke}
      />
      <rect
        x="3.37964"
        y="0.241547"
        width="10.6206"
        height="1.44826"
        rx="0.72413"
        fill={stroke}
      />
      <path
        d="M0 0.965506C0 0.432272 0.432272 0 0.965506 0C1.49874 0 1.93101 0.432272 1.93101 0.965506C1.93101 1.49874 1.49874 1.93101 0.965506 1.93101C0.432272 1.93101 0 1.49874 0 0.965506Z"
        fill={stroke}
      />
    </svg>
  );
}

export { Hamburger };
