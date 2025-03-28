import { motion, Variants } from 'framer-motion';
import { CSSProperties, FC } from 'react';

type SceletonProps = {
  duration?: number;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  background?: string;
  radius?: CSSProperties['borderRadius'];
};

export const Sceleton: FC<SceletonProps> = ({
  duration = 1,
  height = '100%',
  width = '100%',
  background = '#222222',
  radius: borderRadius = '8px',
}) => {
  const sceletonVariant: Variants = {
    hidden: {
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={sceletonVariant}
      style={{ width, height, background, borderRadius }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
};
