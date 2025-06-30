import type { ITypographyProps } from './Typography.types';
import React from 'react';
import { useFormat, useTranslate } from '@/hooks';
import { checkHasLinkUrl, detectLinkUrl } from '@/utils/shared';
import { cn, mergeStyles } from '@/utils/styles';
import { typographyClasses } from './Typography.styles';

const Typography: React.FC<ITypographyProps> = (props) => {
  const {
    children,
    title = '',
    titleType = 'default',
    convertMethod = 'convert',
    errorKey,
    variant = 'p',
    className,
    style,
    color,
  } = props;
  const { translate } = useTranslate();
  const { convertData, revertData } = useFormat();

  const renderContent = () => {
    const content = children || title || '';
    if (!content || typeof content !== 'string' || titleType === 'default') {
      return content;
    }
    if (checkHasLinkUrl(title)) {
      return <span dangerouslySetInnerHTML={{ __html: detectLinkUrl(title) }} />;
    }
    if (titleType === 'locale') {
      return translate(title, errorKey || {});
    }
    return convertMethod === 'revert' ? revertData(titleType, title) : convertData(titleType, title);
  };

  console.log('alo', typographyClasses.variants[variant]);
  return (
    <p
      className={cn(
        typographyClasses.base,
        typographyClasses.variants[variant],
        className,
      )}
      style={mergeStyles([
        color && { color },
        style,
      ])}
    >
      {renderContent()}
    </p>
  );
};

export default Typography;
