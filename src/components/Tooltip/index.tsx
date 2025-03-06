import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { Tooltip as TooltipPrimitive } from 'radix-ui';
import { PropsWithChildren } from 'react';
import classes from './styles.module.css';

interface IProps extends PropsWithChildren {
  content: string | React.ReactNode;
  id?: string;
  delayDuration?: number;
  side?: TooltipContentProps['side'];
  sideOffset?: TooltipContentProps['sideOffset'];
  arrow?: boolean;
}

const Tooltip = (props: IProps) => {
  const {
    children,
    content,
    delayDuration = 200,
    id,
    side = 'bottom',
    sideOffset = 8,
    arrow = true,
  } = props;
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={classes.Content}
          id={id}
          side={side}
          sideOffset={sideOffset}
        >
          {arrow && <TooltipPrimitive.Arrow className={classes.Arrow} />}
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
