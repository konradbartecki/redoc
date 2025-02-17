import * as React from 'react';

import { ShelfIcon } from '../../common-elements';
import { Markdown } from '../Markdown/Markdown';

export interface ResponseTitleProps {
  code: string;
  title: string;
  type: string;
  empty?: boolean;
  opened?: boolean;
  className?: string;
  onClick?: () => void;
}

export class ResponseTitle extends React.PureComponent<ResponseTitleProps> {
  render() {
    const { title, type, empty, opened, className, onClick } = this.props;
    return (
      <div className={className} onClick={(!empty && onClick) || undefined}>
        {!empty && (
          <ShelfIcon
            size={'1.5em'}
            color={type}
            direction={opened ? 'up' : 'down'}
            float={'left'}
          />
        )}
        <Markdown compact={true} inline={true} source={title} />
      </div>
    );
  }
}
