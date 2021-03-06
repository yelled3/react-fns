import * as React from 'react';
import * as qs from 'qs';

export interface MailtoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Email address */
  email: string;
  /** Subject */
  subject?: string;
  /** List of email addresses to CC */
  cc?: string[];
  /** List of email addresses to Bcc */
  bcc?: string[];
  /** Email body text */
  body?: string;
}

export const Mailto: React.SFC<MailtoProps> = ({
  email,
  subject,
  cc,
  bcc,
  body,
  children,
  ...props,
}) => {
  return (
    <a
      href={`mailto:${email}?${qs.stringify({
        subject,
        cc: cc.join(', '),
        bcc: bcc.join(', '),
        body,
      })}`}
      {...props}
    >
      {children}
    </a>
  );
};

Mailto.displayName = 'Mailto';
