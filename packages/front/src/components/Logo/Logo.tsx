import { FC } from "react";
import cn from "classnames";

import { ILogoProps } from "./Logo.props";

import styles from "./Logo.module.css";

const Logo: FC<ILogoProps> = ({
  logoSrc,
  logoAlt,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={cn(styles.logoContainer, className)} {...props}>
      <img className={styles.logo} src={logoSrc} alt={logoAlt} />
    </div>
  );
};

export default Logo;
