// Tag.tsx

import { useState } from 'react';
import classNames from 'classnames';

// TagProps를 정의합니다.
export interface TagProps {
  text: string;
  color: string;
  image: string;
  onClick?: () => void;
}

// Tag 컴포넌트를 정의합니다.
const Tag: React.FC<TagProps> = ({ text, color, image, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    setIsSelected((prev) => !prev);
  };

  const tagColors = [
    { bg: 'bg-[#E2E9FF]', icon: 'fill-[#9EACD0]' },
    { bg: 'bg-[#F6EED4]', icon: 'fill-[#F5D781]' },
    { bg: 'bg-[#EDD0F5]', icon: 'fill-[#EBBCF7]' },
    { bg: 'bg-[#F9C7C7]', icon: 'fill-[#FE8C8C]' },
    { bg: 'bg-[#D5FBE5]', icon: 'fill-[#9CECBE]' },
  ];

  const selectedColorIndex = isSelected ? tagColors.length - 1 : undefined;
  const selectedColor =
    selectedColorIndex !== undefined
      ? tagColors[selectedColorIndex]
      : undefined;

  const tagClasses = classNames(
    color,
    'py-2 px-5',
    'rounded-2xl',
    'text-xs',
    'flex',
    'items-center',
    'justify-center',
    selectedColor?.bg,
    'sm:py-1 sm:px-4', // 모바일 화면 이상에서 더 큰 크기로 조절
    'md:py-2 md:px-5', // 테블릿 화면 이상에서 더 큰 크기로 조절
    'lg:py-2 lg:px-5' // 데스크탑 화면 이상에서 더 큰 크기로 조절
  );

  const iconClasses = classNames(
    'mr-2',
    'max-h-6',
    'object-contain',
    selectedColor?.icon
  );

  return (
    <label className="inline-flex relative m-4">
      <button className={tagClasses} onClick={handleButtonClick}>
        <img src={image} alt="Tag Icon" className={iconClasses} />
        {text}
      </button>
    </label>
  );
};

export default Tag;
