import React from 'react';

type Props = {
  width: number;
  height: number;
  useYn: boolean;
};

const VoteBasketballSvg = ({ width, height, useYn }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9105 5.32256C20.8037 3.60373 18.1917 2.62244 15.4743 2.52881C15.7384 4.08762 15.6706 5.68462 15.2754 7.21544C14.8801 8.74627 14.1663 10.1765 13.1805 11.4126L15.0005 13.2326L22.9105 5.32256ZM9.6268 11.3938L5.32305 7.09006C3.94104 8.78365 3.03039 10.8119 2.68305 12.9701C3.88631 13.2082 5.12616 13.1909 6.32232 12.9194C7.51849 12.6479 8.64428 12.1281 9.6268 11.3938ZM24.678 7.09006L16.768 15.0001L18.588 16.8201C19.8243 15.8345 21.2545 15.1208 22.7853 14.7256C24.316 14.3303 25.913 14.2624 27.4718 14.5263C27.3782 11.8089 26.3969 9.19692 24.678 7.09006ZM27.318 17.0301C26.1148 16.7919 24.8749 16.8092 23.6788 17.0807C22.4826 17.3523 21.3568 17.872 20.3743 18.6063L24.678 22.9101C26.0608 21.2169 26.9715 19.1884 27.318 17.0301ZM11.3943 9.62631C12.1286 8.64379 12.6483 7.518 12.9199 6.32184C13.1914 5.12567 13.2087 3.88582 12.9705 2.68256C10.8122 3.02933 8.78382 3.94004 7.09055 5.32256L11.3943 9.62631ZM17.0305 27.3176C19.1886 26.9707 21.2169 26.0605 22.9105 24.6788L18.6068 20.3751C17.8724 21.3573 17.3526 22.4829 17.081 23.6788C16.8095 24.8748 16.7923 26.1145 17.0305 27.3176ZM15.0005 16.7676L7.09055 24.6776C9.19741 26.3964 11.8094 27.3777 14.5268 27.4713C14.2627 25.9125 14.3305 24.3155 14.7257 22.7847C15.121 21.2538 15.8348 19.8237 16.8205 18.5876L15.0005 16.7676ZM5.32305 22.9101L13.233 15.0001L11.413 13.1801C10.1768 14.1656 8.74663 14.8793 7.21584 15.2745C5.68505 15.6698 4.08811 15.7377 2.5293 15.4738C2.62292 18.1912 3.60422 20.8032 5.32305 22.9101Z"
        fill={useYn ? '#DE1515' : 'b4b4b4'}
      />
    </svg>
  );
};

export default VoteBasketballSvg;
