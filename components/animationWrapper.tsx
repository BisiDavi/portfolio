import { PropsWithChildren } from 'react';
import { Animated } from 'react-animated-css';

export default function AnimationWrapper({ children }: PropsWithChildren<{}>) {
    return (
        <Animated
            animationIn='fadeInUp'
            animationOut='fadeOutDown'
            isVisible={true}
        >
            {children}
        </Animated>
    );
}
