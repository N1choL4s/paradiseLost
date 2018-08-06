import { css , keyframes } from 'styled-components';

const animIn = keyframes`
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0px); }
`;

/*
animation-delay 属性定义动画何时开始
animation-delay 值以秒或毫秒计

animation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见
none	不改变默认行为
forwards	当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）
backwards	在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
both	向前和向后填充模式都被应用

*/
export const fadeIn = (delay = 0) => css`
    animation: ${animIn} 0.5s;
    animation-fill-mode: forwards;
    animation-delay: ${delay}s;
    
    opacity: 0;
`;