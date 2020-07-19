import * as React from "react";

function SvgYdcLogo(props) {
  return (
    <svg width={188} height={165} {...props}>
      <image
        width={188}
        height={165}
        xlinkHref="data:image/png;base64,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 OnOQPwAAAABJRU5ErkJggg=="
      />
    </svg>
  );
}

export default SvgYdcLogo;