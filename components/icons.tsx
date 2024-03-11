import * as React from "react";
import { IconSvgProps } from "@/types";

export const ThreeDots = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 6.99967C6.33333 6.35534 6.85567 5.83301 7.5 5.83301C8.14433 5.83301 8.66667 6.35534 8.66667 6.99967C8.66667 7.64401 8.14433 8.16634 7.5 8.16634C6.85567 8.16634 6.33333 7.64401 6.33333 6.99967Z" fill="white" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4167 6.99967C10.4167 6.35534 10.939 5.83301 11.5833 5.83301C12.2277 5.83301 12.75 6.35534 12.75 6.99967C12.75 7.64401 12.2277 8.16634 11.5833 8.16634C10.939 8.16634 10.4167 7.64401 10.4167 6.99967Z" fill="white" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6.99967C2.25 6.35534 2.77233 5.83301 3.41667 5.83301C4.061 5.83301 4.58333 6.35534 4.58333 6.99967C4.58333 7.64401 4.061 8.16634 3.41667 8.16634C2.77233 8.16634 2.25 7.64401 2.25 6.99967Z" fill="white" />
	</svg>

);

export const ChevronLeft = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 13L1 7L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>

);

export const Bell = ({
	size = 24,
	width, height, ...props
}: IconSvgProps) => (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01918 11.8637C5.23237 11.6221 5.601 11.5991 5.84254 11.8123C6.15139 12.0849 6.55571 12.2497 6.99993 12.2497C7.44415 12.2497 7.84846 12.0849 8.15731 11.8123C8.39885 11.5991 8.76749 11.6221 8.98067 11.8637C9.19386 12.1052 9.17088 12.4738 8.92934 12.687C8.41553 13.1405 7.73923 13.4163 6.99993 13.4163C6.26063 13.4163 5.58433 13.1405 5.07052 12.687C4.82898 12.4738 4.80599 12.1052 5.01918 11.8637Z" fill="white" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11258 1.77899C4.87835 1.01321 5.91696 0.583008 6.99993 0.583008C8.0829 0.583008 9.12151 1.01321 9.88728 1.77899C10.6531 2.54476 11.0833 3.58337 11.0833 4.66634C11.0833 6.3654 11.5103 7.49193 11.9579 8.21131L11.9648 8.22245C12.1732 8.55739 12.338 8.82218 12.4491 9.0149C12.5047 9.11147 12.5555 9.2045 12.593 9.28719C12.6117 9.32846 12.6327 9.37906 12.6491 9.43408C12.6627 9.47971 12.6886 9.57727 12.6789 9.696C12.6724 9.7758 12.6561 9.91216 12.5778 10.053C12.4996 10.1939 12.3924 10.2797 12.3281 10.3274C12.1821 10.4357 12.0144 10.4605 11.9585 10.4688L11.9559 10.4692C11.8699 10.4819 11.7723 10.4882 11.6739 10.4921C11.4783 10.4997 11.2076 10.4997 10.8708 10.4997H3.12901C2.7923 10.4997 2.52155 10.4997 2.32599 10.4921C2.22755 10.4882 2.12997 10.4819 2.04398 10.4692L2.04139 10.4688C1.98544 10.4605 1.81777 10.4357 1.67177 10.3274C1.60746 10.2797 1.50028 10.1939 1.42203 10.053C1.34377 9.91216 1.3275 9.7758 1.32098 9.696C1.31126 9.57727 1.33717 9.47971 1.35076 9.43408C1.36715 9.37906 1.38811 9.32846 1.40686 9.28719C1.4444 9.2045 1.49511 9.11147 1.55077 9.0149C1.66186 8.82216 1.82664 8.55735 2.03507 8.22237L2.04195 8.21131C2.48959 7.49193 2.91659 6.3654 2.91659 4.66634C2.91659 3.58337 3.3468 2.54476 4.11258 1.77899Z" fill="white" />
	</svg>

)

export const ArrowTopRight = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.83333 5C5.3731 5 5 5.3731 5 5.83333C5 6.29357 5.3731 6.66667 5.83333 6.66667H12.1548L5.24408 13.5774C4.91864 13.9028 4.91864 14.4305 5.24408 14.7559C5.56951 15.0814 6.09715 15.0814 6.42259 14.7559L13.3333 7.84518V14.1667C13.3333 14.6269 13.7064 15 14.1667 15C14.6269 15 15 14.6269 15 14.1667V5.83333C15 5.3731 14.6269 5 14.1667 5H5.83333Z" fill="white" />
	</svg>

)
export const BellTilt = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11153 2.83377C7.13396 2.59802 7.11553 2.35433 7.0507 2.11238C6.75886 1.02322 5.63934 0.376868 4.55018 0.668708C3.46102 0.960547 2.81466 2.08007 3.1065 3.16923C3.17133 3.41118 3.27722 3.63145 3.41452 3.8244C3.12588 4.06768 2.87142 4.34743 2.66139 4.65782C2.08834 5.50467 1.89019 6.51818 2.14599 7.47284C2.4642 8.66042 2.39635 9.57979 2.20764 10.2559L2.20451 10.2671C2.08317 10.7018 1.98839 11.0413 1.92853 11.2829C1.89861 11.4036 1.8736 11.5148 1.8588 11.6082C1.85145 11.6546 1.84444 11.7097 1.84274 11.7667C1.84147 11.8092 1.83974 11.919 1.88496 12.0395C1.90979 12.1056 1.96115 12.2363 2.07653 12.3529C2.19192 12.4695 2.32214 12.5222 2.38799 12.5477C2.4953 12.5893 2.59262 12.5934 2.64066 12.5938C2.69735 12.5943 2.75094 12.5892 2.79499 12.5835C2.88305 12.5721 2.9836 12.5513 3.08773 12.5273C3.2953 12.4793 3.58285 12.4023 3.94517 12.3052L4.67247 12.1103C5.18314 13.0154 6.25804 13.4972 7.30824 13.2158C8.35844 12.9344 9.04842 11.9797 9.03813 10.9405L10.8922 10.4437C11.2546 10.3466 11.5422 10.2695 11.746 10.2073C11.8482 10.1761 11.9457 10.1437 12.0276 10.1096C12.0686 10.0925 12.1176 10.0701 12.1665 10.0414C12.2079 10.017 12.2901 9.96481 12.3623 9.87515C12.4065 9.82013 12.4929 9.70937 12.5346 9.5507C12.5762 9.39203 12.5553 9.25312 12.5437 9.18345C12.5227 9.05655 12.4663 8.96233 12.4439 8.92614C12.414 8.87761 12.3803 8.83336 12.3508 8.79691C12.2913 8.72341 12.214 8.63963 12.1277 8.55003C11.9551 8.37079 11.7033 8.12415 11.3809 7.80837L11.3725 7.80015C10.871 7.309 10.3526 6.54673 10.0344 5.35915C9.77858 4.4045 9.10023 3.62584 8.18052 3.17897C7.84342 3.01518 7.48316 2.90014 7.11153 2.83377ZM4.85213 1.79562C4.38535 1.9207 4.10834 2.40049 4.23342 2.86727C4.2668 2.99186 4.32515 3.10269 4.40188 3.19606C4.64245 3.08398 4.89433 2.99218 5.15412 2.92257C5.4139 2.85296 5.67792 2.80653 5.94229 2.7833C5.96205 2.66408 5.95717 2.53892 5.92379 2.41434C5.79871 1.94756 5.31892 1.67055 4.85213 1.79562ZM7.83147 11.2638L5.87913 11.787C6.16424 12.0716 6.58916 12.2007 7.00629 12.0889C7.42341 11.9771 7.72688 11.6529 7.83147 11.2638Z" fill="white" />
	</svg>
)

export const LoveComment = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29165 1.16699C4.23108 1.16699 1.74999 3.64808 1.74999 6.70866C1.74999 7.32699 1.85148 7.92282 2.03918 8.47967C2.07219 8.57762 2.09162 8.63557 2.10425 8.67831L2.10838 8.69271L2.1062 8.69727C2.0912 8.72819 2.06892 8.7697 2.02723 8.84686L1.06364 10.6304C1.00392 10.7409 0.941603 10.8562 0.89875 10.9564C0.856152 11.0561 0.787154 11.2389 0.821104 11.4556C0.860899 11.7096 1.0104 11.9332 1.2299 12.0671C1.41715 12.1813 1.61244 12.1875 1.72079 12.1862C1.8298 12.1849 1.96013 12.1714 2.08506 12.1585L5.09213 11.8477C5.14029 11.8427 5.16547 11.8401 5.18391 11.8387L5.18629 11.8385L5.1935 11.8411C5.21616 11.8492 5.2469 11.861 5.29995 11.8815C5.91884 12.1199 6.5907 12.2503 7.29165 12.2503C10.3522 12.2503 12.8333 9.76924 12.8333 6.70866C12.8333 3.64808 10.3522 1.16699 7.29165 1.16699ZM5.23223 5.00663C5.88981 4.45171 6.765 4.61473 7.28983 5.22072C7.81466 4.61473 8.67854 4.45755 9.34742 5.00663C10.0163 5.5557 10.0976 6.48932 9.58118 7.14561C9.26125 7.55221 8.45826 8.29483 7.89355 8.80105C7.68613 8.987 7.58241 9.07997 7.45794 9.11743C7.35116 9.14957 7.22849 9.14957 7.12172 9.11743C6.99724 9.07997 6.89353 8.987 6.6861 8.80105C6.12139 8.29483 5.3184 7.55221 4.99848 7.14561C4.48208 6.48932 4.57466 5.56154 5.23223 5.00663Z" fill="white" />
	</svg>

)

export const Alarm = ({
	size = 24,
	width, height, ...props
}: IconSvgProps) => (
	<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0.833496 9.49967C0.833496 4.43706 4.93755 0.333008 10.0002 0.333008C15.0628 0.333008 19.1668 4.43706 19.1668 9.49967C19.1668 14.5623 15.0628 18.6663 10.0002 18.6663C4.93755 18.6663 0.833496 14.5623 0.833496 9.49967ZM10.8335 4.49967C10.8335 4.03944 10.4604 3.66634 10.0002 3.66634C9.53992 3.66634 9.16683 4.03944 9.16683 4.49967V9.49967C9.16683 9.81532 9.34516 10.1039 9.62748 10.245L12.9608 11.9117C13.3725 12.1175 13.873 11.9507 14.0789 11.539C14.2847 11.1274 14.1178 10.6268 13.7062 10.421L10.8335 8.98465V4.49967Z" fill="white" />
	</svg>

)

export const Dot = ({
	size = 24,
	width, height, ...props
}: IconSvgProps) => (
	<svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="2" cy="2.5" r="2" fill="white" />
	</svg>
)

export const Plus = ({
	size = 24,
	width, height, ...props
}: IconSvgProps) => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.99984 4.16699V15.8337M4.1665 10.0003H15.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
)

export const Telegram = ({
	size = 24,
	width, height, ...props
}: IconSvgProps) => (
	<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="79" height="79" rx="39.5" fill="url(#paint0_linear_6178_11862)" />
		<rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="url(#paint1_linear_6178_11862)" />
		<g opacity="0.4">
			<path d="M55.9919 22.4288C55.3323 22.2085 54.7182 22.3678 54.4129 22.4565C54.0802 22.5532 53.6836 22.708 53.2858 22.8633L25.024 33.8923C24.5793 34.0658 24.1485 34.2339 23.8161 34.3982C23.5288 34.5403 22.9182 34.8564 22.5774 35.5124C22.2016 36.2359 22.2021 37.0971 22.5788 37.8201C22.9204 38.4757 23.5313 38.7912 23.8187 38.9329C24.1514 39.0968 24.5822 39.2643 25.0271 39.4373L32.8938 42.4966C33.4807 42.7248 33.7741 42.8389 34.0661 42.8459C34.3241 42.8521 34.58 42.7983 34.8137 42.6887C35.0781 42.5647 35.3007 42.3421 35.746 41.8968L43.8217 33.8212C44.4725 33.1703 45.5278 33.1703 46.1787 33.8212C46.8295 34.472 46.8295 35.5273 46.1787 36.1782L38.103 44.2539C37.6578 44.6991 37.4351 44.9217 37.3111 45.1861C37.2016 45.4198 37.1477 45.6757 37.1539 45.9338C37.1609 46.2257 37.275 46.5191 37.5033 47.106L40.5625 54.9726C40.7355 55.4175 40.903 55.8484 41.067 56.1811C41.2087 56.4685 41.5241 57.0795 42.1797 57.4211C42.9027 57.7978 43.764 57.7983 44.4874 57.4224C45.1434 57.0816 45.4596 56.471 45.6016 56.1838C45.766 55.8513 45.934 55.4206 46.1075 54.9759L57.1365 26.714C57.2918 26.3162 57.4467 25.9196 57.5433 25.5869C57.632 25.2816 57.7913 24.6675 57.571 24.0079C57.322 23.2627 56.7372 22.6778 55.9919 22.4288Z" fill="white" />
		</g>
		<defs>
			<linearGradient id="paint0_linear_6178_11862" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
				<stop stop-color="white" stop-opacity="0.2" />
				<stop offset="1" stop-color="white" stop-opacity="0" />
			</linearGradient>
			<linearGradient id="paint1_linear_6178_11862" x1="10.3644" y1="3.59375" x2="61.795" y2="76.9076" gradientUnits="userSpaceOnUse">
				<stop stop-color="#3E3E3E" />
				<stop offset="1" stop-color="#2D2C2F" stop-opacity="0" />
			</linearGradient>
		</defs>
	</svg>

)