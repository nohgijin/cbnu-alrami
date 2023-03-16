import type { IconProps } from "src/type/props";

function Setting({ size, stroke }: IconProps) {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1345 16.2797C14.0922 16.2797 15.6792 14.6927 15.6792 12.735C15.6792 10.7773 14.0922 9.19031 12.1345 9.19031C10.1769 9.19031 8.58984 10.7773 8.58984 12.735C8.58984 14.6927 10.1769 16.2797 12.1345 16.2797Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2089 12.735C21.2115 11.9786 21.119 11.2248 20.9337 10.4914L22.4516 9.60736C22.5757 9.53426 22.6841 9.43737 22.7706 9.32224C22.8571 9.2071 22.92 9.07601 22.9556 8.93649C22.9913 8.79697 22.999 8.65178 22.9784 8.50927C22.9577 8.36676 22.9091 8.22973 22.8353 8.10607L21.3757 5.60393C21.3032 5.47819 21.2065 5.36802 21.0913 5.27977C20.9761 5.19153 20.8445 5.12694 20.7042 5.08973C20.5639 5.05253 20.4176 5.04343 20.2738 5.06297C20.1299 5.08251 19.9914 5.1303 19.8661 5.20359L19.032 5.679C18.8221 5.80296 18.5802 5.86198 18.3368 5.84862C18.0933 5.83527 17.8593 5.75012 17.6642 5.60393C16.9966 5.0644 16.2551 4.62342 15.4623 4.29448C15.235 4.20085 15.0411 4.04103 14.9057 3.83578C14.7704 3.63053 14.6999 3.38933 14.7033 3.1435V2.10094C14.7033 1.80895 14.5874 1.52892 14.3809 1.32246C14.1744 1.11599 13.8944 1 13.6024 1H10.6749C10.3829 1 10.1029 1.11599 9.89642 1.32246C9.68995 1.52892 9.57396 1.80895 9.57396 2.10094V3.1435C9.57611 3.39126 9.50315 3.63385 9.36468 3.83932C9.22622 4.04478 9.02875 4.20348 8.7983 4.29448C7.93449 4.64218 7.12764 5.11729 6.40459 5.70402C6.20978 5.86247 5.97128 5.95774 5.72093 5.97711C5.47057 5.99648 5.22025 5.93904 5.00339 5.81245L4.16934 5.31202C3.91703 5.16664 3.6174 5.12714 3.33603 5.20217C3.05466 5.2772 2.81448 5.46065 2.66806 5.71236L1.1501 8.24786C1.077 8.37252 1.02936 8.51043 1.00992 8.65362C0.990492 8.79682 0.999658 8.94244 1.03689 9.08207C1.07413 9.2217 1.13869 9.35255 1.22684 9.46705C1.31499 9.58156 1.42498 9.67744 1.55044 9.74914L2.52627 10.2996C2.73895 10.4199 2.91113 10.6007 3.021 10.8189C3.13087 11.0372 3.17349 11.2832 3.14347 11.5257C3.0905 11.9267 3.06264 12.3306 3.06006 12.735C3.06095 13.1454 3.09161 13.5552 3.15181 13.9611C3.18244 14.2048 3.14016 14.4521 3.03031 14.6718C2.92046 14.8915 2.74797 15.0737 2.53461 15.1955L1.57546 15.7459C1.4479 15.8155 1.33551 15.9099 1.24485 16.0234C1.1542 16.137 1.0871 16.2674 1.04749 16.4072C1.00788 16.547 0.996557 16.6933 1.01417 16.8376C1.03179 16.9818 1.078 17.1211 1.1501 17.2472L2.60968 19.7494C2.68138 19.8748 2.77726 19.9848 2.89177 20.073C3.00627 20.1611 3.13713 20.2257 3.27675 20.2629C3.41638 20.3001 3.562 20.3093 3.7052 20.2899C3.84839 20.2704 3.98631 20.2228 4.11096 20.1497L4.99505 19.6409C5.21191 19.5143 5.46223 19.4569 5.71258 19.4763C5.96294 19.4956 6.20144 19.5909 6.39625 19.7494C7.12043 20.3346 7.93067 20.8044 8.7983 21.1422C9.02875 21.2332 9.22622 21.3919 9.36468 21.5974C9.50315 21.8028 9.57611 22.0454 9.57396 22.2932V23.219C9.57396 23.511 9.68995 23.791 9.89642 23.9975C10.1029 24.2039 10.3829 24.3199 10.6749 24.3199H13.6024C13.8944 24.3199 14.1744 24.2039 14.3809 23.9975C14.5874 23.791 14.7033 23.511 14.7033 23.219V22.3266C14.693 22.0751 14.7603 21.8266 14.8961 21.6147C15.0319 21.4028 15.2296 21.2379 15.4623 21.1422C16.2574 20.8289 17.0043 20.4049 17.6809 19.8828C17.876 19.7366 18.11 19.6515 18.3534 19.6381C18.5969 19.6248 18.8388 19.6838 19.0487 19.8077L19.8828 20.2915C20.0081 20.3648 20.1466 20.4126 20.2904 20.4321C20.4343 20.4517 20.5806 20.4426 20.7209 20.4053C20.8612 20.3681 20.9927 20.3036 21.108 20.2153C21.2232 20.1271 21.3199 20.0169 21.3924 19.8911L22.852 17.389C22.9247 17.2639 22.9719 17.1255 22.9907 16.982C23.0095 16.8384 22.9997 16.6926 22.9616 16.5529C22.9236 16.4132 22.8582 16.2825 22.7692 16.1683C22.6802 16.0541 22.5695 15.9587 22.4433 15.8877L22.3265 15.821C21.9379 15.594 21.6223 15.2606 21.4169 14.8601C21.2115 14.4597 21.1248 14.0088 21.1672 13.5607C21.1672 13.2855 21.2089 13.0103 21.2089 12.735Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { Setting };
